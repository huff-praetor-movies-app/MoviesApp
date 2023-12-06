const getMovie = async(id) =>{
    try{
    const movieUrl = `http://localhost:3000/movies/${id}`;
    const moviesResponse = await fetch(movieUrl);
    const movie = await moviesResponse.json();
    console.log(movie)
    }catch(e){
    console.error(e)
    }
}
getMovie(1);

const getMovies = async () => {
    try{
        const movieUrl = 'http://localhost:3000/movies';
        const moviesResponse = await fetch(movieUrl);
        const movies = await moviesResponse.json();
        console.log(movies);
    }catch(e){
        console.error(e)
    }
}
getMovies()

const createMovie = async (movie) =>{
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
//Create new movie
// (async () => {
//     const newMovie = await createMovie({
//     title: 'Karate Kid',
//     rating: '5',
//     genre: 'action'
// });
// console.log(newMovie)
// })();

//Update movie
// const updateMovie = async (id, movie) =>{
//     try{
//         const url = 'http://localhost:3000/movies';
//         const options = {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(movie)
//         };
//         const response = await fetch(url,options);
//         const updatedMovie = await response.json();
//         return updatedMovie;
//     }catch(e){
//         console.error(e)
//     }
// }

//Delete movie
// const deleteMovie = async (id)=>{
//     try{
//         const url = 'http://localhost:3000/movies';
//         const options = {
//             method: 'DELETE'
//         };
//         const response = await fetch(url,options);
//         const deletedMovie = await response.json();
//         return deletedMovie;
//     }catch (e) {
//
//     }
// }

