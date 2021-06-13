import styles from '../styles/Home.module.css'
import { getFeaturedEvents } from '../dummy-data';
import EventList from  './../components/events/event-list';

const Home = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <EventList events={featuredEvents} />
    </div>
  )
}

export default Home;