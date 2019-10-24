import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach',
        iconName: 'sun'
    },
    winter: {
        text:'Brrr, it\'s chilly out here!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]; // return our object {text, iconName}

    // console.log(season);

    return ( 
        <div>
            <i className={`icon-right massive ${iconName} icon`} />
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1> 
            <i className={`icon-right massive ${iconName} icon`}/>
            <i className={`icon-left massive ${iconName} icon`} />
        </div>
     );
}
 
export default SeasonDisplay;