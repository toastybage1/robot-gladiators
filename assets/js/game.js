window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this: console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
for(var i = 0; i < enemyNames.length; i++) {
}
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
  while(playerHealth > 0 && enemyHealth > 0) {
// Alert players that they are starting the round


var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
console.log(promptFight)

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
// remove enemy's health by subtracting the amount set in the playerAttack variable
enemyHealth = enemyHealth - playerAttack;
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
  break;
} else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

// remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
  break;
} else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}


// if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
// confirm player wants to skip
var confirmSkip = window.confirm("Are you sure you'd like to quit?");

 // if yes (true), leave fight
if (confirmSkip) {
window.alert(playerName + " has decided to skip this fight. Goodbye!");
// subtract money from playerMoney for skipping
playerMoney = playerMoney - 10;
console.log("playerMoney", playerMoney);
break;
}
// if no (false), ask question again by running fight() again
else {
fight();
}
} 
else {
window.alert("You need to choose a valid option. Try again!");
}
};
  }
    

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}