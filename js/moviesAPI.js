import key from "./key.js"
//get movie by id
export const getMovie = async(id) =>{
    try{
        const movieUrl = `http://localhost:3000/movies/${id}`;
        const moviesResponse = await fetch(movieUrl);
        const movie = await moviesResponse.json();
        return movie;
    }catch(e){
        console.error(e)
    }
}

//get all movies
export const getMovies = async () => {
    try{
        const movieUrl = 'http://localhost:3000/movies';
        const moviesResponse = await fetch(movieUrl);
        const movies = await moviesResponse.json();
        return movies;
    }catch(e){
        console.error(e)
    }
}



// create movie fetch put
export const createMovie = async (movie) =>{
    try{
        const url = 'http://localhost:3000/movies';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        };
        const response = await fetch(url,options);
        const newMovie = await response.json();
        return newMovie;
    }catch(e){
        console.error(e)
    }
}

//Update movie
export const updateMovie = async (id, movie) =>{
    try{
        const url = 'http://localhost:3000/movies/' + id;
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        };
        const response = await fetch(url,options);
        const updatedMovie = await response.json();
        return updatedMovie
    }catch(e){
        console.error(e)
    }
}

//Delete movie
export const deleteMovie = async (id)=>{
    try{
        const url = `http://localhost:3000/movies/${id}`;
        const options = {
            method: 'DELETE'
        };
        const response = await fetch(url,options);
        const deletedMovie = await response.json();
        return deletedMovie;
    }catch (e) {

    }
}

// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYWRhNjhiZTI0MDY1MjMzYWIyNGZkYzg4MzIyZjJmMSIsInN1YiI6IjY1NzBjYmI4MWIxZjNjMDBlMWIzYjI1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XbaPrHCHmLygXlXoif-NtlufxTDR3anx8VIUaoZsBAw'
//     }
// };
//
// export const getPoster =(title) => {
//     console.log(title)
//     fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`, options)
//         .then(response => response.json())
//         .then(movie => movie.results[0].poster_path)
//         .catch(err => console.error(err));
// }

export const getPoster = async (title)=>{
    try{
        const url = `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${key}`
            }
            };
        const response = await fetch(url,options);
        const movie = await response.json();
        console.log(movie);
        const posterPath = await movie.results[0].poster_path
        console.log(posterPath);
        return posterPath.toString();
    }catch (e) {

    }
}