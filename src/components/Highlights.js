import { books } from './searchData';
import bookcover from "../images/bookcover.png";

function Highlights() {
    const max = 6;
    let i=0;
    const getBooks = books.map((book) => {
        i++;
        while(i<=max){
            const randomNum = Math.floor((Math.random()*books.length))
        return (
            <div class="book">
                    <img src={bookcover} alt={book.title} />
                    <h3>{books[randomNum].title}</h3>
                    <p>{books[randomNum].author}</p>
                </div>
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