<?php

// Respect :
// - OOP principles, SOLID, DRY
// - protected & public only if needed
// - getters/setters with control access logic
// - construct with type hinting for all the classes
// - toString method for all the classes
// 
// 1. Make a `UserDTO` class. As a DTO (Data Transfer Object), it should only have public readonly properties: `string $id`, `string $fullName`, `string $email`.
// 2. Make an abstract parent class `AbstractUser` with properties: `string $id`, `string $firstName`, `string $lastName`, `string $email`.
// 3. Create a constructor inside `AbstractUser` to initialize these 4 properties.
// 4. Make `Employee` (child class) extending `AbstractUser` which adds a `string $department` property and its own constructor calling the parent constructor.
// 5. Make `Customer` (child class) extending `AbstractUser` which adds an `int $loyaltyPoints` property and its own constructor calling the parent constructor.
// 6. Create a `UserMapper` class.
// 7. Add a static method `mapToDTO(AbstractUser $user): UserDTO` in `UserMapper`. It must return a new `UserDTO` where `fullName` is the concatenation of `firstName` and `lastName`.
// 8. Add a static method `mapToEntity(array $data): AbstractUser` in `UserMapper` that takes an associative array.
// 9. If the array contains the key 'department', `mapToEntity` should construct and return an `Employee`.
// 10. If the array contains the key 'loyaltyPoints', it should construct and return a `Customer`. 
// 11. Throw an Exception in `mapToEntity` if neither key is found or if the base data is incomplete.

