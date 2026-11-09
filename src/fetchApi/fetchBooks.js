import axios from "axios";

export const fetchBooks = async () => {
	const response = await axios.get(
		`${process.env.REACT_APP_OPEN_LIBRARY_API}/subjects/programming.json`,
		{ params: { limit: 12 } },
	);
	return response.data.works.map((book) => {
		return {
			id: book.key.replace("/works/", ""),
			title: book.title,
			authors: book.authors.map((author) => {
				return author.name;
			}),
			year: book.first_publish_year,
			coverId: book.cover_id,
		};
	});
};

export const fetchSearchedBooks = async (searchTerm, searchBy, language) => {
	const response = await axios.get(
		`${process.env.REACT_APP_OPEN_LIBRARY_API}/search.json`,
		{
			params: {
				[searchBy]: searchTerm,
				limit: 12,
				language: language !== "" ? language : undefined,
			},
		},
	);

	return response.data.docs.map((book) => {
		return {
			id: book.key.replace("/works/", ""),
			title: book.title,
			authors: book.author_name || [],
			year: book.first_publish_year,
			coverId: book.cover_i,
		};
	});
};
