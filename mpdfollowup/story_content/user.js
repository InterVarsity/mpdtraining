function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NiQD2ik4s3":
        Script1();
        break;
      case "6V1Qhbw1DCF":
        Script2();
        break;
      case "5gYnCA25VGh":
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

