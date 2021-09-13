let fname = document.getElementById('fname')
let fname_value = document.getElementById('fname').value

let lname = document.getElementById('lname')
let lname_value = document.getElementById('lname').value


let email = document.getElementById('email')
let email_value = document.getElementById('email').value

let password = document.getElementById('password')
let password_value = document.getElementById('password').value

let error_icon = document.getElementsByClassName('error')
let error_msg = document.getElementsByClassName('red')

function failure_email(){
    email.style.borderColor ='red'
    email.style.borderWidth ='1px'
    error_icon[2].style.display ='block'
    error_msg[2].style.display ='block'
}

function validateForm(){
 if(fname_value ===''){
    fname.style.borderColor ='red'
    fname.style.borderWidth ='1px'
    error_icon[0].style.display ='block'
    error_msg[0].style.display ='block'
 }
 
 if(lname_value ===''){
    lname.style.borderColor ='red'
    lname.style.borderWidth ='1px'
    error_icon[1].style.display ='block'
    error_msg[1].style.display ='block'
 }

 if(email_value ===''){
    failure_email();
 } else if( email_value.includes('@') === false){
    failure_email();
 } else if(x.includes('@') === true && x.length<4){
    failure_email();
 }

 if(password_value ===''){
    password.style.borderColor ='red'
    password.style.borderWidth ='1px'
    error_icon[3].style.display ='block'
    error_msg[3].style.display ='block'
 }


}