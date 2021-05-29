
const returnNotesList = (notes) => { 
        notes.forEach(item => {
            const note = document.createElement('div');
            note.className = 'notes__note';
            note.draggable = 'true';
            note.id = item.id;
            note.innerHTML = `
            <div class="notes__close-wrapper">
                <i class="far fa-times-circle notes__note-close"></i>
            </div>
            <p class="notes__note-title">${item.title}</p>
            <p class="notes__note-descr">${item.text}</p>
            <div class="notes__edit-wrapper">
                <button class="command__create-btn" id="edit-note">Edit</button>
            </div>
            `
            note.style.backgroundColor = item.backgroundColor;

            document.getElementById(item.status).append(note);

            console.log(notes);
        });
};

export default returnNotesList;