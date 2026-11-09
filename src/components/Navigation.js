import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
	return (
		<Navbar bg="dark" data-bs-theme="dark">
			<Container>
				<Navbar.Brand href="/">Open Library</Navbar.Brand>
				<Nav>
					<Nav.Link href="/">Početna</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navigation;
