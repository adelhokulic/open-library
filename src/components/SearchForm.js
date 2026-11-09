import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SearchForm = ({ onSearchBooks }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchBy, setSearchBy] = useState("title");
	const [language, setLanguage] = useState("");
	const searchBooks = (e) => {
		e.preventDefault();
		onSearchBooks(searchTerm.trim(), searchBy, language);
	};
	return (
		<Form onSubmit={searchBooks} className="mb-4">
			<Row className="g-2">
				<Col xs={12} lg={6}>
					<Form.Control
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						type="search"
						placeholder="Search books..."
					/>
				</Col>
				<Col xs={6} lg={2}>
					<Form.Select
						value={searchBy}
						onChange={(e) => setSearchBy(e.target.value)}
						aria-label="Search by"
					>
						<option value="title">Title</option>
						<option value="author">Author</option>
					</Form.Select>
				</Col>
				<Col xs={6} lg={2}>
					<Form.Select
						value={language}
						onChange={(e) => setLanguage(e.target.value)}
						aria-label="Language"
					>
						<option value="">All languages</option>
						<option value="eng">English</option>
						<option value="ger">German</option>
						<option value="fre">French</option>
						<option value="spa">Spanish</option>
						<option value="ita">Italian</option>
					</Form.Select>
				</Col>
				<Col xs={12} lg={2}>
					<Button type="submit" variant="dark" className="w-100">
						Search
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default SearchForm;
