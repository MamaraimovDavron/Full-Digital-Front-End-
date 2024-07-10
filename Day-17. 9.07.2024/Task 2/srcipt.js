let library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },

  { author: "Walter Isaacson", title: "Steve Jobs", readingStatus: true },

  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of the Hunger Games",
    readingStatus: false,
  },
];

function showData(object) {
  for (const book of object) {
    console.log(
      "\n" + " Kitob muallifi: " + book.author,
      "\n",
      "Kitob nomi: " + book.title,
      "\n",
      "O`qish holati: " + (book.readingStatus ? "Mavjud" : "Mavjud emas")
    );
  }
}

showData(library);
