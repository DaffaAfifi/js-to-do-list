const toDoItems = document.querySelector('.to-do-items');
const input = document.getElementById('input');
const trash = document.getElementById('trash');

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addItem();
    }
});

function addItem() {
    var divParent = document.createElement('div');
    var divChild = document.createElement('div');
    var checkIcon = document.createElement('i');
    var trashIcon = document.createElement('i');

    divParent.className = 'item';
    divParent.innerHTML = '<div>' + input.value + '</div>';

    checkIcon.className = 'fas fa-check-square';
    checkIcon.style.color = 'lightgray';
    checkIcon.addEventListener('click', function() {
        checkIcon.style.color = 'limegreen';
    });

    divChild.appendChild(checkIcon);

    trashIcon.className = 'fas fa-trash';
    trashIcon.style.color = 'darkgray';
    trashIcon.addEventListener('click', function() {
        divParent.remove();
    })

    divChild.appendChild(trashIcon);
    divParent.appendChild(divChild);
    toDoItems.appendChild(divParent);
    input.value = '';
}