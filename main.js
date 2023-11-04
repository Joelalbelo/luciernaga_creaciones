function calcularPrecio() {
    // Obtén los valores ingresados por el usuario
    const cantidadPrendas = parseInt(document.getElementById("cantidadPrendas").value);
    const opcionSeleccionada = document.getElementById("opcionSeleccionada").value;
    
    // Realiza el cálculo del precio según la opción seleccionada
    let precio = 0;
    if (opcionSeleccionada === "opcion1") {
      precio = ((cantidadPrendas*500)*0.9); 
    } else if (opcionSeleccionada === "opcion2") {
      precio = ((cantidadPrendas*500)*1.2); 
    } else if (opcionSeleccionada === "opcion3") {
      precio = ((cantidadPrendas*500)*1.3); 
    }
    
    // Muestra el resultado en la página
    document.getElementById("resultado").textContent = "$" + precio;
  }
  