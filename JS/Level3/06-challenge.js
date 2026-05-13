const users = [
    {
        username: "tech_guru",
        followersCount: 15400,
        posts: [
            { content: "Just built my first mechanical keyboard!", likes: 1200, comments: 45 },
            { content: "JavaScript is awesome but tricky.", likes: 850, comments: 120 },
            { content: "Hello world!", likes: 300, comments: 0 }
        ]
    },
    {
        username: "travel_diaries",
        followersCount: 45000,
        posts: [
            { content: "Sunset in Bali 🌅", likes: 5200, comments: 340 },
            { content: "Best street food in Tokyo", likes: 8900, comments: 600 }
        ]
    },
    {
        username: "foodie_eats",
        followersCount: 8200,
        posts: [
            { content: "Homemade pizza recipe 🍕", likes: 950, comments: 60 },
            { content: "Tried the new cafe downtown. Highly recommend!", likes: 420, comments: 15 },
            { content: "Just burnt my toast...", likes: 50, comments: 0 }
        ]
    },
    {
        username: "fitness_journey",
        followersCount: 22000,
        posts: [
            { content: "Morning run completed! 5k in 25 mins.", likes: 3100, comments: 150 },
            { content: "Meal prep Sunday!", likes: 1800, comments: 85 }
        ]
    }
];

// challenge 1 : user with the highest total number of likes across all their posts
// challenge 2 : the individual post with the highest number of comments overall
// challenge 3 : find users who have at least one post with 0 comments
// challenge 4 : calculate the average number of likes per post for each user
// challenge 5 : get an array of usernames ordered by their followersCount descending
