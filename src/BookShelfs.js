import React, { Component } from "react";
import { Link } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";

class BookShelfs extends Component {
	state = {
		books: [],
	};
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState(() => ({
				books: books,
			}));
		});
	}

	onChange = (event) => {
		const id = event.target.id;
		const shelf = event.target.value;

		const changedBook = this.state.books
			.map((book) => {
				return book.id === id;
			})
			.indexOf(true);

		const newBooks = this.state.books;
		newBooks[changedBook]["shelf"] = shelf;
		this.setState({ books: newBooks });
		BooksAPI.update(id, shelf);
	};

	shelfRender(shelf) {
		return (
			<ol className="books-grid">
				{this.state.books.map(
					(book) =>
						book.shelf === "" + shelf && (
							<li key={book.id}>
								<div className="book">
									<div className="book-top">
										<div
											className="book-cover"
											style={{
												width: 128,
												height: 193,
												backgroundImage: `url(${book.imageLinks.thumbnail})`,
											}}
										/>
										<div className="book-shelf-changer">
											<select
												id={book.id}
												onChange={this.onChange}
												defaultValue={shelf}
											>
												<option value="move" disabled>
													Move to...
												</option>
												<option value="currentlyReading">
													Currently Reading
												</option>
												<option value="wantToRead">Want to Read</option>
												<option value="read">Read</option>
												<option value="none">None</option>
											</select>
										</div>
									</div>
									<div className="book-title">{book.title}</div>
									<div className="book-authors">{book.authors}</div>
								</div>
							</li>
						)
				)}
			</ol>
		);
	}
	upper_body() {
		return (
			<div class="upper-body">
				<nav class="row">
					<ul class="full-width">
						<div class="logo">
							<img
								src="https://i.ibb.co/g7LgHvj/Singaraja-Design-on-Instagram-A-quick-logo-concepts-for-library-Which-one-you-think-is-better-guys-The-subtle-one-1-or-the-obvious-one-2-2.jpg"
								alt=""
								srcset=""
								width="70%"
							/>
						</div>
						<li class="Home">
							<a href="#">Home</a>
						</li>
						<li class="About">
							<a href="#">About </a>
						</li>
						<li class="Category">
							<a href="#">Categories</a>
						</li>
						<li class="books">
							<a href="#">Books</a>
						</li>
						<li class="contacts">
							<a href="#">Contacts</a>
						</li>
					</ul>
				</nav>

				<img
					class="after-logo"
					src="https://i.ibb.co/8jK3szR/Screen-Shot-2020-05-19-at-12-13-16-PM.png"
					alt="logo"
					width="100%"
					height="100%"
				/>
				<div class="quotes">
					<p>
						“Think before you speak. Read before you think.” <br />
						<span>– Fran Lebowitz</span>
					</p>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="full-body">
				{this.upper_body()}
				<div className="list-books">
					<div className="list-books-content">
						<div>
							<div className="bookshelf">
								<h2 className="bookshelf-title">Currently Reading</h2>

								<div className="bookshelf-books">
									{this.shelfRender("currentlyReading")}
								</div>
							</div>
							<div className="bookshelf">
								<h2 className="bookshelf-title">Want to Read</h2>
								<div className="bookshelf-books">
									{this.shelfRender("wantToRead")}
								</div>
							</div>
							<div className="bookshelf">
								<h2 className="bookshelf-title">Read</h2>
								<div className="bookshelf-books">
									{this.shelfRender("read")}
								</div>
							</div>
						</div>
					</div>
					<div className="open-search">
						<Link to="/search">
							<button>Add a book</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default BookShelfs;
