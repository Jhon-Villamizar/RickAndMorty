import React, { useContext, useEffect } from "react";
import ServiceContext from "../contexts/serviceContext";

const Card = () => {
    const service = useContext(ServiceContext);

    useEffect(() => {
        service.getService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const offset = (service.page-1) * 20;

    const data = () => {
      if(service.filter !== '') {
        service.allCharacters.map((item: any) => {
          if (item.name.toLowerCase().indexOf(service.filter)>-1) {
            return item
          }
        })
      } else {
        return service.allCharacters
      }
    }

    const currentPageData =  service.filter === ''? service.allCharacters
      .slice(offset, offset + 20)
      .map((item: any) => {
        return <p key={item.id}>{item.name}</p>
      }) : service.allCharacters.map((item: any) => {
        item.name.toLowerCase();
        if (item.name.toLowerCase().indexOf(service.filter)>-1) {
          return <p key={item.id}>{item.name}</p>
      }
      })

    return(
        <>
            <h1>Card</h1>

            {
              currentPageData
            }
        </>
    )
}

export default Card;
