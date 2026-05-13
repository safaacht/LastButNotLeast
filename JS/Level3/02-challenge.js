const customers = [
    {
        id: 1,
        name: "Alice",
        joinDate: "2020-05-12",
        orders: [
            {
                orderId: "A101",
                date: "2023-11-20",
                items: [
                    { name: "Laptop", price: 1200, quantity: 1 },
                    { name: "Mouse", price: 50, quantity: 2 }
                ],
                totalAmount: 1300
            },
            {
                orderId: "A102",
                date: "2023-12-05",
                items: [
                    { name: "Keyboard", price: 150, quantity: 1 },
                    { name: "Monitor", price: 300, quantity: 1 }
                ],
                totalAmount: 450
            }
        ]
    },
    {
        id: 2,
        name: "Bob",
        joinDate: "2021-08-23",
        orders: [
            {
                orderId: "B201",
                date: "2023-01-15",
                items: [
                    { name: "Headphones", price: 200, quantity: 1 },
                    { name: "Mouse", price: 50, quantity: 1 }
                ],
                totalAmount: 250
            }
        ]
    },
    {
        id: 3,
        name: "Charlie",
        joinDate: "2022-02-14",
        orders: [
            {
                orderId: "C301",
                date: "2023-09-10",
                items: [
                    { name: "Smartphone", price: 800, quantity: 2 },
                    { name: "Tablet", price: 400, quantity: 1 }
                ],
                totalAmount: 2000
            },
            {
                orderId: "C302",
                date: "2023-10-18",
                items: [
                    { name: "Laptop", price: 1200, quantity: 1 }
                ],
                totalAmount: 1200
            },
            {
                orderId: "C303",
                date: "2023-11-01",
                items: [
                    { name: "Smartwatch", price: 250, quantity: 2 }
                ],
                totalAmount: 500
            }
        ]
    }
]

// challenge 1 : customer with the highest total amount spent across all orders
// challenge 2 : the most purchased item by total quantity across all orders
// challenge 3 : find users who have placed less than 3 orders
// challenge 4 : top 3 most expensive individual orders in the system
// challenge 5 : list of unique item names bought by a specific customer
