import CreateBtn from './modules/create-button';
import EditBtn from './modules/edit-btn';
import dragAndDrop from './modules/drag-and-drop';
import returnNotesList from './modules/return-notes-list';
import Search from './modules/search';


let notes = [];
const notesList = localStorage.getItem('list');
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

    const search = new Search('#search' , '#reset', '#field', '.notes__note');
    search.bindSearch();

});

export {notes};