var control = 0;
var stepText = ["Paso 1:", "Paso 2:", "Paso 3:", "Paso 4:", "Paso 5:", "¿Te queda espacio?", "¿Te queda espacio?", "¿De tomar?"];
var instText = ["Escoge tu base", "Escoge los vegetales que quieras", "Escoge la proteina", "Añade tus toppings", "Añade tu salsa", "Añade una entrada", "¿Qué tal un Bao?", "Añade tu bebida"];
var optsText = ["-Noodles de huevo <br>-Noodles verdes<br>-Noodles negros<br>-Noodles de arroz<br>-Noodles ntegrales<br>-Arroz blanco al vapor<br>-Arroz de brocoli", "-Chicharo chino<br>-Champiñon<br>-Piña<br>-Edemames<br>-Brocoli<br>-Germen de soya<br>-Elote<br>-Pimiento<br>-Calabaza<br>-Zanahoria<br>-Cebolla<br>-Col Mix", "-Camarón<br>-Res<br>-Pollo<br>-Tofu<br>-Cerdo<br>-Surimi", "-Tocino<br>-Aguacate<br>-Huevo estrellado<br>-Cacahuate<br>-Ajo frito<br>-Cilantro", "-Ojo de tigre<br>-Miso Cilantro<br>-Curry Cacahuate<br>-Soya Cítrica<br>-Mango Chipotle<br>Sweet Chily<br>-Teriyaki<br>-Tamarindo", "-Kushiage de queso<br>-Edamames<br>-Spring roll", "-Pork belly<br>-Camarón tempura<br>-Pollo crispy<br>-Spicy beef<br>-Buffalo wild<br>-El pollo szechuan<br>-Sweet bao<br>-PB&J bao<br>-Bao del mes", "-Agua natural<br>-Agua del día<br>-Refresco<br>-Té de la casa<br>-Calpi"];
    
function upOne(){
    //Variables for the DOM are defined.
    var first = document.getElementById("step");
    var second = document.getElementById("inst");
    var third = document.getElementById("opts");

    control++;
    if(control == 8){
        control = 0;
    }
    first.innerHTML = stepText[control];
    second.innerHTML = instText[control];
    third.innerHTML = optsText[control];
}

function downOne(){
    //Variables for the DOM are defined.
    var first = document.getElementById("step");
    var second = document.getElementById("inst");
    var third = document.getElementById("opts");

    control--;
    if(control == -1){
        control = 7;
    }
    first.innerHTML = stepText[control];
    second.innerHTML = instText[control];
    third.innerHTML = optsText[control];
}


