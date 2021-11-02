import React, { useContext, useEffect, useState } from "react";
import ServiceContext from "../contexts/serviceContext";

const Card = () => {
  const service = useContext(ServiceContext);
  const [dataEdit, setDataEdit] = useState(false);

  useEffect(() => {
    service.getService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const edit = (item: any) => {
      setDataEdit(!dataEdit)
      item.flag = dataEdit;
  }

  const editName = (value: any, currentItem: any) => {
    currentItem.name.first = value;
  }
  const editLastName = (value: any, currentItem: any) => {
    currentItem.name.last = value;
  }
  const editEmail = (value: any, currentItem: any) => {
    currentItem.email = value;
  }
  const editCell = (value: any, currentItem: any) => {
    currentItem.cell = value;
  }
  const editCity = (value: any, currentItem: any) => {
    currentItem.location.city = value;
  }
  const editState = (value: any, currentItem: any) => {
    currentItem.location.state = value;
  }

  const sortData = service.sort? [...service.allCharacters].sort((a, b) => (a.name.first > b.name.first ? 1 : a.name.first < b.name.first ? -1 : 0)) : [...service.allCharacters].sort((b, a) => (a.name.first > b.name.first ? 1 : a.name.first < b.name.first ? -1 : 0));
  const data = service.sort === null? [...service.allCharacters] : sortData;

  const currentPageData =
    service.filter === ""
      ? data.map((item: any)=> {
          return (
            <div className="card" key={item.cell}>
                <div className="header-card">
                  <span><i className="far fa-edit" onClick={() => edit(item)}></i></span>
                    <h1 className={!item.flag? 'show' : 'none'} title={item.name.first}>{item.name.first} {item.name.last}</h1>
                    <div className={item.flag? 'show' : 'none'}>
                      <input placeholder={'Name: '+item.name.first} onChange={(event) => {editName(event.target.value, item)}}/>
                      <input placeholder={'Lastname: '+item.name.last} onChange={(event) => {editLastName(event.target.value, item)}}/>
                    </div>
                </div>
                <div className="body-card">
                  <div className="image-content">
                    <img
                    src={item.picture.large}
                    alt={item.name.first}
                  />
                  </div>
                  <div className="container__text">
                    <div className={!item.flag? 'container__text__timing show' : 'container__text__timing none'}>
                      <div className="container__text__timing_time">
                        <p>{item.email}</p>
                      </div>
                      <div className="container__text__timing_time">
                        <p>{item.cell}</p>
                      </div>
                      <div className="container__text__timing_time">
                        <p >{item.location.city}, {item.location.state}</p>
                      </div>
                    </div>
                    <div className={item.flag? 'container__text__input show' : 'container__text__input none'}>
                      <div className="input-text">
                        <input placeholder={'Email: '+item.email} onChange={(event) => {editEmail(event.target.value, item)}}/>
                      </div>
                      <div className="input-text">
                        <input placeholder={'CellPhone: '+item.cell} onChange={(event) => {editCell(event.target.value, item)}}/>
                      </div>
                      <div className="input-text">
                        <input placeholder={'City: '+item.location.city} onChange={(event) => {editCity(event.target.value, item)}}/>
                        <input placeholder={'State: '+item.location.state} onChange={(event) => {editState(event.target.value, item)}}/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          );
        })
      // eslint-disable-next-line array-callback-return
      : data.map((item: any) => {
          if (item.name.first.toLowerCase().indexOf(service.filter) > -1) {
            return (
              <div className="card" key={item.cell}>
                <div className="header-card">
                  <span><i className="far fa-edit" onClick={() => edit(item)}></i></span>
                    <h1 className={!item.flag? 'show' : 'none'} title={item.name.first}>{item.name.first} {item.name.last}</h1>
                    <div className={item.flag? 'show' : 'none'}>
                      <input placeholder={'Name: '+item.name.first} onChange={(event) => {editName(event.target.value, item)}}/>
                      <input placeholder={'Lastname: '+item.name.last} onChange={(event) => {editLastName(event.target.value, item)}}/>
                    </div>
                </div>
                <div className="body-card">
                  <div className="image-content">
                    <img
                    src={item.picture.large}
                    alt={item.name.first}
                  />
                  </div>
                  <div className="container__text">
                    <div className={!item.flag? 'container__text__timing show' : 'container__text__timing none'}>
                      <div className="container__text__timing_time">
                        <p>{item.email}</p>
                      </div>
                      <div className="container__text__timing_time">
                        <p>{item.cell}</p>
                      </div>
                      <div className="container__text__timing_time">
                        <p >{item.location.city}, {item.location.state}</p>
                      </div>
                    </div>
                    <div className={item.flag? 'container__text__input show' : 'container__text__input none'}>
                      <div className="input-text">
                        <input placeholder={'Email: '+item.email} onChange={(event) => {editEmail(event.target.value, item)}}/>
                      </div>
                      <div className="input-text">
                        <input placeholder={'CellPhone: '+item.cell} onChange={(event) => {editCell(event.target.value, item)}}/>
                      </div>
                      <div className="input-text">
                        <input placeholder={'City: '+item.location.city} onChange={(event) => {editCity(event.target.value, item)}}/>
                        <input placeholder={'State: '+item.location.state} onChange={(event) => {editState(event.target.value, item)}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                );
          }
        });

  return (
    <div>
      <h1 className="title">User Generator API</h1>
      <div className="card-container">
        {currentPageData}
      </div>
    </div>
  );
};

export default Card;

