
const CountryData = ({country,handleVisitedCountry,handleVisitedFlags }) => {
    const {name } = country ;
    return (
        <div>
            <p><small>country data : {name.common} </small></p>
        </div>
    );
};

export default CountryData;