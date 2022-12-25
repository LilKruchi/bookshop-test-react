import { bookService } from "../services/book.service.js";

const { useState, useEffect } = React


export function BookFilter({ setFilter }) {
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        setFilter(filterBy)
    }, [filterBy])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterBy((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        setFilter(filterBy)
    }
    return <section>
        <form onSubmit={onSubmitFilter}>

            <label htmlFor="book-name">Filter by name: </label>
            <input type="text"
                id="book-name"
                name="name"
                placeholder="Book name"
                onChange={handleChange} />

            <label htmlFor="book-price">Filter by price: </label>
            <input type="number"
                id="book-price"
                name="price"
                placeholder="Book price"
                onChange={handleChange}
                min={0} />

        </form>
    </section >
}