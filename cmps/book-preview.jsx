
export function BookPreview({ book }) {
    const { listPrice } = book

    return <article className="book-preview">
        <h2>Book name: {book.title}</h2>
        <h4>Book description: {book.description}</h4>
        <h4>Book price: {listPrice.amount}</h4>
    </article>
}