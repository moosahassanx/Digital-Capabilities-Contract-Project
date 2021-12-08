// import react and community library
import React from 'react';
import ProgressBar from 'react-customizable-progressbar';

const ResultWheel = (props) => {
    
    return(

        // generating the circle with properties
        <ProgressBar
            radius={100}
            progress={(props.score/42)*100}
            strokeWidth={4}
            strokeColor="indianred"
            trackStrokeWidth={4}
            pointerRadius={8}
            pointerStrokeWidth={5}
            pointerStrokeColor="indianred"
            initialAnimation={true}
            transition="1.5s ease 1.5s"
            trackTransition="0s ease"
            className='centralise-wheel'
        >

            {/* labelling the circle and calculated percentage */}
            <div className="indicator">
                <p className='indicator-section'>{props.title}</p>
                <p>{Math.round((props.score/42)*100)}%</p>
            </div>
        </ProgressBar>
    )
}

export default ResultWheel;