import { Badge, Card, Col, Container, Row } from "react-bootstrap";

const BookDetailsCard = ({ book }) => {
	const coverSrc = book.coverId
		? `${process.env.REACT_APP_COVERS_API}/${book.coverId}-L.jpg`
		: "/no-cover.svg";
	return (
		<Container className="my-4">
			<Card className="book-details">
				<Row className="g-0">
					<Col xs={12} md={4}>
						<img
							className="book-details__cover"
							src={coverSrc}
							alt={book.title}
						/>
					</Col>
					<Col xs={12} md={8}>
						<Card.Body className="book-details__body">
							<h1 className="book-details__title">{book.title}</h1>
							<p className="book-details__author">{book.authorName}</p>
							<p className="book-details__date">
								Publish Date: {book.publishDate}
							</p>

							<h2 className="book-details__heading">Description</h2>
							<p className="book-details__description">{book.description}</p>

							<h2 className="book-details__heading">Subjects</h2>
							<div className="book-details__subjects">
								{book.subjects.map((subject) => {
									return (
										<Badge key={subject} bg="secondary" className="fw-normal">
											{subject}
										</Badge>
									);
								})}
							</div>
						</Card.Body>
					</Col>
				</Row>
			</Card>
		</Container>
	);
};

export default BookDetailsCard;
