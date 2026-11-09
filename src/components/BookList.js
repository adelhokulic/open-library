import { Col, Row } from "react-bootstrap";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
	return (
		<Row xs={1} sm={2} md={3} lg={4} className="g-4">
			{books.map((book) => {
				return (
					<Col key={book.id}>
						<BookCard book={book} />
					</Col>
				);
			})}
		</Row>
	);
};

export default BookList;
