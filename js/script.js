
// Je sélectionne mon input grâce à la propriété querySelector 
const validationInput = document.querySelector('input');  

// je crée une condition indiquant que si la longueur des valeurs
// présente dans mon input est inférieure à 3 elle reverra sur rouge en bordure
// sinon elle renverra du vert, utilise pour des formulaires
validationInput.addEventListener('input', (e) => {
   
    console.log(e.target.value)
    
    if(e.target.value.length >= 3) {
        console.log("green")
        validationInput.style.borderColor = "green";
    } else {
        validationInput.style.borderColor = "red";
    }
})