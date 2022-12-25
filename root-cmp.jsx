const { useState } = React

import { Home } from "./views/home.jsx"
import { AboutUs } from "./views/about-us.jsx"
import { BookIndex } from "./views/book-index.jsx"

export function App() {
    const [currPage, setCurrPage] = useState('books')

    console.log(currPage);
    return <section className="app">
        <header className="app-header">
            <h1>My App</h1>
            <a href="#" onClick={() => setCurrPage('home')}>Home</a> |
            <a href="#" onClick={() => setCurrPage('books')}>Books</a> |
            <a href="#" onClick={() => setCurrPage('about')}>About</a>
        </header>
        <main>
            {currPage === 'home' && <Home />}
            {currPage === 'books' && <BookIndex />}
            {currPage === 'about' && <AboutUs />}
        </main>
    </section>
}