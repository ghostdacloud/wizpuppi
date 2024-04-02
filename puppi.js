// var btn = document.getElementById("tooglebtn");
// var inp = document.getElementById("password-input");

// btn.addEventListener("click",()=>{
//     if(inp.type==="password"){
//         inp.type="text";
//         btn.textContent="hide";
//     }else{
//         inp.type="password";
//         btn.textContent="show";
//     }
// });

// var login = document.querySelector(".login");
// var pop = document.querySelector(".pop")
// var emailinput = document.querySelector(".email");
// var passwordinput = document.querySelector(".password");

// login.addEventListener("click",()=>{
//     var emailValue = emailinput.value;
//     var passwordValue = passwordinput.value;

//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     var passwordRegex = /^(?=.[A-Za-z])(?=.\d)(?=[@$!%?&])[A-Za-z\d@$!%*?&]{2,}$/;

//     if(emailRegex.text(emailValue)&& passwordRegex.test(passwordValue)) {
//         pop.classList.toggle("active");
//         console.log("login sucessful");
//     }else {
//         if(!emailRegex.text(emailValue)){
//             alert("Please enter a valid email\nEmail must contain an @.");
//         }
//         if (!passwordRegex.text(passwordValue)){
//             alert("please enter a valid password.\nPassword must contain at least 2 symbols and a combination of digit and letters.");
//         }
//     }
// });



var btn = document.getElementById("toggleBtn");
var inp = document.getElementById("passwordInput");

btn.addEventListener("click", () => {
  if (inp.type === "password") {
    inp.type = "text";
    btn.textContent = "Hide";
  } else {
    inp.type = "password";
    btn.textContent = "Show";
  }
});

var logi = document.querySelector(".logi");
var pop = document.querySelector(".pop");
var emailInput = document.querySelector(".email");
var passwordInput = document.querySelector(".password");

logi.addEventListener("click", () => {
  var emailValue = emailInput.value;
  var passwordValue = passwordInput.value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,}$/;

  if (emailRegex.test(emailValue) && passwordRegex.test(passwordValue)) {
    pop.classList.toggle("active");
    console.log("Login successful!");
  } else {
    if (!emailRegex.test(emailValue)) {
      alert("Please enter a valid email.\nEmail must contain an @.");
    }
    if (!passwordRegex.test(passwordValue)) {
      alert("Please enter a valid password.\nPassword must contain at least 2 symbols and a combination of digits and letters.");
    }
  }
});