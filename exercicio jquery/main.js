// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function () {
    // Get references to necessary elements
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const form = document.querySelector('form');

    // Function to add a new task to the list
    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', toggleCompleted);
        taskList.appendChild(li);
    }

    // Function to handle form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
        const newTask = taskInput.value.trim();
        if (newTask !== '') {
        addTask(newTask);
        taskInput.value = ''; // Clear the input field after adding the task
        }
    });

    // Function to toggle task completion status
    function toggleCompleted() {
        this.classList.toggle('completed');
    }

    // Show the form when the "Novas tarefas +" button is clicked
    const addButton = document.querySelector('header button');
    addButton.addEventListener('click', function () {
        form.style.display = 'block';
    });
});
