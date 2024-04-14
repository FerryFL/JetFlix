function validateform(event){
    event.preventDefault();
    regis = document.getElementById("regis");
    username = document.getElementById("username");
    password = document.getElementById("password");
    confirms = document.getElementById("confirms");
    date = document.getElementById("date"); 
    male = document.getElementById("male");
    female = document.getElementById("female");
    terms = document.getElementById("terms");
    error = document.getElementById("error");


    if(username.value.length<5){
        error.innerHTML = "Your username should be at least 5 characters!";
        alert("Your username should be at least 5 characters!");
    }else if(!password.value){
        error.innerHTML = "Input Your Password!";
        alert("Input Your Password!");
    }else if(password.value != confirms.value){
        error.innerHTML = "Password Doesn't Match!";
        alert("Password Doesn't Match!");
    }else if(!date.value){
        error.innerHTML = "Input Your Date of Birth!";
        alert("Input Your Date of Birth!");
    }
    else if(!(male.checked||female.checked)){
        error.innerHTML = "Gender Must Be Checked!";
        alert("Gender Must Be Checked!");
    }else if(!terms.checked){
        error.innerHTML = "Agree The Terms & Conditions!";
        alert("Agree The Terms & Conditions!");
    }else{
        error.innerHTML = "Success!"
        alert("Success!");
        regis.submit();
    }
}


function loginDummy(event){
    event.preventDefault();
    dummyname = document.getElementById("dummyname");
    dummypass = document.getElementById("dummypass");
    login = document.getElementById("login");
    error = document.getElementById("error");

    if(dummyname.value!="dummy" || dummypass.value!="12345"){
        error.innerHTML = "Incorrect Name/Password!";
        alert("Incorrect Name/Password!");
    }else{
        error.innerHTML = "Success!"
        alert("Success!");
        login.submit();
    }
}