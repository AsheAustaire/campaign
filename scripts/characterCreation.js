(function(){

  const fs = require('fs');
  const readline = require("readline-sync");
  const merge = require('deepmerge')

  const baseCharacter = {};

  // | META INFORMATION
  console.log(`
  ~~~~~~~~~
  meta info
  ~~~~~~~~~
  `);
  
  let meta = baseCharacter.meta = {};
  // |- Player First Name
  meta.playerFirstName = readline.question("What is your first name? (Not Character) : ");
  // |- Player Last Name
  meta.playerLastName = readline.question("What is your last name? (Not Character) : ");

  console.log(`
  ~~~~~~~~~~~~~~~~~
  character general
  ~~~~~~~~~~~~~~~~~
  `);
  // | CHARACTER PHYSICAL ATTRIBUTES
  let general = baseCharacter.general = {};
  // |- Character First Name
  general.firstName = readline.question("What is your Character's First Name? : ");
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
  
  switch(general.type) {
    case "1": 
      general.type = "strong"
      break;
    case "2":
      general.type = "agile"
      break;
    case "3":
      general.type = "intelligent"
      break;
  }

//   // | CHARACTER ABILITIES
  abilities = baseCharacter.abilities = {};
  // |- Spoken Languages
  abilities.spokenLanguages = []; // Decided on by race, type
  // |- Weapon Proficiencies
  abilities.weaponProficiencies = []; // Decided by type
  // |- Armor Proficiencies
  abilities.armorProficiencies = []; // Decided by type
  // |- Tool Proficiencies
  // abilities.toolProficiencies = []; // Decided by profession
  // |- Choose Feats
  abilities.feats = [];
  // |- Choose Cantrips
  abilities.cantrips = [];
  // |- Choose Spells
  abilities.spells = [];

  // | CHARACTER STATS
  let stats = baseCharacter.stats = {};
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
  // |- STR / DEX / WIS/ INT/ CHAR / CONST // Modifiers
  stats.baseMods = {};
  stats.baseMods.strMod = 0;
  stats.baseMods.dexMod = 0;
  stats.baseMods.constMod = 0;
  stats.baseMods.intMod = 0;
  stats.baseMods.wisMod = 0;
  stats.baseMods.charMod = 0;
  // |- Max HP
  stats.hp = 0;
  // |- Armor Class
  stats.ac = 0;
  // |- Movement Speed
  stats.moveSpeed = 0;
  // |- Saving Throws
  stats.savingThrows = [];
  // |- Proficiency Mod
  stats.proficiencyMod = 2;
  // |- Initiative Bonus (Dex Modifier)
  stats.initiativeMod = 2;

  // CHARACTER LIVE STATS
  let live = baseCharacter.liveStats = {};
  // |- Initiative Bonus (Dex Modifier)
  live.currentHp = 0;

  // | CHARACTER STORY
  
  console.log(`
  ~~~~~~~~~~~~~~~
  character story
  ~~~~~~~~~~~~~~~
  `);
  let story = baseCharacter.story = {}
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
  console.warn(baseCharacter.general.type.toLowerCase());
  if (playerType === "agile") {
    let agileMod = require("../campaigns/res/agile_char.json");
   return  merge(baseCharacter, agileMod);
  } else if (playerType === "strong") {
    let strongMod = require("../campaigns/res/strong_char.json");
    return merge(baseCharacter, strongMod);
  } else if (playerType === "intelligent") {
    let intelligentMod = require("../campaigns/res/intelligent_char.json");
    return merge(baseCharacter, intelligentMod);
  }


}

function createJson(fileName, content, callback) {
  fs.writeFile(`/Users/asheaustaire/Desktop/bostonfive/players/${fileName}.json`, content, callback)
}


//////////////////////////////

const character = assignBaseStats(baseCharacter.general.type.toLowerCase())
console.log(character);

  createJson(`${character.general.firstName} ${character.general.lastName}`, JSON.stringify(character), function(err, data){
  console.log(data);
})
  


function test(){
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
}
}())
