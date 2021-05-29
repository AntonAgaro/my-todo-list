import {notes} from '../main';

const dragAndDrop = () => {
    const todo = document.querySelector('#todo'),
        inWork = document.querySelector('#in-work'),
        done = document.querySelector('#done');

    document.body.addEventListener('dragstart', (event) => {
        const target = event.target;
        if (target.matches('.notes__note')) {
            target.classList.add('notes__note--selected');
        }
    }); 
    document.body.addEventListener('dragend', (event) => {
        const target = event.target;
        if (target.matches('.notes__note')) {
            target.classList.remove('notes__note--selected');
        }
    }); 

    document.body.addEventListener('dragover', (event) => {
        event.preventDefault();
        const target = event.target;

        const activeItem = document.querySelector('.notes__note--selected');

        if (target == inWork || target == todo || target == done)  {
            target.append(activeItem);
            const activeNoteObj = notes.find((item, index) => {
                if (index == activeItem.id) return item;
            });
            activeNoteObj.status = target.id;

            //Кладем в loclStorage
            localStorage.setItem('list', JSON.stringify(notes));

        }        


    })
};

export default dragAndDrop;