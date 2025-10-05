    function elevarCubo() {
      let valor = document.getElementById("numero").value;  // tomar valor del Input
      let numero = parseInt(valor);  // convertir a Entero

      if (isNaN(numero)) {
        alert("Por favor ingresa un número válido.");
      } else {
        let cubo = Math.pow(numero, 3);  // elevar al Cubo
        alert("El número " + numero + " elevado al cubo es: " + cubo);
      }
      
    }