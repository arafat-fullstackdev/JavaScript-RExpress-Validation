// Define Function
function validExpress(){
    const selectOption = document.getElementById("express-type").value;
    const userInput = document.getElementById("user-input").value;

    let regxPattern;

    // Define Switch option
    
    switch (selectOption) {
        case "name":
            regxPattern = /^[A-Za-z]+$/;
            break;

       case "email":
                regxPattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                break;   

        case "phone":
            regxPattern = /^\d{10}$/;
            break;

        case "postcode":
            regxPattern = /^\d{4}$/;
            break;
            default:
            break;            
    } 

    const isValid = regxPattern.test(userInput);

    const resultMessage = isValid ? "Valid" : "InValid";
    document.getElementById("result").textContent = resultMessage;
    
}
