let taskCounter = 0;
let pendingCount = 0;


function updatePendingCount(delta) {
  pendingCount += delta;
  document.getElementById('pendingCount').textContent = pendingCount;
}


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
  Swal.fire('Success', 'Task added successfully!', 'success');
});


function addTaskToTable(id, taskValue) {
  const taskList = document.getElementById('taskList');
  const row = document.createElement('tr');
  row.setAttribute('data-id', id);
  row.innerHTML = `
    <td>
      <input type="checkbox" class="taskCheckbox">
    </td>
    <td>${id}</td>
    <td class="taskText">${taskValue}</td>
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
  });

  row.querySelector('.deleteTaskBtn').addEventListener('click', function () {
    if (!checkbox.checked) {
      updatePendingCount(-1); 
    }
    row.remove();
    Swal.fire('Deleted', 'Task has been deleted!', 'success');
    updateTaskIds();
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
  Swal.fire('Deleted', 'All tasks have been deleted!', 'success');
});
