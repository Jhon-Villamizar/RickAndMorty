import React, { useContext, useEffect } from "react";
import ServiceContext from "../contexts/serviceContext";

const Card = () => {
    const service = useContext(ServiceContext);

    useEffect(() => {
        service.getService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <>
            <h1>Card</h1>
            {
                service.characters? service.characters.map((item: any) => {
                    item.name.toLowerCase();
                    if(service.filter !== '') {
                        console.log('primer filter');
                        
                        if (item.name.toLowerCase().indexOf(service.filter)>-1) {
                            return <p key={item.id}>{item.name}</p>
                        }
                    } else {
                        return <p key={item.id}>{item.name}</p>
                    }
                }) : null
            }
        </>
    )
}

export default Card;