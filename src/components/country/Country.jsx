import { useState } from 'react';
import './country.css'
import CountryDetailed from '../countryDetailed/CountryDetailed';
const Country = ({ country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${ visited ?'visited' : 'non-visited' }`}>

            <h2 style={{color : visited? 'Purple' : 'orange'}}>{name.common}</h2>

            <img style={{
                width : '100px',
                height : '120px'
            }} src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p> Area :{area}</p>
            <p><small>Code : {cca3}</small></p>

            <button style={{backgroundColor : 'steelblue'}} onClick={() => handleVisitedCountry(country)}>Mark Visited</button> <br />

            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add visitd flag</button> <br />

            <button style={{backgroundColor : 'orange'}} onClick={handleVisited}>
                {visited? 'visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'i want to visit'}
            <hr />

            <CountryDetailed 
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            >
            </CountryDetailed>
        </div>
    );
};

export default Country;