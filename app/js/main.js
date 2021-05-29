import CreateBtn from './modules/create-button';
import EditBtn from './modules/edit-btn';

const notes = [];

window.addEventListener('DOMContentLoaded', () => {
    
    const createBtn = new CreateBtn('#create', '#field', notes, '#todo');
    createBtn.bindBtn();

    const editBtn = new EditBtn('#edit-note');
    editBtn.bindEditBtn();

});

export {notes};