function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6bjgp37LQZ1":
        Script1();
        break;
      case "6KcVTWNbOQC":
        Script2();
        break;
      case "5ev8qm9FoV3":
        Script3();
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

function Script3()
{
  window.open("print.html","_blank","width=800,height=600,menubar=no,scrollbars=no");
}

