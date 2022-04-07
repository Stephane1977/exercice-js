//**
//*fucntion JS

const notEmpty =(value)=>{
if(typeof value!=="string"||value.length===0){

    return false
}
 return true;
}


const notEmpty2 =(value)=>{
    if(typeof value!=="string"||value.length<5){
    
        return false
    }
     return true;
    

    }

//
//const isLength = (value,min)=>{
   // return value.length>=min;
//
   
//email
       function validateEmail(value) {
            const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return res.test(String(value).toLowerCase());
          }


//message d'erreur

//@param {string} message
//@param {boolean} error
//@param {sting} id

const isError =(message,error,id) =>{
//recupere le champ input
const input = document.querySelector(`#${id}Error`);

//recupere la balise contenant le message d'erreur

const messagError = document.querySelector(`#${id}Error`);

//Affiche une erreur
input.style.border ="2px solid red"
messagError.innerText = message;
messageError.style.display = "block"

//affiche succés
if (succes){
    input.style.border = "2px solid green"
    messageError.style.display="none";
}

}


//**
/* affiche/cache le mot de passe
*/

let showHidePassword =(element) => {

    //if ternaire
    return (element.type ==="password") ? "text" : "password";
}

    // if (element.type === "password") {
     //   element.type="text";

  //  }
  //  else {
  //      element.type ="password";
    



  const generatePassword =(min=18)=>{
      const letters ="abcdefghijklmopqrstuvwxyzABCDEFGHIFKLMNOPQRSTUVWYZ0123456789@#+-!*/§$£";
      let password=``;

      for (let i=0;i<min;i++){
        password+=letters.charAt(Math.floor(Math.random() * letters.length)); 

      }
      return password;



  }