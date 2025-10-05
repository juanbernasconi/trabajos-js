    function calcularPresupuesto() {
      // obtener valores de cada SELECT (se guardan como número)
      let procesador = parseInt(document.getElementById("procesador").value);
      let monitor = parseInt(document.getElementById("monitor").value);
      let disco = parseInt(document.getElementById("disco").value);

      // calcular total
      let total = procesador + monitor + disco;

      // mostrar en el campo de texto
      document.getElementById("total").value = "$" + total;
    }