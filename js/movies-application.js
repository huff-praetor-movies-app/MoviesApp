import { deleteMovie, updateMovie, getMovie, createMovie, getMovies } from "./moviesAPI.js";

const addNewMovie = () =>{
    const addImage = document.querySelector('#addMovieImage');
    addImage.addEventListener("click", (e)=>{
        e.preventDefault()
        document.querySelector('#create').showModal();
    })
}
addNewMovie();

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

//   setTimeout(() => {
//         document.getElementsByTagName("body")[0].style.background = "orangered";
//     }, 2000);

const load = document.querySelector('#loading')
let id
const populateMovies = () => {
    load.showModal()
    getMovies().then(movies => {
        let insert = document.querySelector('.cards')
        insert.innerHTML = ''
        for (let movie of movies) {
            let div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `<h3 class=title>${movie.title}</h3>
                                <p>${movie.rating} of 50</p>
                               <p>${movie.genre}</p>`
            insert.appendChild(div)
            const image= document.createElement('img');
            image.setAttribute('src', 'img/icons8-edit-50.png');
            image.setAttribute(`data-id`, movie.id)
            div.appendChild(image);

            image.addEventListener("click", evt => {
                evt.preventDefault()
                evt.stopPropagation()
                id = evt.target.dataset.id;
                console.log(id);
                updateForm(id)
            })
        }load.close();
    });

}
populateMovies()

function updateForm(id)  {
    load.showModal()
    let formTitle = document.querySelector('#update-title');
    let formRating = document.querySelector('#update-rating');
    let formGenre = document.querySelector('#update-genre');
    fetch("http://localhost:3000/movies/" + id).then(resp => resp.json()).then(movie => {
       formTitle.value = movie.title;
        formRating.value = movie.rating;
        formGenre.value = movie.genre;
        document.querySelector('#update').showModal();
        load.close()
    })

}
document.querySelector('#cancelUpdate').addEventListener('click', () => {
    document.querySelector('#update').close()
})

//need to convert into a function --ira
document.querySelector('#submitUpdate').addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector('#update').close()
    let title = document.querySelector('#update-title').value;
    let rating = document.querySelector('#update-rating').value;
    let genre = document.querySelector('#update-genre').value;
    updateMovie(id, {title, rating, genre})
    populateMovies()
    }
)
document.querySelector('#createNewMovie').addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector('#create').close()
        let title = document.querySelector('#create-title').value;
        let rating = document.querySelector('#create-rating').value;
        let genre = document.querySelector('#create-genre').value;
        createMovie({title, rating, genre})
        populateMovies()

    }
)
