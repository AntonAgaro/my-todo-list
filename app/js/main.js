import CreateBtn from './modules/create-button';
import EditBtn from './modules/edit-btn';
import dragAndDrop from './modules/drag-and-drop';
import returnNotesList from './modules/return-notes-list';


let notes = [];
const notesList = localStorage.getItem('list');
console.log(notesList);
try {
    notes = JSON.parse(notesList);
    returnNotesList(notes);
} catch{};


window.addEventListener('DOMContentLoaded', () => {

    const createBtn = new CreateBtn('#create', '#field', notes, '#todo');
    createBtn.bindBtn();

    const editBtn = new EditBtn('#edit-note');
    editBtn.bindEditBtn();

    dragAndDrop();

});

export {notes};