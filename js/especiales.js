console.log("wuddup");

var control = 0;
var image1 = 0;
var image2 = 0;
var image3 = 0;
var titleText = ["Bao del mes","Tardes de ramen","Combo sushi"];
var imageDirect = [["/resources/images/bao-del-mes-1.jpg", "/resources/images/bao-del-mes-2.jpg", "/resources/images/bao-del-mes-3.jpg"],["/resources/images/tarde-de-ramen-1.jpg", "/resources/images/tarde-de-ramen-2.jpg", "/resources/images/tarde-de-ramen-3.jpg"],["/resources/images/rollo-1.jpg", "/resources/images/rollo-2.jpg", "/resources/images/rollo-3.jpg"]]
var cardText = ["¿Cansado de los Baos habituales? Sabemos que no. Aun así, te invitamos que le des una probada al Bao del mes. ¿Cuál es el de este mes? Puedes descubrirlo en nuestras redes sociales. O aun mejor, ven a descubrirlo.", "Mantente atento a nuestras redes sociales para enterarte de cuando son las tardes de ramen. Donde por un día tendrás la oportunidad de probar estos deliciosos platillos de la comida japonesa.", "¿Buscas algo nuevo para acompañar tu wok? Te recomendamos preguntar por nuestro combo sushi. Tendrás la oportunidad de acompañar tu comida con un delicioso rollo. síguenos en nuestras redes sociales para enterarte de los rollos que tenemos."];

function oneUp() {
  var changeTitle = document.getElementById("card-title-text");
  var changeText = document.getElementById("text");
  control++;

  if(control == 3){
      control = 0;
  }

  if(control == 0){
      image1++;
      if(image1 == 3){
          image1 = 0;
      }
      changeTitle.innerHTML = titleText[control];
      document.getElementById("image").src = imageDirect[control][image1];
      changeText.innerHTML = cardText[control];
  }

  if(control == 1){
      image2++;
      if(image2 == 3){
          image2 = 0;
      }
      changeTitle.innerHTML = titleText[control];
      document.getElementById("image").src = imageDirect[control][image2];
      changeText.innerHTML = cardText[control];
  }

  if(control == 2){
      image3++;
      if(image3 == 3){
          image3 = 0;
      }
      changeTitle.innerHTML = titleText[control];
      document.getElementById("image").src = imageDirect[control][image3];
      changeText.innerHTML = cardText[control];
  } 
}

function oneDown() {
    var changeTitle = document.getElementById("card-title-text");
    var changeText = document.getElementById("text");
    control--;
    imageControl = imageControl + 2;

    if(control == -1){
        control = 2;
    }

    if(control == 0){
        image1++;
        if(image1 == 3){
            image1 = 0;
        }
        changeTitle.innerHTML = titleText[control];
        document.getElementById("image").src = imageDirect[control][image1];
        changeText.innerHTML = cardText[control];
    }
  
    if(control == 1){
        image2++;
        if(image2 == 3){
            image2 = 0;
        }
        changeTitle.innerHTML = titleText[control];
        document.getElementById("image").src = imageDirect[control][image2];
        changeText.innerHTML = cardText[control];
    }
  
    if(control == 2){
        image3++;
        if(image3 == 3){
            image3 = 0;
        }
        changeTitle.innerHTML = titleText[control];
        document.getElementById("image").src = imageDirect[control][image3];
        changeText.innerHTML = cardText[control];
    } 

  }
