const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

//Function ShowError show input error message
function showError (input,message){
    const formControl=input.parentElement;
    formControl.className="form-control error";
    const small=formControl.querySelector('small');
    small.innerText=message;
}
//Function ShowSuccess input success message
function showSuccess (input){
    const formControl=input.parentElement;
    formControl.className="form-control success";
}

// Validate email
// function validateEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

//event Listener
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     // username control
//     if (username.value===""){
//         showError( username,"username is required")
//     }
//     else
//     {
//         showSuccess(username);
//     }
//     // email control
//     if (email.value===""){
//         showError( email,"email is required")
//     }
//     else if (!validateEmail(email.value)){
//         showError( email,"email is  not valid")
//     }
//     else
//     {
//         showSuccess(email);
//     }
//     // Password control
//     if (password.value===""){
//         showError( password,"username is password")
//     }
//     else
//     {
//         showSuccess(password);
//     }
//     // Password 2 control
//     if (password2.value===""){
//         showError( password2,"Password 2 is password")
//     }
//     else
//     {
//         showSuccess(password2);
//     }
// })




// Check required fields
function checkRequired (inputArr){
inputArr.forEach(function(input){
    if(input.value.trim()===''){
        // showError(input,`${input.id} is required`)
        showError(input,`${getFieldName(input)} is required`)
    }
    else {
        showSuccess(input)
    }
})
}
// function email
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        showSuccess (input);
    }
    else {
        showError(input,'Email is not Valid')
    }
}


//Get getFieldName function
function getFieldName(input){
    return input.id.toUpperCase()
}
//check Password function
function checkPassword (input1,input2){
if(input1.value !==input2.value){
    showError(input2,"Password is not match")
}
}
//check input Length
function checkLength (input,min,max){
if (input.value.length<min){
    showError(input,`${getFieldName(input)} must be at least ${min} caracters `);
}
else if (input.value.length>max){
    showError(input,`${getFieldName(input)} must be at less ${max} caracters `);
}
else 
showSuccess(input)
}


form.addEventListener('submit',function(e){
     e.preventDefault();
     checkRequired([username,email,password,password2]);
     checkLength(username,3,15);
     checkLength(password,8,25);
     checkEmail(email);
     checkPassword(password,password2)
});