import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";

import { Link } from "react-router-dom";
import DisplaySearchResult from "./DisplaySearchResult";

class SearchPage extends Component {
	state = {
		query: "",
		wantedBooks: [],
	};

	getBooksfromAPI = () => {
		BooksAPI.search(this.state.query).then((books) => {
			if (this.state.query === "") {
				this.setState(() => ({
					wantedBooks: [],
				}));
			} else {
				this.setState(() => ({
					wantedBooks: books,
				}));
			}
		});
	};

	handleSearch = (event) => {
		this.setState({
			query: event.target.value,
		});

		this.state.query !== "" && this.getBooksfromAPI();
	};

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">
						Close
					</Link>
					<div className="search-books-input-wrapper">
						{/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
						<nav class="row">
							<ul class="full-width">
								<div class="logo">
									<img
										src="https://i.ibb.co/g7LgHvj/Singaraja-Design-on-Instagram-A-quick-logo-concepts-for-library-Which-one-you-think-is-better-guys-The-subtle-one-1-or-the-obvious-one-2-2.jpg"
										alt="logo"
										srcset=""
									/>
								</div>
							</ul>
						</nav>
						<div className="search-field">
							<input
								type="text"
								placeholder="Search by title or author"
								value={this.state.query}
								onChange={this.handleSearch}
							/>
						</div>
					</div>
				</div>

				<div className="search-books-results">
					<ol className="books-grid">
						<DisplaySearchResult books={this.state.wantedBooks} />
					</ol>
				</div>
			</div>
		);
	}
}

export default SearchPage;
