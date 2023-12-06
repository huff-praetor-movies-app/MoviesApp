import { deleteMovie, updateMovie, getMovie, createMovie, getMovies } from "./moviesAPI.js";

// console.log(getMovie(1))
//
//
// console.log(getMovies());
//
//
// // Create new movie
// (async () => {
//     const newMovie = await createMovie({
//     title: 'Karate Kid',
//     rating: '5',
//     genre: 'action'
// });
// console.log(newMovie)
// })();

const populateMovies = () => {
    getMovies().then(movies => {
        let insert = document.querySelector('.cards')
        for (let movie of movies) {
            let div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `<h3 class=title>${movie.title}</h3>
                                <p>${movie.rating} of 50</p>
                               <p>${movie.genre}</p>`
            insert.appendChild(div)

        }
    });
}
populateMovies()


