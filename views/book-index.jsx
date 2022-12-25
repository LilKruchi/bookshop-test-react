const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/book-list.jsx"
import { BookDetails } from "./book-details.jsx"
import { BookFilter } from "../cmps/book-filter.jsx"

export function BookIndex() {

    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(books => {
            setBooks(books)
        })
    }
    console.log(books);
    function removeBook(bookId) {

        bookService.remove(bookId).then(() => {
            const filteredBooks = books.filter(book => book.id !== bookId)
            setBooks(filteredBooks)
        })
    }

    function selectBook(bookId) {

        bookService.get(bookId).then(book => {
            setSelectedBook(book)
        })
    }

    function setFilter(FilterObj) {
        setFilterBy(FilterObj)
    }
    return <div className="books-container">
        <h1>Book shop!</h1>

        {!selectedBook &&
            <div>
                <BookFilter setFilter={setFilter} />
                <BookList books={books} deleteBook={removeBook} selectBook={selectBook} />
            </div>
        }

        {selectedBook &&
            <BookDetails book={selectedBook} goBack={() => setSelectedBook(null)} />}
    </div>
}