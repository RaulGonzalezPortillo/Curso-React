export {}

class myArray<TipoDato> {
    private array: Array<TipoDato> = [];

    constructor(firstElement: TipoDato) {
        this.array = [firstElement];
    }

    addElement(element: TipoDato): TipoDato {
        this.array = [...this.array, element];
        return element;
    }

    getElement(position: number): TipoDato | undefined {
        return this.array[position];
    }
}

const array = new myArray<string | number>("Primer elemento");
array.addElement(2);
array.addElement(3);
array.addElement(4);
array.addElement("Quinto elemento");