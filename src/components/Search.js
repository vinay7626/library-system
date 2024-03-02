import './Search.css';
import { useState } from 'react';
import { books } from "./searchData";
import bookcover from '../images/bookcover.png';

function Search() {

    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [subject,setSubject] = useState("");
    const [keywords,setKeywords] = useState([]);
    const [year,setYear] = useState("");
    const [genre,setGenre] = useState("");
    const [lang,setLang] = useState("");
    const [avail,setAvail] = useState("");
    const [format,setFormat] = useState("");

    function matchSearch(book){
        return (book.title === title || book.author===author || book.subject === subject || book.publicationYear == year || book.genre === genre || book.language === lang || book.availability === avail || book.format === format)
    }
    const [resultBooks,setResultBooks] = useState([]);
    const searchBooksBy = (title,author,subject,keywords,year,genre,lang,avail,format) => {
        const result = books.filter(matchSearch);
        return result;
    }

    const searchSubmit = (event) => {
        event.preventDefault();
        console.log(subject);
        const books1 = searchBooksBy(title,author,subject,keywords,year,genre,lang,avail,format);
        setResultBooks(books1);
    }

    const displayBooks = resultBooks.map((book) => {
        // console.log(book.title);
        return (
            <a href="#">
        <div class="searchbook">
            <img src={bookcover} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <small>{book.summary}</small>
        </div>
        </a>
        )
    })

    return (
        <>
        <h1>Search</h1>
        <form onSubmit={searchSubmit}>
            <input type="text" name="title" placeholder="Title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
            <input type="text" name="author" placeholder="Author" value={author} onChange={(e) => {setAuthor(e.target.value)}}/>
            <input type="text" name="subject" placeholder="Subject" value={subject} onChange={(e) => {setSubject(e.target.value)}}/>
            <input type="text" name="keywords" placeholder="Keywords(seperate with ,)" onChange={(e) => {setKeywords(e.target.value.split(","))}} />

            <h2>Advanced Search</h2>
            <input type="text" name="publication_year" placeholder="Publication Year" value={year} onChange={(e) => {setYear(e.target.value)}}/>
            <input type="text" name="genre" placeholder="Genre" value={genre} onChange={(e) => {setGenre(e.target.value)}}/>
            <input type="text" name="language" placeholder="Language" value={lang} onChange={(e) => {setLang(e.target.value)}}/>
            <select name="availability" onChange={(e) => {setAvail(e.target.value)}}>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
            </select>
            <select name="format" onChange={(e) => {setFormat(e.target.value)}}>
                <option value="print">Print</option>
                <option value="digital">Digital</option>
            </select>

            <button type="submit">Search</button>
        </form>
        <div className="searchresults">
            {displayBooks}
        </div>

        </>
    )
}
export default Search