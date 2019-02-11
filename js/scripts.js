$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var yourNameInput = $("input#yourName").val();
    var dateInput = $("input#date").val();
    var startTimeInput= $("input#startTime").val();
    var endTimeInput = $("input#endTime").val();
    var commentsInput = $("input#comments").val();

    $(".yourName").text(yourNameInput);
    $(".date").text(dateInput);
    $(".startTime").text(startTimeInput);
    $(".endTime").text(endTimeInput);
    $(".comments").text(commentsInput);

    $("#confirmation").show();

    event.preventDefault();
  });
});
