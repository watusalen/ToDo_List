import { Task } from '../../models/task';

export interface ITaskService {
    /**
     * Cria uma nova tarefa.
     * @param title - O título da tarefa.
     * @param description - A descrição da tarefa.
     * @param dueDate - A data de vencimento da tarefa.
     * @returns A tarefa criada.
     */
    createTask(title: string, description: string, dueDate: Date): Task;

    /**
     * Marca uma tarefa como concluída.
     * @param id - O ID da tarefa.
     */
    completeTask(id: string): void;

    /**
     * Atualiza uma tarefa existente.
     * @param task - A tarefa atualizada.
     */
    updateTask(task: Task): void;

    /**
     * Remove uma tarefa.
     * @param id - O ID da tarefa.
     */
    deleteTask(id: string): void;

    /**
     * Obtém uma tarefa pelo ID.
     * @param id - O ID da tarefa.
     * @returns A tarefa encontrada ou null se não existir.
     */
    getTaskById(id: string): Task | null;

    /**
     * Obtém todas as tarefas.
     * @returns Uma lista de todas as tarefas.
     */
    getAllTasks(): Task[];
}