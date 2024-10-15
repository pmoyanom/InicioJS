// Array of first division teams
const firstDivisionTeams = [
    "Team1",
    "Team2",
    "Team3",
    // Add more teams here
];

// Array of second division teams
const secondDivisionTeams = [
    "TeamA",
    "TeamB",
    "TeamC",
    // Add more teams here
];

// Shuffle the first division teams
const shuffledFirstDivisionTeams = firstDivisionTeams.sort(() => Math.random() - 0.5);

// Shuffle the second division teams
const shuffledSecondDivisionTeams = secondDivisionTeams.sort(() => Math.random() - 0.5);

// Pair the first division teams
const firstDivisionPairs = [];
for (let i = 0; i < 9; i++) {
    const team1 = shuffledFirstDivisionTeams[i * 2];
    const team2 = shuffledFirstDivisionTeams[i * 2 + 1];
    firstDivisionPairs.push([team1, team2]);
}

// Pair the second division teams
const secondDivisionPairs = [];
for (let i = 0; i < 5; i++) {
    const team1 = shuffledSecondDivisionTeams[i * 2];
    const team2 = shuffledSecondDivisionTeams[i * 2 + 1];
    secondDivisionPairs.push([team1, team2]);
}

// Get the team for the pleno al 15 match
const plenoAl15Team = shuffledFirstDivisionTeams[18];

// Print the pairs
console.log("First Division Pairs:");
console.log(firstDivisionPairs);
console.log("Pleno al 15 Team:");
console.log(plenoAl15Team);
console.log("Second Division Pairs:");
console.log(secondDivisionPairs);