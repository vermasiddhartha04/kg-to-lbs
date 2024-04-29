function convert() {
    var kgInput = document.getElementById("kgInput").value;
    var lbsOutput = kgInput * 2.20462;
    document.getElementById("result").innerHTML = kgInput + " kilograms is equal to " + lbsOutput.toFixed(2) + " pounds.";
  }
  