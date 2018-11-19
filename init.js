(function(){

  const Config = require("./configs/initConfig.json");
  const prompt = require('readline-sync');
  
  init();
  
  function init() {
    console.log(Config.introText);
    let userChoice = promptCampaignType();
    
   
  //   if (userChoice === "Ashe's Custom Campaign") {
  //     ashesCustomCampaign();
  //   }

  // }

  function promptCampaignType() {
  //   let userChoiceIndex;

  //   console.log('Please Select a Campaign Type Number!');
  //   userChoiceIndex = prompt.keyInSelect(Config.gameModes, 'Which Mode?');  
  //   return Config.gameModes[userChoiceIndex]; 

  }
  
  
}())



