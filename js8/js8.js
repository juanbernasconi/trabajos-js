    function corregirExamen() {
      // respuestas correctas (según value del option)
      let respuestasCorrectas = ["b", "c", "a", "d"];

      let correctas = 0;
      let incorrectas = 0;

      // recorrer las 4 preguntas
      for (let i = 1; i <= 4; i++) {
        let seleccion = document.getElementById("p" + i).value;
        if (seleccion === respuestasCorrectas[i - 1]) {
          correctas++;
        } else {
          incorrectas++;
        }
      }

      // mostrar resultado
      document.getElementById("resultado").innerText =
        "Correctas: " + correctas + " | Incorrectas: " + incorrectas;
    }