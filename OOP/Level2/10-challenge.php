<?php

// Respect :
// - OOP principles, SOLID, DRY
// - protected & public only if needed
// - getters/setters with control access logic
// - construct with type hinting for all the classes
// - toString method for all the classes
// 
// 1. Make an interface Notifiable with a method sendNotification(string $message)
// 2. Make an abstract class User implementing Notifiable with properties: username, email
// 3. Make Admin, Customer, and Guest classes extending User
// 4. Admin has an array property 'permissions'
// 5. Customer has a string property 'shippingAddress'
// 6. Guest has an int property 'sessionDuration'
// 7. Implement sendNotification() differently for each type (simulate by echoing a string or throwing if needed)
// 8. Admin's sendNotification must be prefixed with "URGENT ADMIN ALERT:"
// 9. The User's email setter must throw an Exception if the email does not contain an '@' character
// 10. Make a NotificationSystem class with an array of User instances and addSubscriber(User $user)
// 11. NotificationSystem has a method notifyAll(string $message) that calls sendNotification on all subscribers

