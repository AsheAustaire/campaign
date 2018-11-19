(function(){

  const fs = require('fs');
  const readline = require("readline-sync");
  const merge = require('deepmerge')
////////////////////////
  
////////////////////////


  const character = {};

  // | META INFORMATION
  let meta = character.meta = {};
  // |- Player Name
  meta.playerName = readline.question("What is your name? (Not Character) : ");

  // | CHARACTER PHYSICAL ATTRIBUTES
  let general = character.general = {};
  // |- Character First Name
  general.firstName = readline.prompt("What is your Character's First Name? : ");
  // |- Character Last Name
  general.lastName = readline.question("What is your Character's Last Name? : ");
  // |- Character Race
  general.race = readline.question("What is your Character's Race? : ");
  // |- Character Age
  general.age = readline.question("What is your Character's Age? : ");
  // |- Character Height
  general.height = readline.question("What is your Character's Height : ");
  // |- Character Weight
  general.weight = readline.question("What is your Character's Weight? : ");
  // |- Character Eye Color
  general.eyeColor = readline.question("What is your Character's Eye Color? : ");
  // |- Character Skin Color
  general.skinColor = readline.question("What is your Character's Skin Color? : ");
  // |- Character Hair Color
  general.hairColor = readline.question("What is your Character's Hair Color? : ");
  // |- Character Type
  general.type = readline.question("Is your character\n1)Strong \n2)Agile \n3)Intelligent? ");
  
//   // | CHARACTER ABILITIES
  abilities = character.abilities = {};
  // |- Spoken Languages
  abilities.spokenLanguages = [];
  // |- Weapon Proficiencies
  abilities.weaponProficiencies = [];
  // |- Armor Proficiencies
  abilities.armorProficiencies = [];
  // |- Tool Proficiencies
  abilities.toolProficiencies = [];
  // |- Choose Cantrips
  abilities.cantrips = [];
  // |- Choose Spells
  abilities.spells = [];

  // | CHARACTER STATS
  let stats = character.stats = {};
  // |- Character Level
  stats.level = 1;
  // |- STR / DEX / WIS/ INT/ CHAR / CONST
  stats.base = {};
  stats.base.str = 0;
  stats.base.dex = 0;
  stats.base.const = 0;
  stats.base.int = 0;
  stats.base.wis = 0;
  stats.base.char = 0;
  console.log(character);
  console.log("");
  
  // |- STR / DEX / WIS/ INT/ CHAR / CONST // Modifiers
  stats.baseMods = {};
  stats.baseMods.strMod = 0;
  stats.baseMods.dexMod = 0;
  stats.baseMods.constMod = 0;
  stats.baseMods.intMod = 0;
  stats.baseMods.wisMod = 0;
  stats.baseMods.charMod = 0;
  // |- Armor Class
  stats.ac = 0;
  // |- Movement Speed
  stats.moveSpeed = 0;
  // |- Saving Throws
  stats.savingThrows = [];
  // |- Proficiency Mod
  stats.proficiencyMod
  // |- Initiative Bonus (Dex Modifier)
  stats.initiativeMod
  
  // | CHARACTER STORY
  let story = character.story = {}
  // |- Brief Description 
  story.short = readline.question("Please provide a few sentences describing your character");
  // |- Background 
  // story.background = readline.question("Please choose a background for your character");
  // |- Alignment 
  story.short = readline.question("What is your characters alignment?");
  // | OPTIONAL CHARACTER STORY
  // |- Affiliations˛
  // |- Bonds
  // |- Personality Traits
  // |- Flaws
  // |- Ideals

// /////////////////////////////// 

function assignBaseStats(playerType) {

  if (playerType === "agile") {
    let agileMod = require("../campaigns/res/agile_char.json");
    console.log(merge(character, agileMod));
  } else if (playerType === "strong") {
    let strongMod = require("../campaigns/res/strong_char.json");
    console.log(strongMod);
  } else if (playerType === "intelligent") {
    let intelligentMod = require("../campaigns/res/intelligent_char.json");
    console.log(intelligentMod);
  }


}

function createJson(fileName, content, callback) {
  fs.writeFile(`/Users/asheaustaire/Desktop/bostonfive/players/${fileName}.json`, content, callback)
}


//////////////////////////////

character = assignBaseStats(character.playerType.toLowerCase())

createJson(character.meta.playerName, JSON.stringify(character), function(err, data){
  console.log(data);
})
  

}())
