import Button from './../ui/button';
import DateIcon from './../icons/date-icon';
import AddressIcon from './../icons/address-icon';
import ArrowRightIcon from './../icons/arrow-right-icon';
import classes from './event-item.module.css';

const EventItem  = props => {

    const {title, image, date, location, id} = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedAddress = location.replace(', ', '\n'); //replaces comma with new line

    return (
        <li className={classes.item}>
           <img 
            className={classes.image}
            src={"/" + image} 
            alt={title} 
            />
            <div>
                <div className={classes.content}>
                    <h2 >{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={`/events/${id}`}>
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <ArrowRightIcon/>
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;
