export class ToDo {
    id: number;
    texto: string;
    estado: boolean;
    constructor(txt: string) {
        this.texto = txt.charAt(0).toUpperCase() + txt.slice(1);
        this.estado = false;
        this.id =  Math.random();
    }
}
