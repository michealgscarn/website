
var script_url = "https://script.google.com/macros/s/AKfycbyrL-nGMCugHQEZyYUqSKyKzzjlF0cGy1tAq3f5SRNcV65n913j/exec";
function insert_value() {
  var name = $("#name").val();
  var email = $("#email").val();
  var feedback = $("#feedback").val();
  var url = script_url + "?callback=ctrlq&name=" + name + "&email=" + email + "&feedback=" + feedback;
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
  $("#resetForm").reset();
}
function ctrlq(e) {
  alert('YEAAAAAAAAAAA')
}
