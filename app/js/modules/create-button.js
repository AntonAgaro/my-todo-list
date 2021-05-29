import Button from './button';

export default class CreateBtn extends Button {
    constructor(btnElement, input, notes, notesWrapper) {
        super(btnElement, input);
        this.notes = notes;
        this.wrapper = document.querySelector(notesWrapper);
    }

    createNote() {
        //Создаем заметку
        const note = document.createElement('div');
        note.className = 'notes__note';
        note.draggable = 'true';

        note.innerHTML = `
        <div class="notes__close-wrapper">
            <i class="far fa-times-circle notes__note-close"></i>
        </div>
        <p class="notes__note-title">${this.input.value}</p>
        <p class="notes__note-descr"></p>
        <div class="notes__edit-wrapper">
            <button class="command__create-btn" id="edit-note">Edit</button>
        </div>
        `

        //Создаем объект 
        const newNote = {
            title: this.input.value,
            status: this.wrapper.id
        }

        //Пушим в массив новый объект, вычисляем его индекс и делаем его id
        this.notes.push(newNote);
        const noteId = this.notes.indexOf(newNote);
        note.id = noteId;
        newNote.id = noteId;

        //Кладем в loclStorage
        localStorage.setItem('list', JSON.stringify(this.notes));

        //Выводим на страницу
        this.wrapper.append(note);
        console.log(this.notes);
        //Очищаем инпут
        super.cleanInput();
    }

    createError() {
        const error = document.querySelector('.command__error');
        error.classList.toggle('command__error--active');
    }

    bindBtn() {
        this.btn.addEventListener('click', () => {
            if (this.input.value) {
                this.createNote();
            } else {
                this.createError();
            }
        });
    }

}