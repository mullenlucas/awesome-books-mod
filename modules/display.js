import StorageB from './storage.js';

class DisplayB {
  static display = () => {
    const bookList = document.querySelector('.books-display');
    let displ = '';
    StorageB.getBooks().forEach((el, index) => {
      displ += `      
      <div class="oneBook" id="book${index}">
      <div class='infobook'>
      <h4> '${el.titulo}' by ${el.author} </h4> 
      </div>
      <div class='btn-delete'>
      <button class="btn-display" id="${index}">remove</button>
      </div> 
      </div>
      `;
    });
    bookList.innerHTML = displ;
  }
}

export default DisplayB;