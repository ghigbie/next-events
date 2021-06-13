import React from 'react';
import EventList from './../../components/event-list';
import { getFeaturedEvents } from '../../dummy-data';


const List = () => {

     const featuredEvents = getFeaturedEvents();
    return (
        <div>
            <EventList events={featuredEvents} />
        </div>
    )
}

export default List
