function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5X0GumCrrmE":
        Script1();
        break;
      case "6PmjBaCj2hg":
        Script2();
        break;
  }
}

function Script1()
{
  var lmsAPI = parent
var name = lmsAPI.GetStudentName();
var nameArray = name.split(",");
var fullName = nameArray[1] + " " + nameArray[0];
var player = GetPlayer();
player.SetVar("printUserName",fullName);
}

function Script2()
{
  window.open("print.html","_blank","width=800,height=600,menubar=no,scrollbars=no");
}

