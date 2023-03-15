var list = [
    ["Bohdan1", "pass", "boda@gmail.com"],
    ["Bohdan2", "pass1", "boda@gmail.com"],
    ["Bohdan3", "pass2", "boda@gmail.com"]
];
render();

var login = document.getElementById("login");
var password = document.getElementById("password");
var email = document.getElementById("email");
// var btnSend = document.getElementById("email");
var tumb = false;
function add() {

    list.push([login.value, password.value, email.value])
    btnSend.value = "Добавити";
    login.value = "";
    password.value = "";
    email.value = "";

    render();
    tumb = false;
}

function deleteItem(index){
    
    alert("елемент ("+list[index] + ") видалено!");
    list.pop(index);
    render();
}

function change(index){
    if(tumb){
        alert("ви не завершили редагування!")
    }
    else{
        tumb = true;
        login.value = list[index][0];
        password.value = list[index][1];
        email.value = list[index][2];
        btnSend.value = "редагувати";
        list.pop(index);
        render();
    }
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
                <td><input type="button" onclick="change(${i})" value="Редагувати"></td>
                <td><input type="button" onclick="deleteItem(${i})" value="Видалити"></td>
            </tr>
        `
    }

    table.innerHTML = str;
}