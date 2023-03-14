const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2038 },
    { title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', year: 2025 },
    { title: 'The Road', author: 'Cormac McCarthy', year: 2016 },
  ];
    
  const filterdBooks = books
  .filter(book => book.year >= 2010)
  .map(book => ({...book,author : book.author.toUpperCase() }))

  console.log(filterdBooks);