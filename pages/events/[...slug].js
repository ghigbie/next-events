import { useRouter } from 'next/router';


const FilteredEventPage = () => {
    const router = useRouter();
    const filterData = router.query.slug;

    if(filterData){
        return (<p className='center'>Loading...</p>);
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    return (
        <div>
            <h1>Filtered Events Page</h1>
        </div>
    )
}

export default FilteredEventPage
