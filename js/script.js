const validationInput = document.querySelector('input');  

validationInput.addEventListener('input', (e) => {
   
    console.log(e.target.value)
    
    if(e.target.value.lenght >= 3) {
        console.log("green")
        validationInput.style.borderColor = "green";
    }
})