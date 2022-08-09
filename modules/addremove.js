import StorageB from './storage.js';
import DisplayB from './display.js';

class AddRemoveB {
  static addBook = () => {
    const books = StorageB.getBooks();
    const reciTi = document.getElementById('recibe-ti').value;
    const reciAu = document.getElementById('recibe-au').value;

    if (reciTi !== '' && reciAu !== '') {
      const newBook = {
        titulo: reciTi,
        author: reciAu,
      };
      books.unshift(newBook);
      StorageB.storage(books);
      DisplayB.display();
    }
  }

  static deleteBook = (evento) => {
    let books = StorageB.getBooks();
    books = books.filter((el, index) => evento.target.id !== index.toString());
    StorageB.storage(books);
    DisplayB.display();
  }
}

export default AddRemoveB;