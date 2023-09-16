//  <li>
//     <label for="task-1">Wyrzucić śmieci</label>
//     <input type="checkbox" id="task-1" name="Wyrzućić śmieci" />
// </li>


// Wyrzucenie śmieci
// Pójść na siłownie
// Nakarmić psa
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button")
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const tasks: string[] = ["Wyrzucenie śmieci", "Pójść na siłownie", "Nakarmić psa"];

const render = () => {
    tasksContainerElement.innerHTML = " ";
    tasks.forEach(task => {
        const taskElement: HTMLElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    })
}

const addTask = (task: string) => {
    tasks.push(task);
}
addButtonElement.addEventListener("click", (e: Event) => {
    e.preventDefault();
    addTask(taskNameInputElement.value);
    render();
})
render();