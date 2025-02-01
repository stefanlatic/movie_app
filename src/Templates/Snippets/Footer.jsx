import Card from 'react-bootstrap/Card';

const Footer = () => { 
  return (
    <Card className="d-flex text-center fixed-bottom" data-bs-theme="dark" >
      <Card.Body>
        <Card.Text className=''>
        <p className='d-inline'>Movies © 2025</p>
         <a className="px-3"href='#'>Login</a>
         <a className="px-3" href='#'>Home</a>
         <a className="px-3" href='#'>Requests</a>
         <a className="px-3" href='#'>Contact</a>
         <a className="px-3" href='#'>Browse Movies</a>
         <a className="px-3" href='#'>Language</a>
         
        </Card.Text>
        <Card.Text className='py-2'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </Card.Text>
      </Card.Body>
      
    </Card>
  );
}

export default Footer;