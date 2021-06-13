import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

const AllEvents = () => {
  const events = getAllEvents();  
  return (
    <div>
      <EventList events={events} />
      <EventsSearch/>
    </div>
  )
}

export default AllEvents;