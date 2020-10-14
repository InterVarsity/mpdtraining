function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6phdX5nnMAK":
        Script1();
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

