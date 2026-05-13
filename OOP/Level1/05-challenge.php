<?php

// Respect :
// - OOP principles, SOLID, DRY
// - protected & public only if needed
// - getters/setters with control access logic
// - construct with type hinting for all the classes
// - toString method for all the classes
// 
// 1. Make an interface Controllable with methods turnOn() and turnOff()
// 2. Make an abstract class Device implementing Controllable with properties: name, status (bool)
// 3. Make LightBulb, Thermostat, and SmartSpeaker classes extending Device
// 4. LightBulb has a string property 'color'
// 5. Thermostat has a float property 'temperature'
// 6. SmartSpeaker has an int property 'volume'
// 7. Make a Room class that can contain multiple Device instances (array of devices)
// 8. Room has methods addDevice(Device $device), turnOnAll() and turnOffAll()
// 9. Thermostat setter for temperature must throw an Exception if temperature is < 15 or > 30
// 10. Make a SmartHome class that holds multiple Room instances with addRoom(Room $room)
// 11. SmartHome must have a getActiveDevicesCount() method returning the total number of devices currently turned on across all rooms
