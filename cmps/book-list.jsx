
import { BookPreview } from "./book-preview.jsx"

export function BookList({ books, deleteBook, selectBook }) {
    return <section className="book-list">
        {
            books.map(book => <div key={book.id} className='book'>
                {console.log(book.thumbnail)}
                <BookPreview book={book} />
                <div className="img">
                    <img src={book.thumbnail} alt="" />
                </div>
                <button onClick={() => selectBook(book.id)}>Book details</button>
                <button onClick={() => deleteBook(book.id)}>Remove book</button>
            </div>)
        }
    </section>
}