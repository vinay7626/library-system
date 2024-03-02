import {announcements}  from "./homeData";

function Announcements() {
    const getAnnouncements = announcements.map((announcement) => {
        return (
            <li>
                {announcement}
            </li>
        )
    })
    return (
        <div className="announcements">
            <h2>Announcements</h2>
            <p>Welcome to our library's website! Check out our latest updates and news.</p>
                <marquee behavior="scroll" direction="up" scrollamount="3">
                    <ul>
                    {getAnnouncements}
                    </ul>
                </marquee>
        </div>
    )
}

export default Announcements