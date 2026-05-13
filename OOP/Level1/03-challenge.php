<?php

// Respect :
// - OOP principles, SOLID, DRY
// - protected & public only if needed
// - getters/setters with control access logic
// - construct with type hinting for all the classes
// - toString method for all the classes
// 
// 1. Make a Library class
// 2. Make an abstract class LibraryItem with properties: title, author, publicationYear, isAvailable
// 3. Make Book, Magazine, and DVD classes extending LibraryItem
// 4. Book must have an isbn and pageCount
// 5. Magazine must have an issueNumber
// 6. DVD must have a duration (in minutes)
// 7. Make a Member class with a name, membershipId, and an array of borrowed items (limit 3)
// 8. Library has methods addItem(LibraryItem $item), registerMember(Member $member)
// 9. Library has methods borrowItem(Member $member, LibraryItem $item) and returnItem(Member $member, LibraryItem $item)
// 10. borrowItem() must check if member hasn't reached the limit of 3, and if the item is currently available (update item status and member array)
// 11. Ensure the Library class tracks the total number of items currently borrowed system-wide using a static variable with a getter
