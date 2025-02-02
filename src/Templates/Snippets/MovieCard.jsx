

const MovieCard = ({movie}) => {
    return(
        <>

        <div className="col-3 p-2 text-white">
        <img src={movie.Poster}   className="w-100"  />
        <h2>     {movie.Title}</h2>
        <p>      {movie.Year}</p>
        </div>

        </>
    )
}

export default MovieCard;