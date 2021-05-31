
export default class Search {
    constructor(searchBtn, resetBtn, input, allNotes) {
        this.searchBtn = document.querySelector(searchBtn);
        this.input = document.querySelector(input);
        this.resetBtn = document.querySelector(resetBtn);
        this.allNotes = document.querySelectorAll(allNotes);
    }

    search() {
        const regExp = new RegExp(`${this.input.value}`, 'ig');

        if (this.input.value == '') return;

        this.allNotes.forEach(item => {
            let result = item.innerHTML.match(regExp);
            if (result) {
                item.classList.add('notes__note--found');
                item.classList.remove('notes__note--not-found')
            } else {
                item.classList.add('notes__note--not-found')
                item.classList.remove('notes__note--found');
            }
        });
    }

    reset() {
        this.allNotes.forEach(item => {
            item.classList.remove('notes__note--found');
            item.classList.remove('notes__note--not-found');
            this.input.value = '';
        });
    }

    bindSearch() {
        this.searchBtn.addEventListener('click', () => {
            this.search();
        });

        this.resetBtn.addEventListener('click', () => {
            this.reset();
        });
    }
}