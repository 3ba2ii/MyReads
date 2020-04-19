import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BookShelfs extends Component {
	state = {
		books: [],
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
		shelfPerBook: [],
	};
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState(() => ({
				books: books,
			}));
			this.state.books.map((book) => {
				this.setState((prevState) => {
					return {
						shelfPerBook: prevState.shelfPerBook.concat({
							id: book.id,

							shelf: book.shelf,
						}),
					};
				});
			});
		});
	}

	onChange = (event) => {
		const id = event.target.id;
		const shelf = event.target.value;

		this.setState((prevState) => {
			return {
				books: (prevState.books[id] = { id: id, shelf: shelf }),
			};
		});
		BooksAPI.update(id, shelf);
	};

	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>

				<div className="list-books-content">
					<div>
						{console.log(this.state.shelfPerBook)}
						<div className="bookshelf">
							<h2 className="bookshelf-title">Currently Reading</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{this.state.books.map(
										(book) =>
											book.shelf === "currentlyReading" && (
												<li key={book.id}>
													<div className="book">
														<div className="book-top">
															<div
																className="book-cover"
																style={{
																	width: 128,
																	height: 193,
																	backgroundImage: `url(${
																		book.imageLinks.thumbnail
																	})`,
																}}
															/>
															<div className="book-shelf-changer">
																<select
																	id={book.id}
																	onChange={this.onChange}
																	defaultValue={"currentlyReading"}
																>
																	<option value="move" disabled>
																		Move to...
																	</option>
																	<option value="currentlyReading">
																		Currently Reading
																	</option>
																	<option value="wantToRead">
																		Want to Read
																	</option>
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
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{this.state.books.map(
										(book) =>
											book.shelf === "" + "wantToRead" && (
												<li key={book.id}>
													<div className="book">
														<div className="book-top">
															<div
																className="book-cover"
																style={{
																	width: 128,
																	height: 193,
																	backgroundImage: `url(${
																		book.imageLinks.thumbnail
																	})`,
																}}
															/>
															<div className="book-shelf-changer">
																<select
																	id={book.id}
																	onChange={this.onChange}
																	defaultValue={"wantToRead"}
																>
																	<option value="move" disabled>
																		Move to...
																	</option>
																	<option value="currentlyReading">
																		Currently Reading
																	</option>
																	<option value="wantToRead">
																		Want to Read
																	</option>
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
							</div>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{Object.values(this.state.books).map(
										(book) =>
											book.shelf === "" + "read" && (
												<li key={book.id}>
													<div className="book">
														<div className="book-top">
															<div
																className="book-cover"
																style={{
																	width: 128,
																	height: 193,
																	backgroundImage: `url(${
																		book.imageLinks.thumbnail
																	})`,
																}}
															/>
															<div className="book-shelf-changer">
																<select
																	id={book.id}
																	onChange={this.onChange}
																	defaultValue={"read"}
																>
																	<option value="move" disabled>
																		Move to...
																	</option>
																	<option value="currentlyReading">
																		Currently Reading
																	</option>
																	<option value="wantToRead">
																		Want to Read
																	</option>
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
		);
	}

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
}

export default BookShelfs;
