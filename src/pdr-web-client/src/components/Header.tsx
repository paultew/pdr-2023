import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container>
        <NavbarBrand>User List PDR</NavbarBrand>
        <NavbarToggle aria-controls="main-nav" />
        <NavbarCollapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}
