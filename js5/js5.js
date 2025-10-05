    function validarPassword() {
      let pass1 = document.getElementById("clave1").value;
      let pass2 = document.getElementById("clave2").value;

      if (pass1 === "" || pass2 === "") {
        alert("Por favor completa ambos campos.");
      } else if (pass1 === pass2) { // Uso de comparación estricta
        alert("Las contraseñas coinciden ✅");
      } else {
        alert("Las contraseñas NO coinciden ❌");
      }
    }