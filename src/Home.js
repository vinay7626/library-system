import Announcements from './components/Announcements';
import Events from './components/Events';
import Highlights from './components/Highlights';
import './Home.css';


function Home() {
  return (
    <main>
        <section class="overview">
            <Announcements />
            <Events />
            <Highlights />
        </section>
    </main>
  );
}

export default Home;
