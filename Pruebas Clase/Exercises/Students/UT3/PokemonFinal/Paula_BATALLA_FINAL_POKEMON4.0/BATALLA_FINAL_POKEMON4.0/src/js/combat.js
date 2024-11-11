let playerPokemon;//The player's Pokémon object.
let opponentPokemon;// The opponent's Pokémon object.
let isPlayerTurn = true;//A flag indicating whose turn it is (player's or opponent's).
let gameOver = false;//A flag indicating whether the game has ended or not.
let battleMusic;//The background music during the battle.
//Sound played when the player wins the battle.
const victorySound = new Audio('../audio/1-29. Victory (Vs. Gym Leader).mp3'); 
//Sound played when the player loses the battle.
const defeatSound = new Audio('../audio/1-45. Ending.mp3');


// This function retrieves a value from the cookies based on the provided name. It parses the value to JSON if possible.
function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
            try {
                return JSON.parse(decodeURIComponent(c.substring(nameEQ.length, c.length)));
            } catch (e) {
                return null;
            }
        }
    }
    return null;
}

// This function updates the UI, showing information about the player's and opponent's Pokémon (name, health, shiny status, etc.) and health bars. It also enables/disables the buttons depending on whose turn it is.

function updateUI() {

    document.getElementById('player-name').textContent = playerPokemon.name;
    document.getElementById('player-shiny').textContent = playerPokemon.isShiny ? '⭐' : '';
    document.getElementById('player-sprite').src = playerPokemon.img;
    document.getElementById('player-hp-text').textContent = `${playerPokemon.currentHP}/${playerPokemon.hp}`;
    
   
    const playerHealthPercent = (playerPokemon.currentHP / playerPokemon.hp) * 100;
    const playerHealthBar = document.getElementById('player-health');
    playerHealthBar.style.width = `${playerHealthPercent}%`;
    updateHealthBarColor(playerHealthBar, playerHealthPercent);


    document.getElementById('opponent-name').textContent = opponentPokemon.name;
    document.getElementById('opponent-shiny').textContent = opponentPokemon.isShiny ? '⭐' : '';
    document.getElementById('opponent-sprite').src = opponentPokemon.img;
    document.getElementById('opponent-hp-text').textContent = `${opponentPokemon.currentHP}/${opponentPokemon.hp}`;
    

    const opponentHealthPercent = (opponentPokemon.currentHP / opponentPokemon.hp) * 100;
    const opponentHealthBar = document.getElementById('opponent-health');
    opponentHealthBar.style.width = `${opponentHealthPercent}%`;
    updateHealthBarColor(opponentHealthBar, opponentHealthPercent);

 
    updateTypes('player-types', playerPokemon.types);
    updateTypes('opponent-types', opponentPokemon.types);

 
    const buttons = document.querySelectorAll('.move-btn');
    buttons.forEach(button => {
        button.disabled = !isPlayerTurn || gameOver;
    });
}
// This function changes the color of the health bar based on the current health percentage.
//Full health is green, between 25% and 50% is yellow, and below 25% is red.CSS
function updateHealthBarColor(healthBar, percentage) {
    if (percentage > 50) {
        healthBar.className = 'health-fill';
    } else if (percentage > 25) {
        healthBar.className = 'health-fill warning';
    } else {
        healthBar.className = 'health-fill danger';
    }
}
//This function updates the Pokémon types (like Fire, Water, etc.) on the UI, creating a visual representation for each type.
function updateTypes(containerId, types) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    types.forEach(type => {
        const typeSpan = document.createElement('span');
        typeSpan.className = `pokemon-type pokemon-type-${type.toLowerCase()}`;
        typeSpan.textContent = type;
        container.appendChild(typeSpan);
    });
}
//This function adds a message to the battle log, which is displayed to the player to show updates in the game.
function addBattleLog(message) {
    const battleLog = document.getElementById('battle-log');
    const logEntry = document.createElement('div');
    logEntry.textContent = message;
    battleLog.appendChild(logEntry);
    battleLog.scrollTop = battleLog.scrollHeight;
}

// This function calculates the damage dealt by an attack. It adjusts the damage based on the Pokémon's attack and defense, with a random variation and a type-based multiplier.
function calculateDamage(attacker, defender, moveType) {
    let baseDamage;
    switch (moveType) {
        case 'attack':
            baseDamage = attacker.attack * 0.5;
            break;
        case 'special':
            baseDamage = attacker.attack * 0.8;
            break;
        default:
            baseDamage = attacker.attack * 0.3;
    }

    const variation = 0.8 + Math.random() * 0.4;
    
    const finalDamage = Math.floor((baseDamage * variation * (100 / (100 + defender.defense))));
    return Math.max(1, finalDamage); // At least 1 damage
}

// This function handles the player's turn when a move is selected (attack, special attack, defense, or heal). It calculates the damage, updates the UI, and switches to the opponent’s turn after executing the move.
function executeMove(moveType) {
  if (!isPlayerTurn || gameOver) return;

  const attacker = playerPokemon;
  const defender = opponentPokemon;
  const attackerSprite = document.getElementById('player-sprite');
  const defenderSprite = document.getElementById('opponent-sprite');

  let damage = 0;
  let message = '';

  switch (moveType) {
      case 'attack':
          damage = calculateDamage(attacker, defender, 'attack');
          message = `${attacker.name} uses Attack! Deals ${damage} damage.`;
          attackerSprite.classList.add('attack');
          defenderSprite.classList.add('damage');
          break;
      case 'special':
          damage = calculateDamage(attacker, defender, 'special');
          message = `${attacker.name} uses Special Attack! Deals ${damage} damage.`;
          attackerSprite.classList.add('attack');
          defenderSprite.classList.add('damage');
          break;
      case 'defense':
          attacker.defense += 5;
          message = `${attacker.name} increases his defense!`;
          attackerSprite.classList.add('heal');
          break;
      case 'heal':
          const healAmount = Math.floor(attacker.hp * 0.2);
          attacker.currentHP = Math.min(attacker.hp, attacker.currentHP + healAmount);
          message = `${attacker.name} heals ${healAmount} PS!`;
          attackerSprite.classList.add('heal');
          break;
  }

  if (damage > 0) {
      defender.currentHP = Math.max(0, defender.currentHP - damage);
  }

  addBattleLog(message);

  // Clean animation. CSS
  setTimeout(() => {
      attackerSprite.classList.remove('attack', 'heal');
      defenderSprite.classList.remove('damage');
  }, 500);

  updateUI();
  checkGameEnd();

  if (!gameOver) {
      isPlayerTurn = false;  // Change to opponent turn
      setTimeout(executeOpponentTurn, 1000);
  }
}
    // This function checks if the game is over (if either the player or the opponent’s Pokémon has no remaining health) and disables all buttons once the game ends.
function checkGameEnd() {
  if (playerPokemon.currentHP <= 0) {
      addBattleLog(`${playerPokemon.name} has been defeated...`);
      addBattleLog(`${opponentPokemon.name} obtains the victory!!`);
      gameOver = true;
  } else if (opponentPokemon.currentHP <= 0) {
      addBattleLog(`${opponentPokemon.name} has been defeated...`);
      addBattleLog(`${playerPokemon.name} obtains the victory!!`);
      gameOver = true;
  }

  if (gameOver) {
      const buttons = document.querySelectorAll('.move-btn');
      buttons.forEach(button => button.disabled = true);
      displayEndMessage();
  }
}
// This function shows the end game message (victory or defeat) and plays the appropriate sound. It also creates a restart button for a new game and shows a visual overlay.
function displayEndMessage() {
    const endMessageEl = document.getElementById('end-message');
    const isVictory = playerPokemon.currentHP > 0;
    const message = isVictory ? 'Victory!!' : 'Defeat...';
    endMessageEl.textContent = message;
    
    // Stop battle music
    if (battleMusic) {
        battleMusic.pause();
        battleMusic.currentTime = 0;
    }

    // Play victory sound or defeat sound.
    if (isVictory) {
        victorySound.play();
    } else {
        defeatSound.play();
    }
    
    // Create and show overlay
    const overlay = document.createElement('div');
    overlay.className = 'game-over-overlay';
    document.body.appendChild(overlay);
    
    // Create button to new game
    const restartButton = document.createElement('button');
    restartButton.className = 'restart-button';
    restartButton.textContent = 'New Game';
    restartButton.onclick = resetGame;
    document.body.appendChild(restartButton);
    
    // Show animation
    setTimeout(() => {
        overlay.classList.add('visible');
        endMessageEl.classList.remove('hidden');
        endMessageEl.classList.add('visible');
        restartButton.classList.add('visible');
    }, 100);
}
//This function resets the game, stopping all sounds, deleting cookies, and redirecting the player to the home screen to start a new game.
function resetGame() {
    // Stop audio
    if (battleMusic) {
        battleMusic.pause();
        battleMusic.currentTime = 0;
    }
    victorySound.pause();
    victorySound.currentTime = 0;
    defeatSound.pause();
    defeatSound.currentTime = 0;
    
    // Delete cookies
    document.cookie = 'playerPokemon=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'opponentPokemon=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
    // Redirect to index screen
    window.location.href = '../src/index.html'
}

// Check if the game is over
function checkGameEnd() {
    if (playerPokemon.currentHP <= 0) {
        addBattleLog(`${playerPokemon.name} has been defeated...`);
        addBattleLog(`${opponentPokemon.name} obtains the victory!!`);
        gameOver = true;
    } else if (opponentPokemon.currentHP <= 0) {
        addBattleLog(`${opponentPokemon.name} has been defeated...`);
        addBattleLog(`${playerPokemon.name} obtains the victory!!`);
        gameOver = true;
    }

    if (gameOver) {
        const buttons = document.querySelectorAll('.move-btn');
        buttons.forEach(button => button.disabled = true);
        setTimeout(displayEndMessage, 1000); // Retrasar el mensaje final para dar tiempo a las animaciones
    }
}

// This function executes the opponent's turn by selecting a move randomly (attack, special attack, defense, or heal). It follows a similar structure to the player’s turn.
function executeOpponentTurn() {
  if (gameOver) return;

  const moveType = selectOpponentMove();
  const attacker = opponentPokemon;
  const defender = playerPokemon;
  const attackerSprite = document.getElementById('opponent-sprite');
  const defenderSprite = document.getElementById('player-sprite');

  let damage = 0;
  let message = '';

  switch (moveType) {
      case 'attack':
          damage = calculateDamage(attacker, defender, 'attack');
          message = `${attacker.name} uses Attack! Deals ${damage} damage.`;
          attackerSprite.classList.add('attack');
          defenderSprite.classList.add('damage');
          break;
      case 'special':
          damage = calculateDamage(attacker, defender, 'special');
          message = `${attacker.name} uses Special Attack! Deals ${damage} damege.`;
          attackerSprite.classList.add('attack');
          defenderSprite.classList.add('damage');
          break;
      case 'defense':
          attacker.defense += 5;
          message = `${attacker.name} increases his defense!`;
          attackerSprite.classList.add('heal');
          break;
      case 'heal':
          const healAmount = Math.floor(attacker.hp * 0.5);
          attacker.currentHP = Math.min(attacker.hp, attacker.currentHP + healAmount);
          message = `${attacker.name} heals ${healAmount} PS!`;
          attackerSprite.classList.add('heal');
          break;
  }

  if (damage > 0) {
      defender.currentHP = Math.max(0, defender.currentHP - damage);
  }

  addBattleLog(message);

  setTimeout(() => {
      attackerSprite.classList.remove('attack', 'heal');
      defenderSprite.classList.remove('damage');
      updateUI();  
      checkGameEnd();
      
      if (!gameOver) {
          isPlayerTurn = true; 
          updateUI(); 
      }
  }, 500);  
}

// This function randomly selects the opponent’s move from an array of possible moves.Seleccionar movimiento del oponente
function selectOpponentMove() {
  const moves = ['attack', 'special', 'defense', 'heal'];
  return moves[Math.floor(Math.random() * moves.length)];
}

// This function initializes the battle, setting the player's and opponent's Pokémon data and starting HP. It also hides the game-over message and updates the UI.Inicializar los datos de HP al máximo al inicio de la batalla
function initBattle(player, opponent) {
  playerPokemon = player;
  opponentPokemon = opponent;
  
  //HP maximun at the begining
  playerPokemon.currentHP = playerPokemon.hp;
  opponentPokemon.currentHP = opponentPokemon.hp;

  gameOver = false;
  isPlayerTurn = true;

  // Message hidden
  const endMessage = document.getElementById('end-message');
  if (endMessage) {
      endMessage.classList.add('hidden');
  }

  updateUI();
  addBattleLog(`The battle between ${playerPokemon.name} and ${opponentPokemon.name} begins!`);
}
//This part attaches event listeners to the move buttons to trigger the execution of the player's moves.
document.querySelectorAll('.move-btn').forEach(button => {
  button.addEventListener('click', () => {
      executeMove(button.dataset.moveType);
  });
});
//When the window loads, it retrieves the Pokémon data from cookies and starts the battle if the data exists.
window.onload = () => {
  playerPokemon = getCookie('playerPokemon');
  opponentPokemon = getCookie('opponentPokemon');

  if (playerPokemon && opponentPokemon) {
      battleMusic = document.querySelector('.audio audio');
      initBattle(playerPokemon, opponentPokemon);
  } else {
      console.error("No Pokémon data found in cookies.");
  }
};

