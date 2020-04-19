import React from "react";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import BookShelfs from "./BookShelfs";
import SearchPage from "./SearchPage";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
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
