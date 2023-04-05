const _alert = document.querySelector('.alert');
const input = document.querySelector('.input');
const add = document.querySelector('.addBtn');
const clear = document.querySelector('.clearBtn');
const items = document.querySelector('.items');

add.addEventListener('click', () => {
    if (input.value.length > 0) {
        const newItemElement = document.createElement('div');
        const newItemValueElement = document.createElement('h5');
        const btnContainer = document.createElement('div');
        const editbtn = document.createElement('button');
        const deletebtn = document.createElement('button');
        const completebtn = document.createElement('button');
        newItemElement.classList.add('item');
        newItemValueElement.textContent = input.value;
        btnContainer.classList.add('buttons');
        editbtn.textContent = 'Edit';
        deletebtn.textContent = 'Delete';
        completebtn.textContent = 'Complete';

        editbtn.addEventListener('click', () => {
            items.removeChild(newItemElement);
            input.value = newItemValueElement.textContent;
        });

        deletebtn.addEventListener('click', () => {
            _alert.textContent = "Item deleted";
            _alert.style.backgroundColor = "#80cfa9"
            _alert.classList.remove("none");
            setTimeout(() => {
                _alert.classList.add("none");
                _alert.style.backgroundColor = "#dc3545"
            }, 3000);
            items.removeChild(newItemElement);
        });

        completebtn.addEventListener('click', () => {
            newItemValueElement.classList.add('completed');
        });

        btnContainer.appendChild(editbtn);
        btnContainer.appendChild(deletebtn);
        btnContainer.appendChild(completebtn);
        newItemElement.appendChild(newItemValueElement);
        newItemElement.appendChild(btnContainer);


        items.appendChild(newItemElement);

        input.value = '';
    } else {
        _alert.textContent = "Please Enter Valid Value";
        _alert.classList.remove("none");
        setTimeout(() => {
            _alert.classList.add("none");
        }, 3000);
    }
});


clear.addEventListener('click', () => {
    items.textContent = '';
});