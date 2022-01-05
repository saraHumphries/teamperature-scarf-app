import {} from 'react-bootstrap';


import DateTemp from '../DateTemp';

const LandingPage = () => {

    const getLastSevenDays = () => {
        const lastSevenDays = [];
        for (let i=0; i<7; i++) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            lastSevenDays.push(dateIntoString(d));
            
        };
        
        
        const dateTemps = lastSevenDays.map((date, index) => {
            return <DateTemp key={index} date={date}></DateTemp>
        })

        return dateTemps;
    };

    const dateIntoString = (d) => {
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();
        if (month.length < 2) 
            {month = '0' + month;}
        if (day.length < 2) 
            {day = '0' + day;}
        const date = [year,month,day].join('-');
        return date;
    };


    return (
        <div className='container p-4'>
            
            
            {getLastSevenDays()}
        </div>
    )
};

export default LandingPage;