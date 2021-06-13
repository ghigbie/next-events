import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/event-list'

const AllEvents = () => {
  const events = getAllEvents();  
  return (
    <div>
      <EventList events={events} />
    </div>
  )
}

export default AllEvents;