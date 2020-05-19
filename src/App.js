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
							Lⅈbrary © 2020, Prototype of Library Website for Library
							Management Software Research Paper,
							<br /> Represented To Dr. <span>Amani Sarhan.</span>
							<br />
							<br />
							Developed by Ahmed Ghonem, Ali El-Samadony, Abdelrahman El-Hitamy,
							Islam Metwally. <br /> <br />
							Website Code is Available on The Github Repository Below.
						</p>

						<p>
							<a
								href="https://github.com/3ba2ii/Library-Managment-Software.git
g"
								target="_blank"
							>
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
