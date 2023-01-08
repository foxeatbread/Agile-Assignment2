import chai from "chai";
import request from "supertest";
const mongoose = require("mongoose");
import Movie from "../../../../api/movies/movieModel";
import api from "../../../../index";
import movies from "../../../../seedData/movies";
import { movieReviews } from '../../../../api/movies/moviesData'
import User from "../../../../api/users/userModel";
import genres from "../../../../seedData/genres";
import Genre from "../../../../api/genres/genreModel";

const expect = chai.expect;
let db;
let seedData = {
  movieReviews: []
}
let token;
let page;
let validId = 9999;
movieReviews.results.forEach(review => seedData.movieReviews.push(review))

describe("Movies endpoint", () => {
  before(() => {
    mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = mongoose.connection;
  });

  after(async () => {
    try {
      await db.dropDatabase();
    } catch (error) {
      console.log(error);
    }
  });

  beforeEach(async () => {
    try {
      await Movie.deleteMany();
      await Movie.collection.insertMany(movies);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  });
  afterEach(() => {
    api.close(); // Release PORT 8080
  });
  describe("GET /api/movies/tmdb/movies ", () => {
    it("should return 20 movies and a status 200", () => {
      request(api)
        .get("api/movies/tmdb/movies")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
          expect(res.body.results).to.be.a("array");
          expect(res.body.results).to.equal(20);
        });
    });
  });
  describe("GET /api/movies/tmdb/upcoming ", () => {
    it("should return 20 movies and a status 200", () => {
      request(api)
        .get("api/movies/tmdb/upcoming")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
          expect(res.body.results).to.be.a("array");
          expect(res.body.results).to.equal(20);
        });
    });
  });
  describe("GET /api/movies/tmdb/pages/:page", () => {
    describe("when the page is valid number", () => {
      before(() => {
        page = 1;
      });
      it("should return 20 movies of corresponding page from tmdb and a status 200", () => {
        return request(api)
          .get(`/api/movies/tmdb/pages/${page}`)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .then((res) => {
            expect(res.body).to.have.property("page", page);
            expect(res.body.results).to.be.a("array");
            expect(res.body.results.length).to.equal(20);
          });
      });
    });
    describe("when the page is invalid", () => {
      it("should return the NOT found message", () => {
        return request(api)
          .get(`/api/movies/tmdb/movie/0`)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(404)
          .expect({
            status_code: 404,
            message: 'The resource you requested could not be found.',
          });
      });
    });
  });

  describe("GET /api/movies/tmdb/movie/:id", () => {
    describe("when the id is valid", () => {
      it("should return the matching movie", () => {
        request(api)
          .get(`api/movies/tmdb/movie/${validId}`)
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200)
          .then((res) => {
            expect(res.body).to.have.property("Id", validId);
            expect(res.body).to.have.property("original_title", "Der freie Wille");
          });
      });
    });
    describe("when the id is invalid", () => {
      it("should return the NOT found message", () => {
        return request(api)
          .get("/api/movies/tmdb/movie/0")
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(404)
          .expect({
            status_code: 404,
            message: "The resource you requested could not be found.",
          });
      });
    });
  });

  describe("GET /api/movies/tmdb/reviews/movieImages/:id", () => {
    describe("when the id is valid number", () => {
      it("should return an object containing the images and status 200", () => {
        return request(api)
          .get(`/api/movies/tmdb/reviews/movieImages/${movies[0].id}`)
          .expect("Content-Type", /json/)
          .expect(200)
          .then((res) => {
            expect(res.body).to.have.property("id", movies[0].id);
          });
      });
    });
    describe("when the id is not a valid number", () => {
      it("should return a status 403 and the corresponding message", () => {
        return request(api)
          .get(`/api/movies/tmdb/reviews/movieImages/qwe`)
          .expect({});
      });
    });
  });
});

describe("Genres endpoint", () => {
  before(() => {
    mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = mongoose.connection;
  });

  after(async () => {
    try {
      await db.dropDatabase();
    } catch (error) {
      console.log(error);
    }
  });

  beforeEach(async () => {
    try {
      await Genre.deleteMany();
      await Genre.collection.insertMany(genres);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  });
  afterEach(() => {
    api.close(); // Release PORT 8080
  });
  describe("GET /api/genres ", () => {
    it("should return 4 genres and a status 200", (done) => {
      request(api)
        .get("/api/genres")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.equal(4);
          done();
        });
    });
  });
  describe("GET /api/genres/tmdb ", () => {
    it("should return a list of genres and a status 200", (done) => {
      request(api)
        .get("/api/genres")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body).to.be.a("array");
          done();
        });
    });
  });
});
