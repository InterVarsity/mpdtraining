function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6bKQBQmOp00":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var email = player.GetVar('TextEntry3');
var message = player.GetVar('TextEntry4');
var subject = 'MPD Story Feedback';
var emailBody = message;
var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(emailBody);
win = window.open(mailto_link, 'emailWin');
}

