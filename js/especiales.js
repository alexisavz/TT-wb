console.log("wuddup");

var control = 0;
var titleText = ["Bao del mes","Tardes de ramen","Combo sushi"];
var imageDirect = ["/resources/images/bao-del-mes-3.jpg","/resources/images/tarde-de-ramen-4.jpg","/resources/images/rollo-3.jpg"];
var cardText = ["¿Cansado de los Baos habituales? Sabemos que no. Aun así, te invitamos que le des una probada al Bao del mes. ¿Cuál es el de este mes? Puedes descubrirlo en nuestras redes sociales. O aun mejor, ven a descubrirlo.", "Mantente atento a nuestras redes sociales para enterarte de cuando son las tardes de ramen. Donde por un día tendrás la oportunidad de probar estos deliciosos platillos de la comida japonesa al puro estilo del tigre.", "¿Buscas algo nuevo para acompañar tu wok? Te recomendamos preguntar por nuestro combo sushi. Tendrás la oportunidad de acompañar tu comida con un delicioso rollo. síguenos en nuestras redes sociales para enterarte de los rollos que tenemos."];

function oneUp() {
  var changeTitle = document.getElementById("card-title-text");
  var changeText = document.getElementById("text");
  control++;

  if(control == 3){
      control = 0;
  }
  changeTitle.innerHTML = titleText[control];
  document.getElementById("image").src = imageDirect[control];
  changeText.innerHTML = cardText[control];
}

function oneDown() {
    var changeTitle = document.getElementById("card-title-text");
    var changeText = document.getElementById("text");
    control--;

    if(control == -1){
        control = 2;
    }
    changeTitle.innerHTML = titleText[control];
    document.getElementById("image").src = imageDirect[control];
    changeText.innerHTML = cardText[control];
  }
