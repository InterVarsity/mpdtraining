function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5jCN8x9trUk":
        Script1();
        break;
      case "6g2NdpDR3IL":
        Script2();
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

function Script2()
{
  var player = GetPlayer();
var email = player.GetVar('address2');
var message = player.GetVar('message2');
var subject = 'Let's talk about advocating for other staff';
var emailBody = message;
var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(emailBody);
win = window.open(mailto_link, 'emailWin');
}

