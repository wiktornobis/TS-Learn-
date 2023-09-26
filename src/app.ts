
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button")
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories")

let selectedCategory: Category;

type Category = "general" | "work" | "hobby" | "gym";
interface Task {
    name: string;
    done: boolean;
    category?: Category;
}

const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
    {
        name: "Wyrzucenie śmieci",
        done: false,
        category: "hobby",
        },
    {
        name:  "Pójść na siłownie",
        done: true,
        category: "gym",
    },
    {
        name: "Nakarmić psa",
        done: false,
        category: "work",
    },
];

const render = () => {
    tasksContainerElement.innerHTML = " ";
    tasks.forEach((task, index) => {
        const taskElement: HTMLElement = document.createElement("li");
        if(task.category) {
           taskElement.classList.add(task.category);
        }
        const id: string = `task-${index}`;

        taskElement.innerText = task.name;
        tasksContainerElement.appendChild(taskElement);

        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);

        const checkboxElement: HTMLInputElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        })

        taskElement.appendChild(checkboxElement);

        tasksContainerElement.appendChild(taskElement);

    })
}

const renderCategories = () => {
    categories.forEach(category => {
        const categoryElement: HTMLElement = document.createElement("li");

        const radioInputElement: HTMLInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
           selectedCategory = category;
        });

        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`)
        labelElement.innerText = category;

        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);

        categoriesContainerElement.appendChild(categoryElement);
    })
}
const addTask = (task: Task) => {
    tasks.push(task);
}
addButtonElement.addEventListener("click", (e: Event) => {
    e.preventDefault();
    addTask({name: taskNameInputElement.value, done: false, category: selectedCategory});
    render();
})
addTask({name: "zrobić klatę", done: false, category: selectedCategory})
renderCategories();
render();