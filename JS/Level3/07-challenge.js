const librarySystem = [
    {
        branchName: "Downtown Central",
        city: "Metropolis",
        inventory: [
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald", copiesAvailable: 3, copiesBorrowed: 5 },
            { title: "1984", author: "George Orwell", copiesAvailable: 0, copiesBorrowed: 7 },
            { title: "To Kill a Mockingbird", author: "Harper Lee", copiesAvailable: 2, copiesBorrowed: 2 }
        ]
    },
    {
        branchName: "Northside Community",
        city: "Metropolis",
        inventory: [
            { title: "1984", author: "George Orwell", copiesAvailable: 1, copiesBorrowed: 3 },
            { title: "The Hobbit", author: "J.R.R. Tolkien", copiesAvailable: 4, copiesBorrowed: 1 },
            { title: "Pride and Prejudice", author: "Jane Austen", copiesAvailable: 0, copiesBorrowed: 0 }
        ]
    },
    {
        branchName: "Westend Library",
        city: "Gotham",
        inventory: [
        ]
    }
];



//Traitement d’une liste de livres avec catégories et disponibilités: calculer des totales des copies par catégorie unique.

const books = [{ id: 101, title: "1984", authorId: 1, categoryIds: [1], copiesAvailable: 2, copiesBorrowed: 5 }, { id: 102, title: "Animal Farm", authorId: 1, categoryIds: [4], copiesAvailable: 0, copiesBorrowed: 3 }, { id: 103, title: "The Hobbit", authorId: 2, categoryIds: [2], copiesAvailable: 4, copiesBorrowed: 2 }, { id: 104, title: "Pride and Prejudice", authorId: 3, categoryIds: [3], copiesAvailable: 1, copiesBorrowed: 1 }, { id: 105, title: "Lost Book", authorId: 99, categoryIds: [3], copiesAvailable: 1, copiesBorrowed: 0 }]




const inventory = [
    { title: "1984", author: "George Orwell", copiesAvailable: 1, copiesBorrowed: 3 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", copiesAvailable: 4, copiesBorrowed: 1 },
    { title: "Pride and Prejudice", author: "Jane Austen", copiesAvailable: 0, copiesBorrowed: 0 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", copiesAvailable: 2, copiesBorrowed: 8 },
    { title: "Fahrenheit 451", author: "Ray Bradbury", copiesAvailable: 5, copiesBorrowed: 2 }
]



// challenge 1 : branch with the largest total number of books (available + borrowed)
// challenge 2 : the most horizontally borrowed book title across all branches
// challenge 3 : find branches where absolutely all copies of "1984" are currently borrowed
// challenge 4 : get an array of all unique authors across all branches
// challenge 5 : calculate the total percentage of borrowed books vs total capacity (available+borrowed) in the entire system