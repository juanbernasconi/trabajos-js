    function concatenar() {

      let nombre = document.getElementById("nombre").value;
      let apellido = document.getElementById("apellido").value;

      if (nombre === "" || apellido === "") {  // el triple = es para una comparacion estricta, tambien se puede usar doble ==
        alert("Por favor ingresa nombre y apellido.");
      } else {
        document.getElementById("resultado").value = nombre + " " + apellido;
      }
    }