let taskCounter = 0;
let pendingCount = 0;

// Local Storage-dan məlumat yüklə
function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => {
    addTaskToTable(task.id, task.taskValue, task.isCompleted);
  });
  taskCounter = tasks.length; // Task sayını yenilə
  pendingCount = tasks.filter(task => !task.isCompleted).length;
  updatePendingCount(0); // Pending sayını yenilə
}

// Local Storage-a məlumat yaz
function saveTasksToLocalStorage() {
  const rows = document.querySelectorAll('#taskList tr');
  const tasks = Array.from(rows).map(row => {
    const id = parseInt(row.getAttribute('data-id'));
    const taskValue = row.querySelector('.taskText').textContent;
    const isCompleted = row.querySelector('.taskCheckbox').checked;
    return { id, taskValue, isCompleted };
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Pending task sayını yenilə
function updatePendingCount(delta) {
  pendingCount += delta;
  document.getElementById('pendingCount').textContent = pendingCount;
}

// Task əlavə etmək düyməsinə klik
document.getElementById('addTaskBtn').addEventListener('click', function () {
  const taskInput = document.getElementById('taskInput');
  const taskValue = taskInput.value.trim();

  if (taskValue === '') {
    Swal.fire('Warning', 'Task cannot be empty!', 'warning');
    return;
  }

  taskCounter++;
  addTaskToTable(taskCounter, taskValue);
  taskInput.value = '';
  updatePendingCount(1); 
  saveTasksToLocalStorage(); 
  Swal.fire('Success', 'Task added successfully!', 'success');
});

function addTaskToTable(id, taskValue, isCompleted = false) {
  const taskList = document.getElementById('taskList');
  const row = document.createElement('tr');
  row.setAttribute('data-id', id);
  row.innerHTML = `
    <td>
      <input type="checkbox" class="taskCheckbox" ${isCompleted ? 'checked' : ''}>
    </td>
    <td>${id}</td>
    <td class="taskText" style="text-decoration: ${isCompleted ? 'line-through' : 'none'}; color: ${isCompleted ? 'gray' : 'black'};">
      ${taskValue}
    </td>
    <td>
      <button class="btn btn-warning btn-sm editTaskBtn">Edit</button>
      <button class="btn btn-danger btn-sm deleteTaskBtn">Delete</button>
    </td>
  `;
  taskList.appendChild(row);

  const checkbox = row.querySelector('.taskCheckbox');
  checkbox.addEventListener('change', function () {
    const taskText = row.querySelector('.taskText');
    if (checkbox.checked) {
      taskText.style.textDecoration = 'line-through';
      taskText.style.color = 'gray';
      updatePendingCount(-1); 
    } else {
      taskText.style.textDecoration = 'none';
      taskText.style.color = 'black';
      updatePendingCount(1);
    }
    saveTasksToLocalStorage(); 
  });


  row.querySelector('.deleteTaskBtn').addEventListener('click', function () {
    if (!checkbox.checked) {
      updatePendingCount(-1); 
    }
    row.remove();
    Swal.fire('Deleted', 'Task has been deleted!', 'success');
    updateTaskIds();
    saveTasksToLocalStorage();
  });

  row.querySelector('.editTaskBtn').addEventListener('click', function () {
    Swal.fire({
      title: 'Edit Task',
      input: 'text',
      inputValue: taskValue,
      showCancelButton: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        row.querySelector('.taskText').textContent = result.value;
        Swal.fire('Success', 'Task updated successfully!', 'success');
        saveTasksToLocalStorage(); 
      }
    });
  });
}


function updateTaskIds() {
  const rows = document.querySelectorAll('#taskList tr');
  let newId = 1;
  rows.forEach((row) => {
    row.setAttribute('data-id', newId);
    row.children[1].textContent = newId;
    newId++;
  });
  taskCounter = rows.length; 
}

document.getElementById('allTodosBtn').addEventListener('click', function () {
  const rows = document.querySelectorAll('#taskList tr');
  rows.forEach(row => row.style.display = '');
});

document.getElementById('allPendingTodosBtn').addEventListener('click', function () {
  const rows = document.querySelectorAll('#taskList tr');
  rows.forEach(row => {
    const checkbox = row.querySelector('.taskCheckbox');
    row.style.display = checkbox.checked ? 'none' : '';
  });
});

document.getElementById('allCompletedTodosBtn').addEventListener('click', function () {
  const rows = document.querySelectorAll('#taskList tr');
  rows.forEach(row => {
    const checkbox = row.querySelector('.taskCheckbox');
    row.style.display = checkbox.checked ? '' : 'none';
  });
});

document.getElementById('allDeleteBtn').addEventListener('click', function () {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; 
  pendingCount = 0; 
  updatePendingCount(0);
  localStorage.removeItem('tasks'); 
  Swal.fire('Deleted', 'All tasks have been deleted!', 'success');
});
window.addEventListener('load', loadTasksFromLocalStorage);
