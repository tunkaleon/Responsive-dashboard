const form = document.querySelector("form"),
      emailField = form.querySelector(".email-field"),
      emailIput = emailField.querySelector(".email");

      

// Email validation
function checkEmail(){
    const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailIput.value.match(emailpattern)){
        return emailField.classList.add("invalid"); //adding invalid class if email value do not matched with email partern
    }
    emailField.classList.remove("invalid"); //remove invlaid class if email match
}

var passField = document.querySelector(".password");
var eyebtn = document.querySelector(".fa-solid");

eyebtn.onclick = function(){
    if(passField.type === "password"){
        passField.type = "text";
        eyebtn.classList.remove("hide-btn");
        
    }
    else{
        passField.type = "password";
        eyebtn.classList.add("hide-btn");
    }
}