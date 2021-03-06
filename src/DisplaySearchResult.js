import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";

import notFound from "./assets/No results - empty states.png";
import "./App.css";

class DisplaySearchResult extends Component {
	onChange = (event) => {
		const id = event.target.id;
		const shelf = event.target.value;
		BooksAPI.update(id, shelf);
	};
	apiRender() {
		return this.props.books.map((book) => (
			<li key={book.id}>
				<div className="book">
					<div className="book-top">
						<div
							className="book-cover"
							style={{
								width: 128,
								height: 193,

								backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
							}}
						/>

						<div className="book-shelf-changer">
							<select id={book.id} onChange={this.onChange} defaultValue="none">
								<option value="move" disabled>
									Move to...
								</option>
								<option value="currentlyReading">Currently Reading</option>
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
		));
	}

	render() {
		if (this.props.books.length) {
			return this.apiRender();
		} else {
			return (
				<img src={notFound} alt="Not Found :(" height="100%" width="70%" />
			);
		}
	}
}

export default DisplaySearchResult;
