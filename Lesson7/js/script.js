var list = [
    ["Bohdan1", "pass", "boda@gmail.com"],
    ["Bohdan2", "pass1", "boda@gmail.com"],
    ["Bohdan3", "pass2", "boda@gmail.com"]
];
render();

function add() {
    var login = document.getElementById("login");
    var password = document.getElementById("password");
    var email = document.getElementById("email");


    list.push([login.value, password.value, email.value])

    render();
}

function render() {
    var table = document.getElementById("table");
    console.log(list);
    var str = "";
    for (var i = 0; i < list.length; i++) {
        str += `
            <tr>
                <td>${i+1}</td>
                <td>${list[i][0]}</td>
                <td>${list[i][1]}</td>
                <td>${list[i][2]}</td>
                <td><input type="button" value="Редагувати"></td>
                <td><input type="button" value="Видалити"></td>
            </tr>
        `
    }

    table.innerHTML = str;
}