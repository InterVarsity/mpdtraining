function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6GGRnaBaEBn":
        Script1();
        break;
      case "6F11ir1dVu0":
        Script2();
        break;
      case "6QbeVqlfb2P":
        Script3();
        break;
      case "6rHw2NzTqhe":
        Script4();
        break;
  }
}

function Script1()
{
  window.open("print.html","_blank");
}

function Script2()
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
}

function Script3()
{
  window.open("print.html","_blank");
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
}

