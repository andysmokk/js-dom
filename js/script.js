import movies from "../data/data.json" assert { type: "json" };

const movieList = document.querySelector(".list-movie");
const movieBox = document.querySelector(".movie-box");

const onClick = ({ target }) => {
  if (target.nodeName !== "BUTTON") {
    return;
  }

  const currentMovie = movies.filter((el) => target.id === el.imdbID);

  const movieInfo = `<div class="img-box">
                          <img class="img" src=${currentMovie[0].Poster} alt="poster">
                       </div>
                       <div class="description-box">
                          <p class="description-text"> ${currentMovie[0].Title}</p>
                          <p class="description-text">IMDB: ${currentMovie[0].imdbRating}</p>
                          <p class="description-text">Year: ${currentMovie[0].Year}</p>
                          <p class="description-text">Awards: "${currentMovie[0].Awards}"</p>
                          <p class="description-text">Box Office: ${currentMovie[0].BoxOffice}</p>
                       </div>
                       <div class="plot-box"></div>`;
  //   const markupMovie = movies.map(
  //     (el) => {
  //       if (e.target.id === el.imdbID) {
  //         currentMovie = el;
  //       }
  //       return currentMovie;
  //     }
  //     //   `<div class=""><img src=${el.Poster} alt=""></div>`
  //   );
  movieBox.innerHTML = movieInfo;
};

movieList.addEventListener("click", onClick);

const markupMoviesList = (arr) => {
  return arr
    .map(
      ({ Title, imdbID }) =>
        `<li class="list-movie-item"><button id=${imdbID} class="list-movie-btn" onclick="() => onClick()">${Title}</button></li>`
    )
    .join("");
};

// const markupMovieBox = (arr) => {
//   return arr
//     .map(({ Poster }) => `<div class=""><img src=${Poster} alt=""></div>`)
//     .join("");
// };

movieList.innerHTML = markupMoviesList(movies);
// movieBox.innerHTML = markupMovieBox(movies);
