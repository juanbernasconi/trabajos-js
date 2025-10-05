    function mostrarPrecio() {
      let pizza = document.getElementById("pizzas").value;
      let precio = "";

      switch (pizza) {
        case "jyq":
          precio = "$2500";
          break;
        case "muzza":
          precio = "$2200";
          break;
        case "morrones":
          precio = "$2700";
          break;
        default:
          precio = "";
      }

      document.getElementById("precio").value = precio;
    }