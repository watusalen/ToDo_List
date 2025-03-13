import { Task } from "../models/task";
import { ITaskRepository } from "./interface/i-task-repository";

export class TaskRepository implements ITaskRepository {
    /**
    * Prefixo usado para as chaves de armazenamento no localStorage.
    */
    private storagePrefix: string = "task_";

    /**
     * Gera a chave de armazenamento para uma tarefa com base em seu ID.
     * @param id - O ID da tarefa.
     * @returns A chave completa para armazenamento no localStorage.
     */
    private getStorageKey(id: string): string {
        return `${this.storagePrefix}${id}`;
    }

    /**
    * Adiciona uma nova tarefa.
    * @param task - A tarefa a ser adicionada.
    */
    addTask(task: Task): void {
        if (!task.getID()) {
            const id: string = crypto.randomUUID(); // Gera um ID único se não existir
            task.setID(id);
        }
        localStorage.setItem(this.getStorageKey(task.getID()!), JSON.stringify(task));
    }

    /**
     * Remove uma tarefa pelo ID.
     * @param id - O ID da tarefa a ser removida.
     */
    removeTask(id: string): void {
        localStorage.removeItem(this.getStorageKey(id));
    }

    /**
     * Atualiza uma tarefa existente.
     * @param task - A tarefa atualizada.
     */
    updateTask(task: Task): void {
        if (!task.getID()) {
            throw new Error("Task ID is required for update.");
        }
        localStorage.setItem(this.getStorageKey(task.getID()!), JSON.stringify(task));
    }

    /**
     * Obtém uma tarefa pelo ID.
     * @param id - O ID da tarefa a ser obtida.
     * @returns A tarefa encontrada ou null se não existir.
     */
    getTaskById(id: string): Task | null {
        const data = localStorage.getItem(this.getStorageKey(id));
        return data ? JSON.parse(data) : null;
    }

    /**
     * Obtém todas as tarefas.
     * @returns Uma lista de todas as tarefas.
     */
    getAllTasks(): Task[] {
        const tasks: Task[] = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(this.storagePrefix)) {
                const data = localStorage.getItem(key);
                if (data) {
                    tasks.push(JSON.parse(data));
                }
            }
        }
        return tasks;
    }

}