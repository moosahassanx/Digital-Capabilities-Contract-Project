import { useState, useEffect } from 'react';

const UserDescription = (props) => {
    const [sectionArray, setSectionArray] = useState([]);

    useEffect(() => {
        setSectionArray(sectionArray)
    }, [sectionArray])


    return(
        <div>
            <p>testing user description component</p>
            <p>{sectionArray[1]}</p>
        </div>        
    )
}

export default UserDescription;