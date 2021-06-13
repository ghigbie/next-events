const EventsSearch = () => {
    const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return (
        <form>
            <div>
                <label htmlFor="year">Year</label>
                <select name="month" id="year">
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div>
                <label htmlFor="month">Month</label>
                <select name="month" id="month">
                {months.map((month,index) => <option value={index+1}>{month}</option>)}
                </select>
            </div>
        </form>
    )
}

export default events-search
