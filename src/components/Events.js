import {events} from "./homeData";

function Events() {
    const getEvents = events.map((event) => {
        return (
            <li>{event.type} - {event.description} <br /> {event.date}</li>
        )
    })

    return (
        <div className="events">
            <h2>Upcoming Events</h2>
            <p>Stay tuned for our exciting upcoming events and activities.</p>
            <marquee behavior="scroll" direction="up" scrollamount="3">
                    <ul>
                    {getEvents}
                    </ul>
                </marquee>
            </div>
    )
}

export default Events