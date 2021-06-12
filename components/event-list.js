import EventItem from './event-item';

const EventList = ({events}) => 
    (
        <ul>
            {events.map( event => (
                <EventItem 
                    title={event.title} 
                    image={event.image}
                    date={event.date}
                    location={event.location}
                    id={event.id}
                />))}
        </ul>
    );

export default EventList
