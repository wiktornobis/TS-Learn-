import {Category, Task} from "./types/types";
import {render} from "./helpers/render-tasks.helper.js";
import {render as renderCategories} from "./helpers/render-categories.helper.js"


const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button")
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories")

let selectedCategory: Category;

const categories: Category[] = [Category.GENERAL, Category.WORK, Category.GYM, Category.HOBBY, Category.SOCIAL];

const tasks: Task[] = [
    {
        name: "Wyrzucenie śmieci",
        done: false,
        category: Category.HOBBY,
        },
    {
        name:  "Pójść na siłownie",
        done: true,
        category: Category.GYM,
    },
    {
        name: "Nakarmić psa",
        done: false,
        category: Category.WORK,
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
addTask({name: "zrobić klatę", category: Category.GYM, done: false})
renderCategories(
    categories,
    categoriesContainerElement,
    updateSelectedCategory
);
render(tasks, tasksContainerElement);



