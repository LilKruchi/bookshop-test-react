import { utilService } from "./util.service.js"
import { storageService } from "./async-storage.service.js"
import bookData from '../data/bookData.js'
const BOOK_KEY = 'booksDB'

_createBooks()

export const bookService = {
    query,
    get,
    getEmptyBook,
    remove,
    getDefaultFilter,

}

function query(filterBy = getDefaultFilter()) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.name) {
                const regex = new RegExp(filterBy.name, 'i')
                books = books.filter(book => regex.test(book.title))
            }

            if (filterBy.price) {
                books = books.filter(book => {
                    const { listPrice } = book
                    return listPrice.amount >= filterBy.price
                })
            }

            return books
        })
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function getEmptyBook(title, description, thumbNail = '', price, isOnSale = false) {
    return { id: '', title, desc: description, thumbNail, listPrice: { amount: price, currencyCode: 'USD', isOnSale } }
}

function getDefaultFilter() {
    return { name: '', price: '' }
}

function _createBooks() {

    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = bookData

        utilService.saveToStorage(BOOK_KEY, books)
    }
}


function _createBook(name, desc, thumbN, price, isOnSale) {
    const book = getEmptyBook(name, desc, thumbN, price)
    book.id = utilService.makeId()
    return book
}