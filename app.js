function calculatePi(n) {
    //Input too long or not a number, default to 30
    if (n === undefined || n > 30) {
      n = 30;
    }
    
    //Machin's formula for pi:
    return (16 * Math.atan(1 / 5) - 4 * Math.atan(1 / 239)).toFixed(n);
  }
  
  $("#submit").click(function() {
    var digits = $("#digits").val();
    $("#result").html(calculatePi(digits));
  });
  