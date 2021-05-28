import CreateBtn from './modules/create-button';
import EditBtn from './modules/edit-btn';

const notes = [];

window.addEventListener('DOMContentLoaded', () => {
    
    const createBtn = new CreateBtn('#create', '#field', notes, '#todo');
    createBtn.bindBtn();

    const editBtn = new EditBtn('.command__create-btn--edit');
    editBtn.bindEditBtn();

});

export {notes};