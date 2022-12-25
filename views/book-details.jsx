
export function BookDetails({ book, goBack }) {
    return <section>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <div><button onClick={goBack}>Go Back</button></div>
    </section>
}