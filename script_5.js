const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//  Est-ce que tous les livres ont été au moins empruntés une fois ?
{
  let count = 0
  books.forEach(book => {if (book.rented === 0) {count+=1}})
  if (count === 0){
    console.log("Tous les livres ont été empruntés une fois")
  } else {
    console.log("Au moins un livre n'a jamais été emprunté")
  }
}
//  Quel est livre le plus emprunté ?
{
  FilteredBook = books.find(book => book.rented === Math.max(...books.map(book => book.rented)));
  console.log(`Le livre le plus emprunté est ${FilteredBook.title}`)
}
//  Quel est le livre le moins emprunté ?
{
  FilteredBook = books.find(book => book.rented === Math.min(...books.map(book => book.rented)));
  console.log(`Le livre le moins emprunté est ${FilteredBook.title}`)
}
//  Trouve le livre avec l'ID: 873495 ;
{
  FilteredBook = books.find(book => book.id === 873495);
  console.log(`Le livre avec l'ID 873495 est ${FilteredBook.title}`)
}
//  Supprime le livre avec l'ID: 133712 ;
{
  FilteredIndex = books.findIndex(book => book.id === 133712);
  books.splice(FilteredIndex, 1);
  console.log("Le livre avec l'ID 133712 vient d'être supprimé", books)
}
//  Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
{
  books.sort((a, b) => a.title.localeCompare(b.title));
  console.log("Liste des livres triés par ordre alphabétique :", books);
}