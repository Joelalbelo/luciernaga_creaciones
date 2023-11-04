const formulario = document.querySelector("#formulario-compra");
const precio = document.querySelector("#totalPago");
const opciones = formulario.querySelectorAll(".form-check-input");
const numero = document.querySelector("#numero");
const totalpago = document.querySelector("#totalPago");


opciones.forEach((check)=>{
    check.addEventListener("click", ()=>{
        let precio = 500;
        let cantidad = 0;
        let descuento = 1;

        opciones.forEach((check)=>{
            if(check.checked)
                cantidad++;
        })

        if(parseInt(numero.value)>5 && parseInt(numero.value)<=15)
            descuento=.9;
        if(parseInt(numero.value)>15 && parseInt(numero.value)<=25)
            descuento=.85;
        if(parseInt(numero.value)>=25)
            descuento=.7

        totalpago.innerHTML = precio*parseInt(numero.value)*cantidad*descuento
    });
})
