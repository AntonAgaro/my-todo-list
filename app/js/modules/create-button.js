import Button from './button';

export default class CreateBtn extends Button {
    constructor(btnElement, input, notes, notesWrapper) {
        super(btnElement, input);
        this.notes = notes;
        this.wrapper = document.querySelector(notesWrapper);
    }

    createNote() {
        //Создаем
        const note = document.createElement('div');
        const noteTitle = document.createElement('p');
        const noteDescr = document.createElement('p');
        const closeBtn = document.createElement('i');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';

        //Присваиваем классы
        note.className = 'notes__note';
        noteTitle.className = 'notes__note-title';
        noteDescr.className = 'notes__note-descr';
        closeBtn.className = 'far fa-times-circle notes__note-close';
        editBtn.className = 'command__create-btn command__create-btn--edit'

        //Записываем в title содержимое input
        noteTitle.textContent = this.input.value;

        //Создаем объект 
        const newNote = {
            title: noteTitle.innerHTML,
        }

        //Пушим в массив новый объект, вычисляем его индекс и делаем его id
        this.notes.push(newNote);
        const noteId = this.notes.indexOf(newNote);
        note.id = noteId;
        newNote.id = noteId;

        //Выводим на страницу
        this.wrapper.append(note);
        note.append(noteTitle);
        note.append(noteDescr);
        note.append(closeBtn);
        note.append(editBtn);

        //Очищаем инпут
        super.cleanInput();
        console.log(this.notes);
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