const directors = [
    {
        name: "Christopher Nolan",
        nationality: "British-American",
        movies: [
            {
                title: "Inception",
                releaseYear: 2010,
                genres: ["Action", "Sci-Fi", "Thriller"],
                views: 50000000,
                rating: 8.8
            },
            {
                title: "Interstellar",
                releaseYear: 2014,
                genres: ["Adventure", "Drama", "Sci-Fi"],
                views: 65000000,
                rating: 8.7
            },
            {
                title: "The Dark Knight",
                releaseYear: 2008,
                genres: ["Action", "Crime", "Drama"],
                views: 80000000,
                rating: 9.0
            }
        ]
    },
    {
        name: "Quentin Tarantino",
        nationality: "American",
        movies: [
            {
                title: "Pulp Fiction",
                releaseYear: 1994,
                genres: ["Crime", "Drama"],
                views: 45000000,
                rating: 8.9
            },
            {
                title: "Django Unchained",
                releaseYear: 2012,
                genres: ["Western"],
                views: 35000000,
                rating: 8.5
            }
        ]
    },
    {
        name: "Steven Spielberg",
        nationality: "American",
        movies: [
            {
                title: "Jurassic Park",
                releaseYear: 1993,
                genres: ["Action", "Adventure", "Sci-Fi"],
                views: 70000000,
                rating: 8.2
            },
            {
                title: "E.T. the Extra-Terrestrial",
                releaseYear: 1982,
                genres: ["Family", "Sci-Fi"],
                views: 60000000,
                rating: 7.9
            }
        ]
    }
]

// challenge 1 : director with the most total movie views combining all their movies
// challenge 2 : the most viewed movie within a specific genre (e.g., "Sci-Fi")
// challenge 3 : the director who released the oldest movie in the dataset
// challenge 4 : top 3 genres sorted by their total views across all movies
// challenge 5 : directors names who have directed movies in multiple distinct genres
