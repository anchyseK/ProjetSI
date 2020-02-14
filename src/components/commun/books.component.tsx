/* https://fr.reactjs.org/docs/hooks-state.html */
import React, { useEffect } from "react";
import * as Book from "../../api/book"
import { IBook } from "../../../backend/src/models/book";

export default function Books() {
    const [books, setBooks] = React.useState<IBook[]>([]);

    useEffect(() => {
        Book.GetBooks()
            .then(res => {
                const books = res;
                setBooks(books);
            })
    });

    return (
        <div>
            <ul>
                { books.map(book => <li>{book.title}</li>)}
            </ul>
        </div>
    );
}