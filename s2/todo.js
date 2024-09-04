document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = ''; 
        }
    });

    
    function createTaskItem(text) {
        const li = document.createElement('li');
        li.className = 'task-item';

        const taskSpan = document.createElement('input');
        taskSpan.type = 'text';
        taskSpan.value = text;
        taskSpan.readOnly = true;

        const editButton = document.createElement('button');
        editButton.className = 'edit-button';
        editButton.textContent = '✎';
        editButton.addEventListener('click', () => editTask(taskSpan, editButton));

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = '✖';
        deleteButton.addEventListener('click', () => deleteTask(li));

        li.appendChild(taskSpan);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

    
        taskSpan.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        return li;
    }

    
    function editTask(taskSpan, editButton) {
        if (editButton.textContent === '✎') {
            taskSpan.readOnly = false;
            taskSpan.focus();
            editButton.textContent = '✔';
        } else {
            taskSpan.readOnly = true;
            editButton.textContent = '✎';
        }
    }

    
    function deleteTask(taskItem) {
        taskItem.remove();
    }

    
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
