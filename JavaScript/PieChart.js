
var script_url = "https://script.google.com/macros/s/AKfycbyzprRcba5BHMNx9i5FcHTwyYs4nxuiOGnoXvKuXz_ObHgX80qb/exec";
function insert_value() {
  var id1 = $("#id").val();
  var name = $("#name").val();
  var email = $("#email").val();
  var city = $("#city option:selected").val();
  var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + id1 + "&email=" + email + "&city=" + "&action=insert";
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
