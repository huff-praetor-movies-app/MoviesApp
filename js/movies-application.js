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