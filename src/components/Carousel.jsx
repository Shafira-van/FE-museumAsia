import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBenda } from "../redux/action/dataBendaAction";
import Item from "./Item";

function Carousel() {
  const dispatch = useDispatch();
  const { benda } = useSelector((state) => state.benda);

  useEffect(() => {
    dispatch(getBenda());
  }, []);

  return (
    <div className="carousel2">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
              <div class="row" id="row1">
                {benda.splice(0, 4).map((item) => (
                  <div className="col">
                    <Item
                      id={item.id}
                      img={item.img}
                      name={item.object_name}
                      provinsi={item.provenience}
                      url={item.url}
                      // desc={item.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          <div class="carousel-item" data-bs-interval="2000">
   
              <div class="row" id="row2">
                {benda.splice(0, 4).map((item) => (
                  <div className="col">
                    <Item
                      id={item.id}
                      img={item.img}
                      name={item.object_name}
                      provinsi={item.provenience}
                      url={item.url}
                      // desc={item.description}
                    />
                  </div>
                ))}
              </div>
            </div>
  
          <div class="carousel-item">
            {/* <div class="container"> */}
              <div class="row" id="row3">
                {benda.splice(0, 4).map((item) => (
                  <div className="col">
                    <Item
                      id={item.id}
                      img={item.img}
                      name={item.object_name}
                      provinsi={item.provenience}
                      url={item.url}
                      // desc={item.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          {/* </div> */}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* {benda.splice(0, 4).map((item) => (
                <div className="col">
                  <Item
                    id={item.id}
                    img={item.img}
                    name={item.object_name}
                    provinsi={item.provenience}
                    url={item.url}
                    // desc={item.description}
                  /> 
                </div>
              ))}*/}
    </div>
  );
}

export default Carousel;
