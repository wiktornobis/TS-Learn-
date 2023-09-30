import { Task, Category } from "./types/types";
import { render } from "./helpers/render-tasks.helper.js";
import { render as renderCategories} from "./helpers/render-categories.helper.js"


const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button")
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories")

let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby", "social"];

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

const addTask = (task: Task) => {
    tasks.push(task);
}
const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
}
addButtonElement.addEventListener("click", (e: Event) => {
    e.preventDefault();
    addTask({name: taskNameInputElement.value, done: false, category: selectedCategory});
    render(tasks, tasksContainerElement);
})
addTask({name: "zrobić klatę", category: "gym", done: false})
renderCategories(
    categories,
    categoriesContainerElement,
    updateSelectedCategory
);
render(tasks, tasksContainerElement);
