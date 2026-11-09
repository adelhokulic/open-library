import { Spinner } from "react-bootstrap";

const Loader = () => {
	return (
		<div className="page-loader" role="status">
			<Spinner animation="border" className="page-loader__spinner" />
			<p className="page-loader__text">Loading...</p>
		</div>
	);
};
export default Loader;
