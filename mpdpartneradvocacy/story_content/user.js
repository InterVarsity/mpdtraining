function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ogNb65KBcB":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var email = player.GetVar('address');
var message = player.GetVar('accountability');
var subject = 'I just prayed for you';
var emailBody = message;
var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(emailBody);
win = window.open(mailto_link, 'emailWin');
}

