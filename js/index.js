let item = document.querySelector('#items');
let btn = document.querySelector('#addBtn');


btn.addEventListener('click', function (event) {
    event.preventDefault();
    let text = item.value;
    if (text.trim() === '' || text.trim() === null) {
        $('.error').show();
    } else {
        $('.error').hide();
        addTask(text);
    }

});


document.getElementById('output').addEventListener("click", function (e) {
    let item = e.target;
    if (item.classList.contains("completeBtn")) {
        item.parentElement.classList.toggle('completed');
    } else if (item.classList.contains("trashBtn")) {
        item.parentElement.remove();
    }
});

function addTask(text) {
    //create div
    let div = document.createElement('div');
    div.classList.add('myTask');
    //add list
    let li = document.createElement('li');
    li.classList.add('textTask');
    li.innerText = text;
    div.appendChild(li);
    console.log(div);
    // add complete button
    let completeBtn = document.createElement("button");
    completeBtn.classList.add("completeBtn");
    completeBtn.innerHTML = "<i class='fas fa-check-square'></i>";
    div.appendChild(completeBtn);
    //add trash btn
    let trashBtn = document.createElement("button");
    trashBtn.classList.add("trashBtn");
    trashBtn.innerHTML = "<i class='fas fa-trash'></i>";
    div.appendChild(trashBtn);
    //clear and focus textField
    item.value = "";
    item.focus();
    document.getElementById('output').appendChild(div);
}


