class StorageB {
  static storage(ok) {
    window.localStorage.setItem('localBooks', JSON.stringify(ok));
  }

  static getBooks = () => {
    let books = [
      {
        titulo: '100 años de soledad',
        author: 'Gabriel Garcia Marquez',
      },
      {
        titulo: 'El tirano',
        author: 'Massimo Manfredi',
      },
    ];
    if (window.localStorage.getItem('localBooks') === null) {
      this.storage(books);
    }
    books = JSON.parse(window.localStorage.getItem('localBooks'));
    return books;
  }
}

export default StorageB;