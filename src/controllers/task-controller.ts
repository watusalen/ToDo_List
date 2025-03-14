import { ITaskController } from './interface/i-task-controller';
import { TaskService } from '../services/task-service';
import { Task } from '../models/task';

export class TaskController implements ITaskController {
    private taskService: TaskService;

    constructor(taskService: TaskService) {
        this.taskService = taskService;
    }

    /**
     * Cria uma nova tarefa.
     * @param title - O título da tarefa.
     * @param description - A descrição da tarefa.
     * @param dueDate - A data de vencimento da tarefa.
     */
    createTask(title: string, description: string, dueDate: Date): void {
        const task = this.taskService.createTask(title, description, dueDate);
        console.log('Task created:', task);
    }

    /**
     * Marca uma tarefa como concluída.
     * @param id - O ID da tarefa.
     */
    completeTask(id: string): void {
        this.taskService.completeTask(id);
        console.log('Task completed:', id);
    }

    /**
     * Atualiza uma tarefa existente.
     * @param id - O ID da tarefa.
     * @param title - O novo título da tarefa.
     * @param description - A nova descrição da tarefa.
     * @param dueDate - A nova data de vencimento da tarefa.
     */
    updateTask(id: string, title: string, description: string, dueDate: Date): void {
        const task = this.taskService.getTaskById(id);
        if (task) {
            task.updateDescription(description);
            task.updateDueDate(dueDate);
            this.taskService.updateTask(task);
            console.log('Task updated:', task);
        } else {
            console.error('Task not found:', id);
        }
    }

    /**
     * Remove uma tarefa.
     * @param id - O ID da tarefa.
     */
    deleteTask(id: string): void {
        this.taskService.deleteTask(id);
        console.log('Task deleted:', id);
    }

    /**
     * Obtém todas as tarefas.
     * @returns Uma lista de todas as tarefas.
     */
    getAllTasks(): Task[] {
        return this.taskService.getAllTasks();
    }
}