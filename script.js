



function validateForm(){
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

    let value1 = false
    let value2 = false
    let value3 = false
    let value4 = false

    function failure_email(){
        email.style.borderColor ='red'
        email.style.borderWidth ='1px'
        error_icon[2].style.display ='block'
        error_msg[2].style.display ='block'
    }


 if(fname_value.length ===0){
    fname.style.borderColor ='red'
    fname.style.borderWidth ='1px'
    error_icon[0].style.display ='block'
    error_msg[0].style.display ='block'
 }else if(fname_value.length>3){
   fname.style.borderWidth='1px'
   fname.style.borderColor ='#BAB7D4'
   error_icon[0].style.display ='none'
   error_msg[0].style.display ='none'
    value1 = true
 }

 
 if(lname_value.length ===0){
    lname.style.borderColor ='red'
    lname.style.borderWidth ='1px'
    error_icon[1].style.display ='block'
    error_msg[1].style.display ='block'
 }else if(lname_value.length>3){
   lname.style.borderWidth='1px'
   lname.style.borderColor ='#BAB7D4'
   error_icon[1].style.display ='none'
   error_msg[1].style.display ='none'
   value2 = true
 }

 if(email_value.length ===0){
    failure_email();
 } else if( email_value.includes('@') === false){
    failure_email();
 } else if(email_value.includes('@') === true && email_value.length<4){
    failure_email();
 }else if (email_value.includes('@') === true && email_value.length>4){
   email.style.borderWidth='1px'
   email.style.borderColor ='#BAB7D4'
   error_icon[2].style.display ='none'
   error_msg[2].style.display ='none'
   value3 = true
   
}

 if(password_value.length ===0){
    password.style.borderColor ='red'
    password.style.borderWidth ='1px'
    error_icon[3].style.display ='block'
    error_msg[3].style.display ='block'
 }else if(password_value.length>3){
   password.style.borderWidth='1px'
   password.style.borderColor ='#BAB7D4'
   error_icon[3].style.display ='none'
   error_msg[3].style.display ='none'
   value4 = true

 }

 else if(value1===true && value2===true && value3===true && value4===true) {
    document.getElementById("myForm").submit();
 }
 
}

