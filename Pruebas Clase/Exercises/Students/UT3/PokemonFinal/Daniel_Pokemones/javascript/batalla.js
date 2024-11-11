// Load the player's and enemy's pokemon from cookies
let playerPokemon = JSON.parse(document.cookie.replace(/(?:(?:^|.*;\s*)playerPokemon\s*=\s*([^;]*).*$)|^.*$/, "$1"));
let enemyPokemon = JSON.parse(document.cookie.replace(/(?:(?:^|.*;\s*)enemyPokemon\s*=\s*([^;]*).*$)|^.*$/, "$1"));

// Set the images, names, types, and HP of the player's and enemy's pokemon
document.getElementById('playerImg').src = playerPokemon.img;
document.getElementById('playerName').textContent = playerPokemon.name;
document.getElementById('playerType').textContent = `Tipo: ${playerPokemon.types.join(", ")}`;
document.getElementById('playerHP').textContent = `HP: ${playerPokemon.hp}`;

document.getElementById('enemyImg').src = enemyPokemon.img;
document.getElementById('enemyName').textContent = enemyPokemon.name;
document.getElementById('enemyType').textContent = `Tipo: ${enemyPokemon.types.join(", ")}`;
document.getElementById('enemyHP').textContent = `HP: ${enemyPokemon.hp}`;

// Initialize variables for the battle
let playerHpMax = playerPokemon.hp;
let enemyHpMax = enemyPokemon.hp;
let currentTurn = 'player';  
let pokemonCurado = false; 

// Function to handle the game turn
function gameTurn() {
    if (currentTurn === 'player') {
        
        enablePlayerActions();
    } else {
        
        executeEnemyAction();
    }
}

// Function to enable player actions
function enablePlayerActions() {
    // Enable player actions
    document.getElementById('attackButton').disabled = false;
    document.getElementById('healButton').disabled = false;
}

// Function to disable player actions
function disablePlayerActions() {
    document.getElementById('attackButton').disabled = true;
    document.getElementById('healButton').disabled = true;
}

// Function to handle the player's attack
function attack() {
    if (currentTurn !== 'player') return;  

    const damageToEnemy = Math.max(0, playerPokemon.attack - enemyPokemon.defense);
    enemyPokemon.hp -= damageToEnemy;

    // Update the HP display
    document.getElementById('playerHP').textContent = `HP: ${playerPokemon.hp}`;
 
    // Update the HP bar
    updateEnemyHealthBar();

    setBattleData();

    // Show the battle log
    updateBattleLog(`${playerPokemon.name} atacó a ${enemyPokemon.name} causando ${damageToEnemy} de daño.`);

    // Verify if the player has been defeated
    if (playerPokemon.hp <= 0) {
        // Update player's HP to 0 and the health bar
        playerPokemon.hp = 0;
        document.getElementById('playerHP').textContent = `HP: 0`;  // Show 0 HP
        updatePlayerHealthBar();  // Update the health bar to empty

        updateBattleLog(`${playerPokemon.name} ha sido derrotado. ¡${enemyPokemon.name} gana!`);
        disableBattleButtons();
    } else if (enemyPokemon.hp <= 0) {
        // Update enemy's HP to 0 and the health bar
        enemyPokemon.hp = 0;
        document.getElementById('enemyHP').textContent = `HP: 0`;  // Show 0 HP
        updateEnemyHealthBar();  // Update the health bar to empty

        updateBattleLog(`${enemyPokemon.name} ha sido derrotado. ¡${playerPokemon.name} gana!`);
        disableBattleButtons();
    } else {
        // Disable player actions and switch to the enemy's turn
        disablePlayerActions();
        currentTurn = 'enemy';
        setTimeout(gameTurn, 1000);  // Wait a second before the enemy acts
    }
}

// Function to handle the player's heal
function heal() {
    if (pokemonCurado || playerPokemon.hp === playerHpMax || currentTurn !== 'player') {
        updateBattleLog(`${playerPokemon.name} ya ha sido curado o tiene la salud máxima.`);
        return;
    }

    let healAmount = Math.floor(playerHpMax / 2);
    let actualHealAmount = Math.min(healAmount, playerHpMax - playerPokemon.hp);
    playerPokemon.hp += actualHealAmount;

    document.getElementById('playerHP').textContent = `HP: ${playerPokemon.hp}`;
    updateBattleLog(`${playerPokemon.name} se ha curado ${actualHealAmount} puntos de vida.`);
    setBattleData();

    // Update the HP bar
    updatePlayerHealthBar();

    pokemonCurado = true;

    // Disable player actions and switch to the enemy's turn
    disablePlayerActions();
    currentTurn = 'enemy';
    setTimeout(gameTurn, 1000);  // Wait a second before the enemy acts
}

// Function to execute the enemy's action
function executeEnemyAction() {
    if (currentTurn !== 'enemy') return;  
    // Random action for the enemy
    const randomAction = Math.random(); 
    if (randomAction < 0.7) {
        // The enemy attacks
        const damageToPlayer = Math.max(0, enemyPokemon.attack - playerPokemon.defense);
        playerPokemon.hp -= damageToPlayer;
        updateBattleLog(`${enemyPokemon.name} atacó a ${playerPokemon.name} causando ${damageToPlayer} de daño.`);
    } else {
        // The enemy heals
        let healAmount = Math.floor(enemyHpMax / 2);
        let actualHealAmount = Math.min(healAmount, enemyHpMax - enemyPokemon.hp);
        enemyPokemon.hp += actualHealAmount;
        updateBattleLog(`${enemyPokemon.name} se ha curado ${actualHealAmount} puntos de vida.`);
    }

    // Update the HP display
    updatePlayerHealthBar();
    updateEnemyHealthBar();

    // Verify if the enemy has been defeated
    if (enemyPokemon.hp <= 0) {
        updateBattleLog(`${enemyPokemon.name} ha sido derrotado. ¡${playerPokemon.name} gana!`);
        disableBattleButtons();
    } else {
        // Switch to the player's turn
        currentTurn = 'player';
        setTimeout(gameTurn, 1000);  // Wait a second before the player acts
    }
}

// Function to disable the battle buttons
function disableBattleButtons() {
    document.getElementById('attackButton').disabled = true;
    document.getElementById('healButton').disabled = true;
    document.getElementById('startBattleButton').style.display = 'inline-block';
}

// Function to update the battle log
function updateBattleLog(message) {
    const logContent = document.getElementById('logContent');
    const newLog = document.createElement('p');
    newLog.textContent = message;
    logContent.appendChild(newLog);
    logContent.scrollTop = logContent.scrollHeight; 
}
// Function to update the player's health bar
function updatePlayerHealthBar() {
    const playerHealthBar = document.getElementById('playerHealthBar');
    const playerHealthPercentage = (playerPokemon.hp / playerHpMax) * 100;
    playerHealthBar.style.width = `${playerHealthPercentage}%`;

    // Change the color of the bar based on HP
    if (playerHealthPercentage > 50) {
        playerHealthBar.style.backgroundColor = 'green';
    } else if (playerHealthPercentage > 20) {
        playerHealthBar.style.backgroundColor = 'yellow';
    } else {
        playerHealthBar.style.backgroundColor = 'red';
    }
}

// Function to update the enemy's health bar
function updateEnemyHealthBar() {
    const enemyHealthBar = document.getElementById('enemyHealthBar');
    const enemyHealthPercentage = (enemyPokemon.hp / enemyHpMax) * 100;
    enemyHealthBar.style.width = `${enemyHealthPercentage}%`;

    // Change the color of the bar based on HP
    if (enemyHealthPercentage > 50) {
        enemyHealthBar.style.backgroundColor = 'green';
    } else if (enemyHealthPercentage > 20) {
        enemyHealthBar.style.backgroundColor = 'yellow';
    } else {
        enemyHealthBar.style.backgroundColor = 'red';
    }
}
// Function to save the battle data in cookies
function setBattleData() {
    
    document.cookie = `playerPokemon=${JSON.stringify(playerPokemon)}; path=/; max-age=${7 * 24 * 60 * 60}`;
    document.cookie = `enemyPokemon=${JSON.stringify(enemyPokemon)}; path=/; max-age=${7 * 24 * 60 * 60}`;
}

// Add event listeners to the battle buttons
document.getElementById('attackButton').addEventListener('click', attack);
document.getElementById('healButton').addEventListener('click', heal);
document.getElementById('startBattleButton').addEventListener('click', function() {
    window.location.href = 'Pokemones.html'; 
});

//Initialize the game
gameTurn();  
