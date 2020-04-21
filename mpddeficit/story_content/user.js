function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6leUqm8LFmV":
        Script1();
        break;
      case "66Ta4nTlj8W":
        Script2();
        break;
      case "6ayaZ5dRbVC":
        Script3();
        break;
      case "6j5M1Xtqjzf":
        Script4();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var targetNumber = player.GetVar("AverageDonation");
var baseNumber = Math.floor(targetNumber);
var upOrdown = targetNumber - baseNumber
if (upOrdown >= .5) {
    targetNumber = baseNumber +1
    } else{
    targetNumber = baseNumber
    };
player.SetVar("AverageDonation", targetNumber);

var targetNumber2 = player.GetVar("NumberOfPartners");
var baseNumber2 = Math.floor(targetNumber2);
var upOrdown = targetNumber2 - baseNumber2
if (upOrdown >= .5) {
    targetNumber2 = baseNumber2 +1
    } else{
    targetNumber2 = baseNumber2
    };
player.SetVar("NumberOfPartners", targetNumber2);

var targetNumber3 = player.GetVar("NumberOfProspects");
var baseNumber3 = Math.floor(targetNumber3);
var upOrdown = targetNumber3 - baseNumber3
if (upOrdown >= .5) {
    targetNumber3 = baseNumber3 +1
    } else{
    targetNumber3 = baseNumber3
    };
player.SetVar("NumberOfProspects", targetNumber3); 

var targetNumber4 = player.GetVar("Asks");
var baseNumber4 = Math.floor(targetNumber4);
var upOrdown = targetNumber4 - baseNumber4
if (upOrdown >= .5) {
    targetNumber4 = baseNumber4 +1
    } else{
    targetNumber4 = baseNumber4
    };
player.SetVar("Asks", targetNumber4); 

var targetNumber5 = player.GetVar("Engage");
var baseNumber5 = Math.floor(targetNumber5);
var upOrdown = targetNumber5 - baseNumber5
if (upOrdown >= .5) {
    targetNumber5 = baseNumber5 +1
    } else{
    targetNumber5 = baseNumber5
    };
player.SetVar("Engage", targetNumber5); 
}

function Script2()
{
  window.open("print.html","_blank");
}

function Script3()
{
  window.print();
}

function Script4()
{
  var player = GetPlayer();
var targetNumber = player.GetVar("AverageDonation");
var baseNumber = Math.floor(targetNumber);
var upOrdown = targetNumber - baseNumber
if (upOrdown >= .5) {
    targetNumber = baseNumber +1
    } else{
    targetNumber = baseNumber
    };
player.SetVar("AverageDonation", targetNumber);

var targetNumber2 = player.GetVar("NumberOfPartners");
var baseNumber2 = Math.floor(targetNumber2);
var upOrdown = targetNumber2 - baseNumber2
if (upOrdown >= .5) {
    targetNumber2 = baseNumber2 +1
    } else{
    targetNumber2 = baseNumber2
    };
player.SetVar("NumberOfPartners", targetNumber2);

var targetNumber3 = player.GetVar("NumberOfProspects");
var baseNumber3 = Math.floor(targetNumber3);
var upOrdown = targetNumber3 - baseNumber3
if (upOrdown >= .5) {
    targetNumber3 = baseNumber3 +1
    } else{
    targetNumber3 = baseNumber3
    };
player.SetVar("NumberOfProspects", targetNumber3); 

var targetNumber4 = player.GetVar("Asks");
var baseNumber4 = Math.floor(targetNumber4);
var upOrdown = targetNumber4 - baseNumber4
if (upOrdown >= .5) {
    targetNumber4 = baseNumber4 +1
    } else{
    targetNumber4 = baseNumber4
    };
player.SetVar("Asks", targetNumber4); 

var targetNumber5 = player.GetVar("Engage");
var baseNumber5 = Math.floor(targetNumber5);
var upOrdown = targetNumber5 - baseNumber5
if (upOrdown >= .5) {
    targetNumber5 = baseNumber5 +1
    } else{
    targetNumber5 = baseNumber5
    };
player.SetVar("Engage", targetNumber5); 
}

