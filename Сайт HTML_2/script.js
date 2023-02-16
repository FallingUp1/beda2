
let users = [
    {
        "pl" : "admin",
        "lg" : "Admin1",
        "pw" : "1234",
        "name" : "Sugoma"
    },
    {
        "pl" : "user",
        "lg" : "User1",
        "pw" : "1234",
        "name" : "Stepan"
    }
    
];
const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const body = document.body;


let LoginPoleLogin = document.querySelector("#PoleDlyaLogina");
let LoginPolePassword = document.querySelector("#PoleDlyaPassword");
let LoginKnopkaEnter = document.querySelector("#EnterButton");
let LoginMessage = document.querySelector(".form__messageSignin");

let RegisterPoleName = document.querySelector("#RegistrPoleName");
let RegisterPoleLogin = document.querySelector("#RegisterPoleLogin");
let RegisterPolePassword = document.querySelector("#RegisterPolePassword");
let RegisterPoleRepeatPassword = document.querySelector("#RegisterPoleRepeatPassword");
let RegisterButton = document.querySelector("#RegistrButton");
let RegisterMessage = document.querySelector(".form__messageSignup");

let Nazad = document.querySelector("#KnopkaNazad");

Nazad.addEventListener('click',function(){
    document.location.href = "main.html";
})

LoginKnopkaEnter.addEventListener('click',login); 
RegisterButton.addEventListener('click',registration);

function login(){
    let Login = LoginPoleLogin.value;
    let Password = LoginPolePassword.value;

    for(const user of users){
if (Login != " " && Password !=" "){
        if(user.lg == Login && user.pw == Password){
            role(user.pl)
            LoginMessage.innerHTML = ""
            break;
        }
        else if(user.lg != Login / user.pw != Password){
            LoginMessage.innerHTML = "Неизвестный пользователь!";
        }
    }
    else if (Login == " " || Password ==" "){
        LoginMessage.innerHTML = "Пустые поля!";
    }
    }
}


function role(role){
    if(role == "user")
    {
        document.location.href = "user.html";
    }
    else if (role == "admin")
    {
        document.location.href = "admin.html";
    }
}


function registration(){
    let name = RegisterPoleName.value;
    let Login = RegisterPoleLogin.value;
    let Password = RegisterPolePassword.value;
    let RepeatPassword = RegisterPoleRepeatPassword.value;
    let Registermessage = RegisterMessage.value;

    for(const user of users){
        if(name != "" && Login != "" && Password != "" && RepeatPassword != "" && Password == RepeatPassword) 
        {
            users.push({
                "pl":'user',
                "lg" : Login,
                "pw" : Password,
                "name" : name})        
            RegisterMessage.innerHTML = "Добро пожаловать!";
            break;
        }
        else if(name == "" && Login == "" && Password == "" && RepeatPassword == "")
        {
            RegisterMessage.innerHTML = "Пустые поля!";
            
        }
        else if (Password != RepeatPassword)
        {
            RegisterMessage.innerHTML = "Указанные пароли не совпадают!";
            
        }
        };
    };


signUpBtn.addEventListener('click',function () {
    formBox.classList.add('active');
    body.classList.add('active');
});

signInBtn.addEventListener('click',function() {
    formBox.classList.remove('active');
    body.classList.remove('active');
});