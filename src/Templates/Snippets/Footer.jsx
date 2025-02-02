import Card from 'react-bootstrap/Card';

const Footer = () => { 
  return (
    <>
    <Card className="d-flex text-center" data-bs-theme="dark" >
   <Card.Body>
         <a className="px-3"href='#'>Login</a>
         <a className="px-3" href='#'>Home</a>
         <a className="px-3" href='#'>Requests</a>
         <a className="px-3" href='#'>Contact</a>
         <a className="px-3" href='#'>Browse Movies</a>
         <a className="px-3" href='#'>Language</a>        
        <Card.Subtitle className='align-items-center pt-4'>
            <p>Copyright &copy; Movies 2025.</p>
        </Card.Subtitle>
       
        </Card.Body>
    </Card>
    </>
  );
}

export default Footer;