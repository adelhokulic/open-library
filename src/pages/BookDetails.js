import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBookDetails } from "../fetchApi/fetchBooks";

const BookDetails = () => {
	const params = useParams();

	useEffect(() => {
		const response = async () => {
			const data = await fetchBookDetails(params.id);
			console.log(data);
		};
		response();
	}, [params.id]);

	return <h1>{params.id}</h1>;
};

export default BookDetails;
