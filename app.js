function formCheck() {
    console.log("formCheck")
    if (checkPassword() && checkUser() && checkEmail()) {
        registeredSuccess()
    } else {
        registeredFail()
    }
}

function registeredSuccess() {
    alert(`utente registrato! user: ${document.getElementById('username').value}`)
}

function registeredFail() {
    alert(`controlla i campi inseriti e riprova`)
}

function checkEmail() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (document.getElementById('email').value.match(mailformat)) {
        // console.log("MAIL: checkk")
        return true;
    } 
    else {
        // console.log("MAIL: nope")
        return false;
    }
}

function checkPassword() {
    if (document.getElementById('password').value == document.getElementById('passwordCheck').value) {
        if (document.getElementById('password').value.length >= 8) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

function checkUser() {
    if (document.getElementById('username').value == ' ') {
        return false
    }
    else {
        return true
    }
}

function infoPassword() {
    alert("La password deve essere lunga almeno 8 caratteri!")
}