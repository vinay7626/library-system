import bookcover from '../images/bookcover.png';
import './BookDetails.css';
import { useParams } from 'react-router-dom';
import {books} from './searchData';

function BookDetails() {
    const { id } = useParams();
    console.log(id);
    const bookToDisplay = books.find((book) => {return book.id === parseInt(id)});
    console.log(bookToDisplay);
    return (
        <main>
    <div class="container">
        <div class="book-details">
            <h1>Book Details</h1>
            <div class="book-info">
                <div class="book-cover">
                    <img src={bookcover} alt="Book Cover" />
                </div>
                <div class="details">
                    <p class="title">Title: {bookToDisplay.title}</p>
                    <p>Author: {bookToDisplay.author}</p>
                    <p>Subject: {bookToDisplay.subject}</p>
                    <p>Summary: {bookToDisplay.summary}</p>
                    <p>Publication Year: {bookToDisplay.publicationYear}</p>
                    <p>Genre: {bookToDisplay.genre}</p>
                    <p>Language: {bookToDisplay.language}</p>
                    <p class="availability">Availability: {bookToDisplay.availibility}</p>
                    <p class="format">Format: {bookToDisplay.format}</p>
                </div>
            </div>
        </div>
    </div>
</main>
    )
}

export default BookDetails