export class Task {
    private id: string | undefined;
    private title: string;
    private description: string;
    private dueDate: Date;
    private status: boolean;

    constructor(title: string, description: string, dueDate: Date) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = false;
    }

    public toggleStatus(): void {
        this.status = !this.status;
    }

    public updateDescription(newDescription: string): void {
        this.description = newDescription;
    }

    public updateDueDate(newDueDate: Date): void {
        this.dueDate = newDueDate;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getDueDate(): Date {
        return this.dueDate;
    }

    public getStatus(): boolean {
        return this.status;
    }
}