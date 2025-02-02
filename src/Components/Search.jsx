import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import SearchResults from "../Templates/Snippets/SearchResults";
import { SearchContext } from "./SearchContext";
import { useContext } from "react";
import axios from "axios";

const Search = () => {
    const { movies, setMovies, searchTerm, setSearchTerm } = useContext(SearchContext);
    
    const searchMovies = () => {
        axios.get(  `${process.env.REACT_APP_OMDBAPI_URL}?s="${searchTerm}"&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`)
      .then(response => setMovies(response.data.Search))
      .catch(error => console.log(error))
    }
    return (
    <>
    <Form  className="bg-dark text-white py-3 d-flex-inline">
        <Container className="p-4" >
            <Form.Group className="mb-3" >
                <Form.Label>Movie title</Form.Label>
                <Form.Control onInput={(e) => setSearchTerm(e.currentTarget.value)} type="text"  placeholder="Enter movie" />
            </Form.Group >
            <Button variant="outline-success" type="button" onClick={searchMovies} >
                Search
            </Button>
        </Container>
    </Form> 
    <SearchResults movies={movies}/>
    </>
)
}

export default Search;