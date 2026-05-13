const guilds = [
    {
        guildName: "Knights of the Round",
        server: "EU-West",
        members: [
            {
                characterName: "Arthur",
                characterClass: "Paladin",
                level: 85,
                equipment: [
                    { itemName: "Excalibur", rarity: "Legendary", durability: 100 },
                    { itemName: "Steel Shield", rarity: "Epic", durability: 45 }
                ]
            },
            {
                characterName: "Merlin",
                characterClass: "Mage",
                level: 90,
                equipment: [
                    { itemName: "Staff of Ages", rarity: "Legendary", durability: 80 },
                    { itemName: "Mantle of Wisdom", rarity: "Legendary", durability: 95 }
                ]
            },
            {
                characterName: "Lancelot",
                characterClass: "Warrior",
                level: 82,
                equipment: [
                    { itemName: "Silver Sword", rarity: "Rare", durability: 30 },
                    { itemName: "Iron Armor", rarity: "Common", durability: 12 }
                ]
            }
        ]
    },
    {
        guildName: "Shadow Assassins",
        server: "NA-East",
        members: [
            {
                characterName: "Ezio",
                characterClass: "Thief",
                level: 78,
                equipment: [
                    { itemName: "Hidden Blade", rarity: "Legendary", durability: 70 },
                    { itemName: "Dark Cloak", rarity: "Epic", durability: 65 }
                ]
            },
            {
                characterName: "Grom",
                characterClass: "Warrior",
                level: 60,
                equipment: [
                    { itemName: "Orcish Axe", rarity: "Epic", durability: 40 }
                ]
            }
        ]
    },
    {
        guildName: "Mystic Circle",
        server: "EU-West",
        members: [
            {
                characterName: "Gandalf",
                characterClass: "Mage",
                level: 95,
                equipment: [
                    { itemName: "White Staff", rarity: "Legendary", durability: 100 },
                    { itemName: "Ring of Power", rarity: "Legendary", durability: 100 },
                    { itemName: "Elven Cloak", rarity: "Epic", durability: 90 }
                ]
            }
        ]
    }
]

// challenge 1 : guild with the highest average member level
// challenge 2 : character with the highest count of "Legendary" equipment items
// challenge 3 : find all characters who have at least one equipment item with less than 50 durability
// challenge 4 : top 3 highest level characters belonging to a specific class (e.g., "Paladin")
// challenge 5 : guilds that have members covering at least 3 distinct character classes
