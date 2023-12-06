const getMovies = async(id) =>{
    try{
    const movieUrl = `http://localhost:3000/movies/${id}`;
    const moviesResponse = await fetch(movieUrl);
    const movie = await moviesResponse.json();
    console.log(movie)
    }catch(e){
    console.error(e)
    }
}
getMovies(1);