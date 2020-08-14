$(document).ready(function() {
  $("form#programming").submit(function(event) {
    const name = $("input#firstName").val();
    const age = parseInt($("input#age").val());
    const europe = $("select#europe").val();
    const math = parseInt($("input:radio[name=math]:checked").val());
    const rich = parseInt($("select#rich").val());
    event.preventDefault();
    $("#btnRefresh").click(function() {
      location.reload(false);
    })

    console.log(name, age, math, europe, rich);



    if (name === "") {
      $(alert("Please Enter A Name"))
      location.reload();
    } else if (age !== age) {
      $(alert("Please Enter Age"))
      location.reload();
    } else if ((europe.trim() === "euroYes".trim() && math === 2)) {
      $("#answer").show();
      $("#name").append(name);
      $("#cSharp").show();
    } else if ((age <= 18 || europe.trim() === "euroYes".trim())) {
      $("#answer").show();
      $("#name").append(name);
      $("#python").show();
    } else if ((age >= 21) && (rich === 2)) {
      $("#answer").show();
      $("#name").append(name);
      $("#ruby").show();
    } else {
      $("#answer").show();
      $("#name").append(name);
      $("#javascript").show();
    }
  })
});
