<?php

// Respect :
// - OOP principles, SOLID, DRY
// - protected & public only if needed
// - getters/setters with control access logic
// - construct with type hinting for all the classes
// - toString method for all the classes
// 
// 1. Make a FleetManager class that implements the Singleton pattern (only one instance can exist)
// 2. Make an interface Drivable with a method drive(int $distance)
// 3. Make an abstract class Vehicle implementing Drivable with properties: brand, model, mileage, fuelLevel
// 4. Make Car, Truck, and Motorcycle classes extending Vehicle
// 5. Car consumes 5 liters of fuel per 100km
// 6. Truck consumes 15 liters of fuel per 100km and has a loadCapacity property
// 7. Motorcycle consumes 3 liters of fuel per 100km
// 8. Implement drive(int $distance) differently for each vehicle type to reduce fuelLevel appropriately. Throw an exception if there isn't enough fuel.
// 9. FleetManager has methods addVehicle(Vehicle $vehicle) and refuelAllVehicles()
// 10. FleetManager has a method getTotalMileage() returning the sum of the mileage of all vehicles
// 11. Add a method in FleetManager getVehiclesNeedingFuel() that returns an array of vehicles with fuelLevel below 20%
