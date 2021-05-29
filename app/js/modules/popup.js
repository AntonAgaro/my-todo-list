import {notes} from '../main';

export default class Popup {
    constructor(popupWrapper, popup, closeBtn, title, descr, color, saveBtn, notes) {
            this.popupWrapper = document.querySelector(popupWrapper);
            this.popup = document.querySelector(popup);
            this.closeBtn = document.querySelector(closeBtn);
            this.title = document.querySelector(title);
            this.descr = document.querySelector(descr);
            this.color = document.querySelector(color);
            this.saveBtn = document.querySelector(saveBtn);
            this.notes = notes;
    }

    closePopup() {
        this.popupWrapper.remove();
    }

    saveChanges() {
        const dataId = this.popup.getAttribute('data-id');
        const note = document.getElementById(dataId),
            noteTitle = note.querySelector('.notes__note-title'),
            noteDescr = note.querySelector('.notes__note-descr');
        
        noteTitle.innerHTML = this.title.value;
        noteDescr.innerHTML = this.descr.value;
        note.style.backgroundColor = this.color.value;

        const noteObj = notes.find(item => item.id == this.popup.id);
        noteObj.title = this.title.value;
        noteObj.text = this.descr.value;
        noteObj.backgroundColor = this.color.value;

        //Кладем в loclStorage
        localStorage.setItem('list', JSON.stringify(this.notes));


        this.closePopup();
        console.log(noteObj);
        console.log(notes);
    }

    bindPopup() {
        this.popupWrapper.addEventListener('click', (event) => {
            const target = event.target;
            if (target == this.closeBtn || target == this.popupWrapper) {
                this.closePopup()
            } 
            if (target == this.saveBtn) {
                this.saveChanges();
            }
        });
    }

}