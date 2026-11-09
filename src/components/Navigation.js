import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Container>
				<Navbar.Brand as={Link} to="/">
					Open Library
				</Navbar.Brand>
				<Nav>
					<Nav.Link as={Link} to="/">
						Home
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navigation;
