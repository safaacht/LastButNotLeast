<?php

// Respect :
// - OOP principles, SOLID, DRY
// - protected & public only if needed
// - getters/setters with control access logic
// - construct with type hinting for all the classes
// - toString method for all the classes
// - use exceptions for error handling
// 
// 1. Make an interface Payable with method processPayment()
// 2. Make an abstract class Product with properties name, price, stockQuantity
// 3. Make PhysicalProduct and DigitalProduct classes extending Product
// 4. PhysicalProduct must have a shippingCost property
// 5. DigitalProduct must have a downloadLink property
// 6. Make a Customer class with properties name, balance, email
// 7. Make an Order class which can contain multiple products, belonging to a Customer
// 8. The Order class should implement the Payable interface
// 9. Add a method addProduct(Product $product, int $quantity) to the Order class
// 10. The processPayment() in Order must check if Customer has enough balance, deduct it, reduce product stock, and throw an Exception if balance or stock is insufficient
// 11. Keep tracking of all processed Order instances using a static property in Order with a getProcessedOrdersCount() method
