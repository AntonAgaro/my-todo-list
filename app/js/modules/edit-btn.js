import Popup from './popup';
import {notes} from '../main';

export default class EditBtn extends Popup {
    constructor(btn) {
        super();
        this.editBtn = btn;
    }

    createPopup(title, descr) {
        const popup = document.createElement('div');
        popup.className = 'overlay';
        popup.innerHTML = ` 
        <div class="popup">
            <div class="popup__close-wrapper">
                <i class="far fa-times-circle popup__close-btn"></i>
            </div>
            <div class="popup__title">
                <span class="popup__title-text">Enter title:</span>
                <input type="text" id="popup-title" class="form-control" value=" ${title}">
            </div>
            <div class="popup__text">
                <span class="popup__text--title">Enter description:</span>
                <textarea class="form-control popup__text--area" aria-label="With textarea">${descr}</textarea>
            </div>
            <div class="popup__color">
                <span class="popup__color-text">Choose color:</span>
                <div class="popup__color-block popup__color-block--white"></div>
                <div class="popup__color-block popup__color-block--red"></div>
                <div class="popup__color-block popup__color-block--orange"></div>
                <div class="popup__color-block popup__color-block--yellow"></div>
                <div class="popup__color-block popup__color-block--green"></div>
                <div class="popup__color-block popup__color-block--blue"></div>
                <div class="popup__color-block popup__color-block--deep-sky-blue"></div>
                <div class="popup__color-block popup__color-block--violet"></div>     
                <div class="popup__color-block popup__color-block--pink"></div>           
            </div>
            <div class="popup__buttons">
                <button class="command__create-btn" id="save-changes" type="button" >Save changes</button>
            </div>
        </div>
        `;
        document.body.append(popup);
    }

    deleteNote(targetNote) {
        notes.splice(targetNote.id, 1);
        targetNote.remove();
        //Обновляем id всех заметок в массиве после сдвига
        notes.forEach((item, index) => item.id = index);
        //Кладем в loclStorage
        localStorage.setItem('list', JSON.stringify(notes));

    }

    bindEditBtn() {
        document.body.addEventListener('click', (event) => {
            if (event.target.matches(this.editBtn) || event.target.matches('.notes__note-close')) {
                const targetNote = event.target.closest('.notes__note');

                if (event.target.matches(this.editBtn)) {
                    const title = targetNote.querySelector('.notes__note-title').innerHTML;
                    const descr = targetNote.querySelector('.notes__note-descr').innerHTML;
                    //Связываем popup и заметку через id
                    const id = targetNote.id;
                    this.createPopup(title, descr);
                    document.querySelector('.popup').setAttribute('data-id', id);
                    
                    //Вызываем класс Popup
                    const popup = new Popup('.overlay', '.popup', '.popup__close-btn', '#popup-title','.popup__text--area', '.popup__color-block', '#save-changes', notes);
                    popup.bindPopup();
                }
                if (event.target.matches('.notes__note-close')) {
                    let result = confirm('Do you want to delete this note?');
                    if(result) {
                        this.deleteNote(targetNote);
                    } else {
                        return;
                    }
                    
                    
                }
            }
        });
    }

}