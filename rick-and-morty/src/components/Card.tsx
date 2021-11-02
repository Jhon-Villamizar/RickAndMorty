import { link } from "fs";
import React, { useContext, useEffect, useState } from "react";
import ServiceContext from "../contexts/serviceContext";

const Card = () => {
  const service = useContext(ServiceContext);
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState(0);

  useEffect(() => {
    service.getService();
    if(service.sort) {

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service.filter]);

  const offset = (service.page - 1) * 20;
  const sortData = service.sort? [...service.allCharacters].sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)) : [...service.allCharacters].sort((b, a) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
  const data = service.sort === null? [...service.allCharacters] : sortData;

  const currentPageData =
    service.filter === ""
      ? data.slice(offset, offset + 20).map((item: any) => {
          return (
            <div className="card" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
              />
              <div className="container__text">
                <h1 title={item.name}>{item.name}</h1>
                <div className="votes">
                  <div>
                    <span><i className="fas fa-heart"></i></span><p>{item.like}</p>
                  </div>
                  <div>
                    <span><i className="fas fa-heart-broken"></i></span><p>{item.dislike}</p>
                  </div>
                </div>
                <div className="container__text__timing">
                  <div className="container__text__timing_time">
                    <h2>status</h2>
                    <p>{item.status}</p>
                  </div>
                  <div className="container__text__timing_time">
                    <h2>species</h2>
                    <p>{item.species}</p>
                  </div>
                  <div className="container__text__timing_time">
                    <h2>location</h2>
                    <p title={item.location.name}>{item.location.name}</p>
                  </div>
                </div>
              </div>
              <div className="votes-buttons">
                <button className="like" onClick={() => setLike(item.like += 1)}><i className="fas fa-thumbs-up"></i></button>
                <button className="dislike" onClick={() => setDislike(item.dislike += 1)}><i className="fas fa-thumbs-up"></i></button>
              </div>
            </div>
          );
        })
      : data.map((item: any) => {
          item.name.toLowerCase();
          if (item.name.toLowerCase().indexOf(service.filter) > -1) {
            return (
              <div className="card" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
              />
              <div className="container__text">
                <h1 title={item.name}>{item.name}</h1>
                <div className="votes">
                  <div>
                    <span><i className="fas fa-heart"></i></span><p>{item.like}</p>
                  </div>
                  <div>
                    <span><i className="fas fa-heart-broken"></i></span><p>{item.dislike}</p>
                  </div>
                </div>
                <div className="container__text__timing">
                  <div className="container__text__timing_time">
                    <h2>status</h2>
                    <p>{item.status}</p>
                  </div>
                  <div className="container__text__timing_time">
                    <h2>species</h2>
                    <p>{item.species}</p>
                  </div>
                  <div className="container__text__timing_time">
                    <h2>location</h2>
                    <p title={item.location.name}>{item.location.name}</p>
                  </div>
                </div>
              </div>
              <div className="votes-buttons">
                <button className="like" onClick={() => setLike(item.like += 1)}><i className="fas fa-thumbs-up"></i></button>
                <button className="dislike" onClick={() => setDislike(item.dislike += 1)}><i className="fas fa-thumbs-up"></i></button>
              </div>
            </div>
              );
          }
        });

  return (
    <div>
      <h1>Rick & Morty API</h1>
      <div className="card-container">
        {currentPageData}
      </div>
    </div>
  );
};

export default Card;
