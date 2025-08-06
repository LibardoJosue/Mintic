function calcularedad(){
    const date_input = document.getElementById("CalculatorAge").value;
    console.log(date_input)
    if(date_input.length == 0){
        Sual.fire("Por favor ingrese una fecha");
        return;

    }
    else{
        var date = new Date(date_input);
        var today = new Date();
        let edad = today.getFullYear() - date.getFullYear();
        if(edad < 0 || (edad === 0 && today.getDate()< date.getDate())){
            edad--;
        }
        Sual.fire("Por favor ingrese una fecha")
        console.log(edad)
    }
    /*console.log(today.getDate())
    console.log(today.getDay())
    console.log(today.getFullYear())
    console.log(today.getHours())
    console.log(today.getMilliseconds())
    console.log(today.getMinutes())
    console.log(today.getMonth())
    console.log(today.getSeconds())
    console.log(today.getTime())
    console.log(today.getTimezoneOffset())*/
}