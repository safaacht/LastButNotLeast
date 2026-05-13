const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
];

const posts = [
    { id: 101, userId: 1, title: "Hello World", likes: 10 },
    { id: 102, userId: 2, title: "JavaScript Basics", likes: 20 },
    { id: 103, userId: 1, title: "Advanced Arrays", likes: 30 },
    { id: 104, userId: 3, title: "Web Development", likes: 5 }
];

const comments = [
    { id: 1001, postId: 101, userId: 2, text: "Great post!" },
    { id: 1002, postId: 101, userId: 3, text: "Welcome!" },
    { id: 1003, postId: 102, userId: 1, text: "Very helpful." },
    { id: 1004, postId: 103, userId: 2, text: "I learned a lot." }
];

// challenge 1 : return an array of users with the number of posts they have written
// challenge 2 : return the post with the most comments
// challenge 3 : return an array of comments with the name of the user who wrote it and the title of the post it belongs to
// challenge 4 : return the user with the most total likes on their posts
// challenge 5 : return an array of users who have commented on their own posts
