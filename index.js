const books = [
    { name: "Post 1", author: "Yazar 1" },
    { name: "Post 2", author: "Yazar 2" },
    { name: "Post 3", author: "Yazar 3" },
  ];
  
  const listBooks = () => {
    books.map((book) => {
      console.log(book.name);
    });
  };
  
  const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
      books.push(newBook);
      resolve(books);
      //reject('BIR HATA OLUSTU');
    });
  
    return promise1;
  };
  
  async function showBooks() {
    try {
      console.log("Eski Post:");
      listBooks();
      console.log("\n")
      await addBook({ name: "Post 4", author: "Yazar 4" });
      console.log("Yeni Post:")
      listBooks();
    } catch (error) {
      console.log(error);
    }
  }
  
  showBooks();