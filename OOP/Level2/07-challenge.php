<?php

// Respect :
// - OOP principles, SOLID, DRY
// - protected & public only if needed
// - getters/setters with control access logic
// - construct with type hinting for all the classes
// - toString method for all the classes
// 
// 1. Make an interface Purchasable with a method getPrice() returning a float
// 2. Make an abstract class Product implementing Purchasable with properties: name, basePrice, taxRate
// 3. Make PhysicalProduct, DigitalProduct, and Subscription classes extending Product
// 4. PhysicalProduct has a float property 'weight'
// 5. DigitalProduct has an int property 'downloadSizeMB'
// 6. Subscription has an int property 'durationMonths'
// 7. PhysicalProduct's getPrice() returns (basePrice + (weight * 2)) * (1 + taxRate)
// 8. The setter for taxRate must throw an Exception if taxRate is < 0 or > 1
// 9. Make a ShoppingCart class that can hold multiple Product instances
// 10. ShoppingCart has methods addProduct(Product $product) and calculateTotal() which sums getPrice() of all products
// 11. Add a method in ShoppingCart getPhysicalWeight() that safely returns the total weight of only the PhysicalProduct instances
