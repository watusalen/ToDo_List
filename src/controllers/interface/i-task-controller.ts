import { Task } from '../../models/task';

export interface ITaskController {
    /**
     * Cria uma nova tarefa.
     * @param title - O título da tarefa.
     * @param description - A descrição da tarefa.
     * @param dueDate - A data de vencimento da tarefa.
     */
    createTask(title: string, description: string, dueDate: Date): void;

    /**
     * Marca uma tarefa como concluída.
     * @param id - O ID da tarefa.
     */
    completeTask(id: string): void;

    /**
     * Atualiza uma tarefa existente.
     * @param id - O ID da tarefa.
     * @param title - O novo título da tarefa.
     * @param description - A nova descrição da tarefa.
     * @param dueDate - A nova data de vencimento da tarefa.
     */
    updateTask(id: string, title: string, description: string, dueDate: Date): void;

    /**
     * Remove uma tarefa.
     * @param id - O ID da tarefa.
     */
    deleteTask(id: string): void;

    /**
     * Obtém todas as tarefas.
     * @returns Uma lista de todas as tarefas.
     */
    getAllTasks(): Task[];
}