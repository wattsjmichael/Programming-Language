$(document).ready(function() {
  $("form#programming").submit(function(event){
    const name = $("input#firstName").val();
    const age = parseInt($("input#age").val());
    const europe = $("select#europe").val();
    const math = parseInt($("input:radio[name=math]:checked").val());
    const rich = parseInt($("select#rich").val());
    event.preventDefault();
    console.log(name, age, math, europe, rich);



  if ((age >= 21) && (rich === 2)) {
    refresh();
    $("#answer").show();
    $("#name").append(name);
    $("#ruby").show();
  } else if ((europe.trim() === "euroYes".trim() && math === 2)) {
    $("#answer").show();
    $("#name").append(name);
    $("#cSharp").show();
  } else if (rich === 2) {
    $("#answer").show();
    $("#name").append(name);
    $("#python").show();
  }

  })


});
