var list = [];

function read() {
    var login = document.getElementById("login");
    var password = document.getElementById("password");
    var text = document.getElementById("text");

    text.innerHTML += login.value;

    list.push(login, password)

    console.log(list);
}