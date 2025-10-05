    function mostrarMayor() {
      let valor1 = document.getElementById("num1").value;
      let valor2 = document.getElementById("num2").value;

      let num1 = parseFloat(valor1); //convertir en Float
      let num2 = parseFloat(valor2); //convertir en Float

      if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor ingresa dos números válidos.");
      } else if (num1 > num2) {
        alert("El mayor es: " + num1);
      } else if (num2 > num1) {
        alert("El mayor es: " + num2);
      } else {
        alert("Ambos números son iguales.");
      }
    }