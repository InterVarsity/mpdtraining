function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5tZPZ9i0Hoe":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var email = player.GetVar('address');
var message = player.GetVar('accountability');
var subject = 'Asking for Accountability As I Engage Donors';
var emailBody = message;
var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(emailBody);
win = window.open(mailto_link, 'emailWin');
}

