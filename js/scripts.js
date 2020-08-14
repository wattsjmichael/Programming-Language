$(document).ready(function() {
  $("form#programming").submit(function(event){
    const name = $("input#firstName").val();
    const age = parseInt($("input#age").val());
    const europe = $("select#europe").val();
    const math = parseInt($("input:radio[name=math]:checked").val());
    const rich = $("select#rich").val();
    event.preventDefault();
    console.log(name, age, math, europe, rich);



  if (math === 1) {
    $("#answer").show();
  }
  })


});
