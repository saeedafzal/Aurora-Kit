export class Sidebar {
    
    private readonly _element!: HTMLElement;

    constructor(id: string) {
        const element = document.getElementById(id);
        if (element) {
            this._element = element;
        } else {
            console.error(`${element} element does not exist.`);
        }
    }

    static init(id: string): Sidebar {
        return new Sidebar(id);
    }

    toggle() {
        this._element.classList.toggle("collapse");
    }
}
