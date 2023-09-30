export interface Task {
    name: string;
    done: boolean;
    category?: Category;
}

export type Category = "general" | "work" | "hobby" | "gym" | "social";