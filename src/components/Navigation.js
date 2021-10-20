import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand as={NavLink} to="/">Gestor de Tareas</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-nabvar-nav">
                <Nav className="mr-auto">   
                    <Nav.Link as={NavLink} to="/projects">Proyectos</Nav.Link>
                    <NavDropdown title="Admin">
                        <NavDropdown.Item as={NavLink} to="/admin/users">Usuarios</NavDropdown.Item>
                    </NavDropdown>    
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to="/login">Iniciar Sesion</Nav.Link>
                    <Nav.Link as={NavLink} to="/register">Registrarse</Nav.Link>
                    <Nav.Link as={NavLink} to="/account">Mi Cuenta</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}