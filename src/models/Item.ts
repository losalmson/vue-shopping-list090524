export class Item {
    id: number; 
    done: boolean;

    constructor(public text: string) {
        this.id = Date.now();
        this.done = false;
    }
}