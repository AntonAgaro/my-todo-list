export default class Button {
    constructor(btnElement, input) {
        this.btn = document.querySelector(btnElement);
        this.input = document.querySelector(input);
    }
    cleanInput() {
        this.input.value = '';
    }
}