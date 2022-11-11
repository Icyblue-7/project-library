function Book() {
    this.title = form.title.value;
    this.author = form.author.value;
    this.page = form.page.value;
    this.read = form.read.checked;
} // we made a constructor

let myLibrary = []

function addLibrary() {
    event.preventDefault();

    const newCard = new Book(title, author, page, read)
    if (newCard.title != '') {
        myLibrary.push(newCard)
        render()
        form.reset()
    }
} // this will add the book to an array

const cardContainer = document.querySelector('.card-container');

function render() {

    const books = document.querySelectorAll('.card');
    books.forEach(book => cardContainer.removeChild(book));

    for (let i=0; i<myLibrary.length; i++){
        newEntry(myLibrary[i]);
    }
 /* this will first remove the items from container
 then loop through the array and add each of them back
 aaand it will give each of them an data number based on index.*/
}    

function newEntry(item) {


        const newEntry = document.createElement('div')
        newEntry.classList.add('card');
        newEntry.dataset.indexNumber = myLibrary.indexOf(item)
        cardContainer.appendChild(newEntry)
        
        const newTitle = document.createElement('p');
        newTitle.innerHTML = item.title;
        newEntry.appendChild(newTitle);
        
        const newAuthor = document.createElement('p');
        newAuthor.innerHTML = item.author;
        newEntry.appendChild(newAuthor);
        
        const newPageNumber = document.createElement('p');
        newPageNumber.innerHTML = item.page;
        newEntry.appendChild(newPageNumber);

        
        const newRead = document.createElement('button');
        newRead.classList.add('read-button')
        newRead.addEventListener('click', () => {
            item.read = !item.read
            render()
        })
        if (item.read) newRead.innerHTML = 'yup'
        else {
            newRead.innerHTML = 'not yeet!'
            newRead.classList.add('not-read')
        }
        newEntry.appendChild(newRead);

        const removeBTN = document.createElement('button')
        removeBTN.classList.add('remove-button')
        removeBTN.innerHTML = 'remove';
        removeBTN.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(item),1);
            render()
        })
        newEntry.appendChild(removeBTN)
        
    } // we made a fucntion to post it on page as card
    
    
    


    


const addButton = document.getElementById('add');

addButton.addEventListener('click', addLibrary) // button for adding stuff