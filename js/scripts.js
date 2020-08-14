$(document).ready(function() {
  $("form#programming").submit(function(event){
    const name = $("input#firstName").val();
    const age = parseInt($("input#age").val());
    const europe = $("select#europe").val();
    const math = $("input:radio[name=math]:checked").val();
    const rich = $("select#rich").val();
  })
  console.log(name, age, euope, math, rich);
})
