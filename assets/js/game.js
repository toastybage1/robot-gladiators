window.alert("Welcome to Robot Gladiators!");



var randomNumber = function() {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// You can also log multiple values at once like this: console.log(playerInfo.name, playerInfo.attack, playerInfo.health);
var getPlayerName = function() {
  var name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }***********************************

  console.log("Your robot's name is " + name);
  return name;
};

var playerInfo = {
  name: getPlayerName,
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma!
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];



var fight = function(enemy) {
  console.log(enemy);
  while(playerInfo.health > 0 && enemy.health > 0) {
// Alert players that they are starting the round


var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
console.log(promptFight)

// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
// remove enemy's health by subtracting the amount set in the playerInfo.attack variable
enemy.health = Math.max(0, enemy.health - playerInfo.attack);
console.log(
  playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
);

// check enemy's health
if (enemy.health <= 0) {
  window.alert(enemy.name + " has died!");
  break;
} else {
  window.alert(enemy.name + " still has " + enemy.health + " health left.");
}

// remove player's health by subtracting the amount set in the enemy.attack variable
playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
console.log(
  enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
);

// check player's health
if (playerInfo.health <= 0) {
  window.alert(playerInfo.name + " has died!");
  break;
} else {
  window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
}


// if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
// confirm player wants to skip
var confirmSkip = window.confirm("Are you sure you'd like to quit?");

 // if yes (true), leave fight
if (confirmSkip) {
window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
// subtract money from playerInfo.money for skipping
playerInfo.money = Math.max(0, playerInfo.money - 10);
console.log("playerInfo.money", playerInfo.money);
break;
}
// if no (false), ask question again by running fight() again
else {
  promptFight = promptFight.toLowerCase();
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
    // Conditional Recursive Function Call
    if (promptFight === "skip") {
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping, but don't let them go into the negative
        playerInfo.money = Math.max(0, playerInfo.money - 10);
  
        // return true if player wants to leave
        return true;
      }
  window.alert("You need to provide a valid answer! Please try again.");
  return fightOrSkip();
}
  
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerInfo.playerMoney = playerInfo.money - 10;
        shop();
      }
    }
  }
fight();
}
} 
else {
window.alert("You need to choose a valid option. Try again!");
}
};
  }
    

var startGame = function() {

  playerInfo.reset();

  var startGame = function() {
    for (var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
        var pickedEnemyObj = enemyInfo[i];
  
        pickedEnemyObj.health = randomNumber(40, 60);
  
        fight(pickedEnemyObj);

        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
          shop();
          var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

          if(storeConfirm) {
            shop();
          }
        }
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
    endGame();
  };
}

var endGame = function() {
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
    // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } 
  else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

var shop = function() {
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
  );

  // use switch case to carry out action
  switch (shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
};



startGame();