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
				<footer class="copy-right">
					<div class="footer" />
					<div className="footer-2">
						<p>
							<a href="https://github.com/3ba2ii/MyReads" target={"_blank"}>
								<img
									src="https://i.ibb.co/qD3bHvY/github-logo.png"
									alt="Twitter."
								/>
							</a>
						</p>
					</div>
				</footer>
			</div>
		);
	}
}

export default BooksApp;
