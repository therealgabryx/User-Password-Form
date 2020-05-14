function formCheck() {
    console.log("formCheck")
    if (checkPassword() && checkUser()) {
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