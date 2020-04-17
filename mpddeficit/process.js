//This will get the current date for the user
var d = new Date(),curr_date = d.getDate(),curr_month = d.getMonth() + 1,curr_year = d.getFullYear();
var player = opener?opener.top.GetPlayer():{} ;
/* ------------------ this is ONLY for debugging ----------- */
if (!player.GetVar) player={
    GetVar : function(idx) {
        return {printTitle:"Deficit Sprint Plan", printUserName:"Unknown"}[idx]
	}
}
/* ------------------ the above is ONLY for debugging ----------- */
$(function() {
  if (window.print) {
    $("#print").text("SAVE").on("click",function() { window.focus(); window.print() })
    $("#printDiv").show();
  }
  // var title = player.GetVar("printTitle"), userName = player.GetVar("printUserName");
  // $("#title").html(title);
  // $("#userName").html(userName);
  $("#date").html(curr_month + "." + curr_date + "." + curr_year);
  var numberOfAnswers = $(".answer").length;
  for (var i=1;i<=numberOfAnswers;i++) {
    var $content = $("#answer"+i);
    var q = player.GetVar("Q"+i);
    q=q?q.replace(/(\r\n|\r|\n)/g,"<br/>"):"No response provided."
    // window.console && console.log(q);
    $content.append("<p>"+(q)+"</p>");
  }
});
