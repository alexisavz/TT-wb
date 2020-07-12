console.log('Wuddup');

var control = 0;
var stepText = ["Paso 1:", "Paso 2:", "Paso 3:", "Paso 4:", "Paso 5:", "¿Te queda espacio?"];
var instText = ["Escoge tu base", "Escoge los vegetales que quieras", "Escoge la proteina", "Añade tus toppings", "Añade tu salsa", "Añade una entrada o bao"];
var optsText = ["-Noodles de huevo<br>-Noodles verdes<br>-Noodles negros<br>-Noodles de arroz<br>-Noodles Veggie<br>-Arroz blanco al vapor<br>-Arroz de brocoli", "-Chicharo chino<br>-Champiñon<br>-Piña<br>-Edemames<br>-Brocoli<br>-Germen de soya<br>-Elote<br>-Pimiento<br>-Calabaza<br>-Zanahoria<br>-Cebolla<br>-Col Mix", "-Camarón<br>-Res<br>-Pollo<br>-Tofu<br>-Cerdo<br>-Surimi", "-Tocino<br>-Aguacate<br>-Huevo estrellado<br>-Cacahuate<br>-Ajo frito<br>-Cilantro", "-Ojo de tigre<br>-Miso Cilantro<br>-Curry Cacahuate<br>-Soya Cítrica<br>-Mango Chipotle<br>Sweet Chily<br>-Teriyaki<br>-Tamarindo", "-Bao buffalo wild<br>-Bao pollo crispy<br>-Bao pork belly<br>-Bao de camarón tempura<br>-Bao spicy beef<br>-Bao del mes<br>-Kushiage de queso<br>-Spring roll"];
    

var second = document.getElementById("inst");
var third = document.getElementById("opts");

function upOne(){
    //Variables for the DOM are defined.
    var first = document.getElementById("step");
    var second = document.getElementById("inst");
    var third = document.getElementById("opts");

    control++;
    if(control == 6){
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
        control = 5;
    }
    first.innerHTML = stepText[control];
    second.innerHTML = instText[control];
    third.innerHTML = optsText[control];
}


