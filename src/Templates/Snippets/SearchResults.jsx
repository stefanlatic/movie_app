import MovieCard from "./MovieCard";
import Container from "react-bootstrap/Container";

const SearchResults = ({movies}) => {   
    return (
        <>
    <div className="bg-dark" >
       <Container className="d-flex flex-wrap">
       { movies.map(movie => {
            return <MovieCard movie={movie} /> 
       })}
      </Container>
        </div>
       
        </>
    )
}

export default SearchResults;