// email validator

function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// configure email validator
function configureEmailValidator(){
  let email = document.getElementById("email");

  email.addEventListener('focusout', function(){
    let emailInput = document.getElementById("email").value;
    let invalidEmail = document.getElementById("invalid-email");

    if(validateEmail(emailInput)){
      email.classList.remove("is-invalid")
      invalidEmail.style.display="none";

    } else{
      email.classList.add("is-invalid");
      invalidEmail.style.display="block";
    }
  });
}

// message validator

function validateMessage(message) {
  return message.length > 0
}

// configure message validator

function configureMessageValidator(){

  let message = document.getElementById("message")
  document.getElementById("message").addEventListener('focusout', function(){
    let invalidMessage = document.getElementById("invalid-msg");
    let messageInput = document.getElementById("message").value;
  
    if (validateMessage(messageInput)) {     
      message.classList.remove("is-invalid")
      invalidMessage.style.display = "none"; 
    } else {
      message.classList.add("is-invalid");
      invalidMessage.style.display = "block";
    }
  })  
}

// configure checkbox validator

function configureCheckboxValidator(){

  document.getElementById("checkbox-terms").addEventListener('click', function(){
    let invalidCheckbox = document.getElementById("invalid-checkbox");
    if (invalidCheckbox.style.display === "none") {
      invalidCheckbox.style.display = "block";
    } else {
      invalidCheckbox.style.display = "none";
    }
  });
}

// fade function

function fadeOutEffect(target) {
  var fadeTarget = document.getElementById(target);
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;

          setTimeout(function(){
            document.getElementById(target).style.display = "none";
          }, 200)

      } else {
          clearInterval(fadeEffect);
      }
  }, 10);
}

// configure submit button validator 

function configureSubmissionValidator(){
  
  const submitBotton = document.getElementById("submit");

  submitBotton.addEventListener('click', function(){
    event.preventDefault();
  
    document.getElementById("form").classList.add("was-validated")

    let emailInput = document.getElementById("email").value;
    let messageInput = document.getElementById("message").value;
    let invalidCheckbox = document.getElementById("invalid-checkbox");

    if (validateEmail(emailInput) && validateMessage(messageInput) && invalidCheckbox.style.display === "none"){
      const thanks= document.getElementById("submit-confirmation");

      fadeOutEffect("form-content");
      fadeOutEffect("image-item");
      thanks.style.display = "block";
      thanks.style.opacity = "1";      
    }
  });
}

configureEmailValidator();
configureMessageValidator();
configureCheckboxValidator();
configureSubmissionValidator();


