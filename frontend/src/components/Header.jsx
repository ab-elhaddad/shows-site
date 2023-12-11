import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Input from './Header/Input';

const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="py-0">
          <div className="title">Cinema</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Input />
      </Container>
    </Navbar>
  );
};

export default Header;
