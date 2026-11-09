import axios from "axios";

export const books_per_page = 12;

export const fetchHomeBooks = async (page) => {
	const response = await axios.get(
		`${process.env.REACT_APP_OPEN_LIBRARY_API}/subjects/programming.json`,
		{ params: { limit: books_per_page, offset: (page - 1) * books_per_page } },
	);
	return {
		books: response.data.works.map((book) => {
			return {
				id: book.key.replace("/works/", ""),
				title: book.title,
				authors: book.authors.map((author) => {
					return author.name;
				}),
				year: book.first_publish_year,
				coverId: book.cover_id,
			};
		}),
		total: response.data.work_count,
	};
};

export const fetchSearchedBooks = async (
	searchTerm,
	searchBy,
	language,
	page,
) => {
	const response = await axios.get(
		`${process.env.REACT_APP_OPEN_LIBRARY_API}/search.json`,
		{
			params: {
				[searchBy]: searchTerm,
				limit: books_per_page,
				language: language !== "" ? language : undefined,
				page: page,
			},
		},
	);

	return {
		books: response.data.docs.map((book) => {
			return {
				id: book.key.replace("/works/", ""),
				title: book.title,
				authors: book.author_name || [],
				year: book.first_publish_year,
				coverId: book.cover_i,
			};
		}),
		total: response.data.numFound,
	};
};
