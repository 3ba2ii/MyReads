import React from "react";
import "./App.css";

import BookShelfs from "./BookShelfs";
import SearchPage from "./SearchPage";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
	state = {
		apiBooksWithShelfs: [],
	};
	render() {
		return (
			<div className="app">
				<Route exact path="/" render={() => <BookShelfs />} />
				<Route exact path="/search" render={() => <SearchPage />} />
			</div>
		);
	}
}

export default BooksApp;
