// src/services/TaskService.ts

import { ITaskService } from './interface/i-task-service';
import { Task } from '../models/task';
import { TaskRepository } from '../repositories/task-repository';

export class TaskService implements ITaskService {
    private repository: TaskRepository;

    constructor(repository: TaskRepository) {
        this.repository = repository;
    }

    /**
     * Cria uma nova tarefa.
     * @param title - O título da tarefa.
     * @param description - A descrição da tarefa.
     * @param dueDate - A data de vencimento da tarefa.
     * @returns A tarefa criada.
     */
    createTask(title: string, description: string, dueDate: Date): Task {
        const task = new Task(title, description, dueDate);
        this.repository.addTask(task);
        return task;
    }

    /**
     * Marca uma tarefa como concluída.
     * @param id - O ID da tarefa.
     */
    completeTask(id: string): void {
        const task = this.repository.getTaskById(id);
        if (task) {
            task.toggleStatus();
            this.repository.updateTask(task);
        }
    }

    /**
     * Atualiza uma tarefa existente.
     * @param task - A tarefa atualizada.
     */
    updateTask(task: Task): void {
        this.repository.updateTask(task);
    }

    /**
     * Remove uma tarefa.
     * @param id - O ID da tarefa.
     */
    deleteTask(id: string): void {
        this.repository.removeTask(id);
    }

    /**
     * Obtém uma tarefa pelo ID.
     * @param id - O ID da tarefa.
     * @returns A tarefa encontrada ou null se não existir.
     */
    getTaskById(id: string): Task | null {
        return this.repository.getTaskById(id);
    }

    /**
     * Obtém todas as tarefas.
     * @returns Uma lista de todas as tarefas.
     */
    getAllTasks(): Task[] {
        return this.repository.getAllTasks();
    }
}