import { books } from './searchData';
import bookcover from "../images/bookcover.png";
import { Link } from 'react-router-dom';

function Highlights() {
    const max = 6;
    let i=0;
    const getBooks = books.map((book) => {
        i++;
        while(i<=max){
            const randomNum = Math.floor((Math.random()*books.length))
        return (
            <Link to={`/book/${books[randomNum].id}`}>
            <div class="book">
                    <img src={bookcover} alt={book.title} />
                    <h3>{books[randomNum].title}</h3>
                    <p>{books[randomNum].author}</p>
                </div>
            </Link>
        )}
    })

    return (
        <>
        <h2>Featured Books</h2>
        <p>Explore some of our highlighted books and collections.</p>
        <div className="highlights">
                
                {getBooks}
        </div>
        </>
    )
}

export default Highlights