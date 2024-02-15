function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var li = document.createElement("li");
        li.textContent = taskText;
        
        
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.className = "delete";
        deleteButton.addEventListener("click", function () {
            this.parentElement.remove();
        });

        
        var taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");
        
       
        taskContainer.appendChild(li);
        taskContainer.appendChild(deleteButton);

        taskList.appendChild(taskContainer);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}


