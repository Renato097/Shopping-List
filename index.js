const itemList = document.getElementById('itemList');
const itemInput = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
let list = [];

const list_str = new String(localStorage.getItem("list"));

function writeList() {
    itemList.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
        itemList.innerHTML += `<li ondblclick = "removeItem(${i})">${list[i]}</li>`
    };
}

function updateStr() {
    let str = list.toString();
    localStorage.setItem("list", str);
}

// String load and startup
if (list_str != '' && list_str != 'null') {
    list = list_str.split(',');

    writeList();

    clearBtn.style.display = 'block';
}

// Add
addBtn.addEventListener('click', function () {
    if (itemInput.value != '') {

        list.push(itemInput.value);

        writeList();

        updateStr();

        itemInput.value = '';

        clearBtn.style.display = 'block';
    }
})
itemInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addBtn.click();
    }
});

// Clear all
clearBtn.addEventListener('click', function () {
    const confClear = confirm("Sicuro di voler cancellare tutto?");
    if (confClear) {

        list = [];

        itemList.innerHTML = '';

        updateStr();

        clearBtn.style.display = 'none';
    }
})

// Remove item (double click from html)
function removeItem(j) {
    list.splice(j, 1);

    writeList();

    updateStr();

    if (list.length == 0) {
        clearBtn.style.display = 'none';
    }
}

// Info Modal
var modal = document.getElementById("info-modal");
var modalBtn = document.getElementById("info");
var modalClose = document.getElementById("closeBtn");

modalBtn.onclick = function () {
    modal.style.display = "block";
}
modalClose.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}