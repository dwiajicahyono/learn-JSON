const info = {
  error: false,
  message: "success",
  books: [
    { id: 155, title: "Belajar BackEnd", author: "Dicoding" },
    { id: 45, title: "Independence Day", author: "Indonesia" },
    { id: 200, title: "Coba Dulu", author: "yums" },
    { id: 212, title: "Halo ges", author: "yums" },
    { id: 56, title: "Title - 56", author: "Author - 56" },
    { id: 581, title: "Title - 581", author: "Author" },
  ],
};

console.log(`Is Error ? ${info.error}`);
info.books.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} (${book.author})`);
  });