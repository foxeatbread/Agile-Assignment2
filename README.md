## Agile Assignment2

Name: Haoxuan Gu Student Number: 20100200

# Api endpoints
/tmdb/upcoming
/tmdb/movies
/tmdb/movie/:id
/tmdb/genres
/tmdb/reviews/:id
/tmdb/upcomingpage
/tmdb/reviews/movieImages/:id
/tmdb/pages/:page
/tmdb/searchMovie/:moveiName
/tmdb/actorDetail/:id

# Test Cases
  Users endpoint
    GET /api/users
database connected to movies on ac-wk4nevh-shard-00-00.scgvcea.mongodb.net
2 users were successfully stored.
20 Movies were successfully stored.
4 genres were successfully stored.
      √ should return the 2 users and a status 200
    POST /api/users
      For a register action
        when the payload is correct
          √ should return a 201 status and the confirmation message (222ms)
      For an authenticate action
        when the payload is correct
          √ should return a 200 status and a generated token (222ms)

  Movies endpoint
    GET /api/movies/tmdb/movies
      √ should return 20 movies and a status 200
    GET /api/movies/tmdb/upcoming
      √ should return 20 movies and a status 200
    GET /api/movies/tmdb/pages/:page
      when the page is valid number
        √ should return 20 movies of corresponding page from tmdb and a status 200 (76ms)
      when the page is invalid
        √ should return the NOT found message
    GET /api/movies/tmdb/movie/:id
      when the id is valid
        √ should return the matching movie
      when the id is invalid
        √ should return the NOT found message
    GET /api/movies/tmdb/reviews/movieImages/:id
      when the id is valid number
        √ should return an object containing the images and status 200 (63ms)
      when the id is not a valid number
        √ should return a status 403 and the corresponding message (152ms)

  Genres endpoint
    GET /api/genres
      √ should return 4 genres and a status 200
    GET /api/genres/tmdb
      √ should return a list of genres and a status 200

# Related Links
Github: https://github.com/foxeatbread/Agile-Assignment2
Gitlab: https://gitlab.com/GuHaoxuan/agile-assignment2.git