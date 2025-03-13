import { Task } from "../../models/task";

export interface ITaskRepository {
    /**
     * Adiciona uma nova tarefa.
     * @param task - A tarefa a ser adicionada.
     */
    addTask(task: Task): void;

    /**
     * Remove uma tarefa pelo ID.
     * @param id - O ID da tarefa a ser removida.
     */
    removeTask(id: string): void;

    /**
     * Atualiza uma tarefa existente.
     * @param task - A tarefa atualizada.
     */
    updateTask(task: Task): void;

    /**
     * Obtém uma tarefa pelo ID.
     * @param id - O ID da tarefa a ser obtida.
     * @returns A tarefa encontrada ou null se não existir.
     */
    getTaskById(id: string): Task | null;

    /**
     * Obtém todas as tarefas.
     * @returns Uma lista de todas as tarefas.
     */
    getAllTasks(): Array<Task>;
}