import { useRef } from 'react';
import Button from '../ui/button';
import classes from './events-search.module.css'

const EventsSearch = ({ onSearch }) => {
    const yearInputRef = useRef();
    const monthInputRef = useRef();
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const submitHandler = event => {
        event.preventDefault();
        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;
        onSearch(selectedYear, selectedMonth);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.controls}>
             <div className={classes.control}>
                <label htmlFor="year">Year</label>
                <select name="year" id="year" ref={yearInputRef}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor="month">Month</label>
                <select name="month" id="month" ref={monthInputRef}>
        {months.map((month,index) => <option key={index} value={index+1}>{month}</option>)}
                </select>
            </div>
            <Button>Find Events</Button>
        </form>
    )
}

export default EventsSearch;
