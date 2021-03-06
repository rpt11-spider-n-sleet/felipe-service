var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies', { useNewUrlParser: true });

const movieSchema = new mongoose.Schema({
  url: String,
  thumbnail: String,
  category: String,
  videoId: Number,
  title: String,
  author: String,
  plays: Number
});

const Movie = mongoose.model('Movie', movieSchema);

let retrieveAll = () => {
  return new Promise((resolve, reject) => {
    Movie.find({}, (err, res) => {
      if (err) {
        console.log('there was an error retrieving from db', err);
        reject(err);
      } else {
        console.log('found results in db', res);
        resolve(res);
      }
    });
  });
};


module.exports = {
  Movie,
  movieSchema,
  retrieveAll
};
    

 
  


