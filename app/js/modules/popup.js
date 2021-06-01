import {notes} from '../main';

export default class Popup {
    constructor(popupWrapper, popup, closeBtn, title, descr, colorBlock, saveBtn, notes) {
            this.popupWrapper = document.querySelector(popupWrapper);
            this.popup = document.querySelector(popup);
            this.closeBtn = document.querySelector(closeBtn);
            this.title = document.querySelector(title);
            this.descr = document.querySelector(descr);
            this.colorBlocks = document.querySelectorAll(colorBlock);
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
        console.log(this.notes);
        console.log(notes);
        const noteObj = notes.find(item => item.id == dataId);
        noteObj.title = this.title.value;
        noteObj.text = this.descr.value;
        

        this.colorBlocks.forEach(block => {
            if (block.classList.contains('popup__color-block--active')) {
                const choosenColor = window.getComputedStyle(block).backgroundColor;
                note.style.backgroundColor = choosenColor;
                noteObj.backgroundColor = choosenColor;
            }
        });

        console.log(this.notes);

        //Кладем в loclStorage
        localStorage.setItem('list', JSON.stringify(this.notes));

        this.closePopup();
    }

    bindPopup() {
        this.popupWrapper.addEventListener('click', (event) => {
            const target = event.target;
            if (target == this.closeBtn || target == this.popupWrapper) {
                this.closePopup()
            } 

            if (target.matches('.popup__color-block')) {
                this.colorBlocks.forEach(block => {
                    block.classList.remove('popup__color-block--active');
                }); 
                target.classList.add('popup__color-block--active');
            }
                

            if (target == this.saveBtn) {
                this.saveChanges();
            }
        });
    }

}