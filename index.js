
// GRABBING ELEMENTS FROM HTML
const movieWrapper = document.querySelector(".movie__results");
const searchName = document.querySelector(".search__results");

movieWrapper.classList += ' movies__loading'

// GLOBAL MOVIES VARIABLE
let currentMovies = []


    // HANDLING THE SEARCH
function searchChange(event) {
    renderMovie(event.target.value)
    searchName.innerHTML = event.target.value
}

    //RENDERING MOVIES / CALLING API
async function renderMovie(searchTerm) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=c24b97b7&s=${searchTerm}`)
    const data = await response.json()
    currentMovies = data.Search;
    displayMovies(currentMovies)
    }

    // DISPLAYING MOVIES
    function displayMovies(movieList) {
         movieWrapper.innerHTML = movieList
         .slice(0, 6)
         .map((movie) => {
         return `<div class="movie">
            <figure class="movie__img--wrapper">
                <img class="movie__img" src="${movie.Poster}" alt="">
            </figure>
            <div class="movie__title">
                ${movie.Title}
            </div>
            <div class="movie__year">
                ${movie.Year}
            </div>
        </div>`;
    })
    .join("");
    }

    // SORTING MOVIES
    function sortChange(event) {
        const sortOption = event.target.value

        let sortedMovies = [...currentMovies]

        if (sortOption === "Newest") {
            sortedMovies.sort((a, b) => (b.Year) - (a.Year));
        }
        else if (sortOption === "Oldest") {
            sortedMovies.sort((a, b) => (a.Year) - (b.Year));
        }

        displayMovies(sortedMovies);
    }

 
 





