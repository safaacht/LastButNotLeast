<?php

// Respect :
// - OOP principles, SOLID, DRY
// - protected & public only if needed
// - getters/setters with control access logic
// - construct with type hinting for all the classes
// - toString method for all the classes
// 
// 1. Make an interface Borrowable with methods borrow() and returnItem()
// 2. Make an abstract class LibraryItem implementing Borrowable with properties: title, isBorrowed (bool)
// 3. Make Book, DVD, and Magazine classes extending LibraryItem
// 4. Book has a string property 'author' and int 'pages'
// 5. DVD has an int property 'durationMinutes'
// 6. Magazine has an int property 'issueNumber'
// 7. Implement borrow() in LibraryItem: it must throw an Exception if isBorrowed is already true, otherwise set it to true
// 8. Implement returnItem() in LibraryItem: it sets isBorrowed to false
// 9. Make a Library class containing an array of LibraryItem
// 10. Library has an addLibraryItem(LibraryItem $item) method
// 11. Library has a getAvailableItems() method that returns an array containing only the items that are not currently borrowed
