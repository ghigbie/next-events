import EventItem from './event-item';
import classes from './event-list.module.css';

const EventList = ({events}) => 
    (
        <ul className={classes.list}>
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
