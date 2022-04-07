//selectionner le champt text du nom

const lastName=document.querySelector("#lastname");

//Applique un ecouteur d'evenement sur les changements
//effectués dans le champs

lastName.addEventListener(`input`,()=>{

    console.log(lastName.value);
    
});

lastName.addEventListener('input',()  =>{

    const response = notEmpty(lastName.value);
    console.log(response);
    const error= document.querySelector("#lastnameError");
    if(response){

        lastName.style.border ="2px solid green"
        error.style.display="none";
    }
    else {
        //affiche un message d'erreur si tout ne va pas bien !
        
        error.innerText = "Le nom est obligatoire";
        error.style.display ="block";
        lastName.style.border ="2px solid red";
    }
});

//const pseudo =document.querySelector("#pseudo");


//pseudo.addEventListener(`input`,()=>{

  ///  console.log(pseudo.value);
    
//});

//prenom//

const firstname=document.querySelector("#firstname");

firstname.addEventListener(`input`,()=>{

    console.log(firstname.value);
    
});

firstname.addEventListener('input',()  =>{

    const response = notEmpty(firstname.value);
    console.log(response);
    const error= document.querySelector("#firstnameError");
    if(response){

        firstname.style.border ="2px solid green"
        error.style.display="none";
    }
    else {
        //affiche un message d'erreur si tout ne va pas bien !
        
        error.innerText = "Le prenom est obligatoire";
        error.style.display ="block";
        lastName.style.border ="2px solid red";
    }
});

//pseudo

const pseudo=document.querySelector("#pseudo");

pseudo.addEventListener(`input`,()=>{

    console.log(pseudo.value);
    
});

pseudo.addEventListener('input',()  =>{

    const response = notEmpty2(pseudo.value);
    const response3 = notEmpty(pseudo.value);
    console.log(response,response3);
    const error= document.querySelector("#pseudoError");
    if(response){

        pseudo.style.border ="2px solid green"
        error.style.display="none";
    }
    else {
        //affiche un message d'erreur si tout ne va pas bien !
        
        error.innerText = "pseudo mini 5 caracteres";
        error.style.display ="block";
        lastName.style.border ="2px solid red";
    }
});
//console.log(pseudo.length);

//email

email.addEventListener('input',()  =>{

    const response = notEmpty(email.value);
    const response2 = validateEmail(email.value);
    
    console.log(response,response2,);
    const error= document.querySelector("#pseudoemail");
    if(response,response2){

        pseudo.style.border ="2px solid green"
        error.style.display="none";
    }
    else {
        //affiche un message d'erreur si tout ne va pas bien !
        
        error.innerText = "adresse non valide";
        error.style.display ="block";
        lastName.style.border ="2px solid red";
    }
});

//mot de passe

//gestion de l'erreur
//isError("votre nome est obligatoire", response,"lastname");



//selection element csss bi eye bouton caché

const eyes = document.querySelectorAll(".view-password");

eyes.forEach(eye =>{
    eye.addEventListener("click",() =>{
    
  
       let input = eye.previousElementSibling;
       let  type = showHidePassword(input);
    input.type=type;
        

  

    });
   
});


const link = document.querySelector(`genratePwd`);
link.addEventListener("clic",()=>{

    const passGenerate = generatePassword(12);
    const result = document.querySelector("#resultPassword");
    result.innerText=passGenerate;

})