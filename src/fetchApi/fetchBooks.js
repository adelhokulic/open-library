import axios from "axios";

export const fetchBooks = async () => {
	const response = await axios.get(
		`${process.env.REACT_APP_OPEN_LIBRARY_API}/subjects/programming.json`,
		{ params: { limit: 10 } },
	);
    return response.data;
};
