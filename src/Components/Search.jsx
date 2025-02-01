import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Search = () => {
    return (
    <>
    <Form  className="bg-dark text-white py-3 d-flex-inline">
        <Container >
            <Form.Group className="mb-3" >
                <Form.Label>Movie title</Form.Label>
                <Form.Control type="text"  placeholder="Enter movie" />
            </Form.Group >
            <Button variant="outline-success" type="submit"  >
                Search
            </Button>
        </Container>
    </Form> 
    
    </>
)
}

export default Search;