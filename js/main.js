let taskinput = document.getElementById('taskinput');
let taskbtn = document.getElementById('taskbtn');
let notask = document.getElementById('notask');
let tasks = document.getElementById('tasks');
let invalid = document.getElementById('invalid');
let closevm = document.getElementById('closevm');

let addtask = () => {
    let inputdata = taskinput.value;

    if (taskinput.trim == 0 || taskinput.value.length < 3) {
        invalid.classList.remove('none')

    } else {
        notask.classList.add('none');
        invalid.classList.add('none');
        tasks.innerHTML += `
<div class=' alert alert-primary '>
${inputdata}
<button type="button" class="btn btn-danger float-right ml-2 py-0 delete ">Delete</button>
<button type="button"  class="btn btn-secondary float-right py-0 ">Edit</button>
</div>
`;
        taskinput.value = "";
    }
}
// tasks.addEventListener('click', function (e) {
//     if (e.target.classList.contains('task'));
//     e.target.classList.toggle('checked');
// });

let shownotask = () => {
    if (tasks.children.length == 0) {
        notask.classList.remove('none');
    }

}

let removeinvalid = () => {
    invalid.classList.add('none');
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        shownotask();
    }

})

taskbtn.addEventListener('click', addtask);
closevm.addEventListener('click', removeinvalid);