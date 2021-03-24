export default class Modal {

    private readonly _element!: HTMLElement;

    constructor(id: string) {
        const element = document.getElementById(id);
        if (element) {
            this._element = element;
        } else {
            console.error(`${element} element does not exist.`);
        }
    }

    static init(id: string): Modal {
        return new Modal(id);
    }

    display(): void {
        this._element.classList.add("open");
    }

    hide(dispose?: boolean): void {
        this._element.classList.add("close");
        if (dispose) {
            this.dispose();
        }
    }

    dispose(): void {
        this._element.remove();
    }
}
