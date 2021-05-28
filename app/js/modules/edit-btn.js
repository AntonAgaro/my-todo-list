import Popup from './popup';
import {notes} from '../main';

export default class EditBtn extends Popup {
    constructor(btn) {
        super();
        this.btn = btn;
    }

    createPopup() {
        console.log('popup');
        const popup = document.createElement('div');
        popup.className = 'overlay';
        popup.innerHTML = ` 
        <div class="popup">
            <div class="popup__close-wrapper">
                <i class="far fa-times-circle popup__close-btn"></i>
            </div>
            <div class="popup__title">
                <span class="popup__title-text">Enter title:</span>
                <input type="text" id="popup-title" class="form-control" placeholder="Username">
            </div>
            <div class="popup__text">
                <span class="popup__text--title">Enter description:</span>
                <textarea class="form-control popup__text--area" aria-label="With textarea"></textarea>
            </div>
            <div class="popup__color">
                <span class="popup__color-text">Choose color:</span>
                <input class="popup__color-input" type="color">
            </div>
            <div class="popup__buttons">
                <button class="command__create-btn" id="save-changes" type="button" >Save changes</button>
            </div>
        </div>
        `;
        document.body.append(popup);
    }

    bindEditBtn() {
        document.body.addEventListener('click', (event) => {
            if (event.target.matches(this.btn)) {
                //Связываем popup и заметку через id
                const id = event.target.closest('.notes__note').id;
                this.createPopup();
                document.querySelector('.popup').id = id;
                
                //Вызываем класс Popup
                const popup = new Popup('.overlay', '.popup', '.popup__close-btn', '#popup-title','.popup__text--area', '.popup__color-input', '#save-changes', notes);
                popup.bindPopup();
            }
        });
    }

}