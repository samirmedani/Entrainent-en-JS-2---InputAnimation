const validationInput = document.querySelector('input');  

validationInput.addEventListener('input', (e) => {
   
    console.log(e.target.value)
    
    if(e.target.value.length >= 3) {
        console.log("green")
        validationInput.style.borderColor = "green";
    } else {
        validationInput.style.borderColor = "red";
    }
})