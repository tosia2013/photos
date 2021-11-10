import React from "react";
import indiv__logo from "../../img/individual_icon.png";
import comp__logo from "../../img/Companies_icon.png";
import ButtonIServices from "./ButtonIServices";
import "../../style/Services.css";

export default function Services() {
  return (
    <div className="services">
      <div className="services_content individual">
        <div className="sevices__logo">
          <img src={indiv__logo} className="indiv__img" alt="idividual" />
        </div>
        <h1 className="sevices__textLogo">individuals session</h1>
        <div>
          <div className="individual__studio">
            <div className="text__group">
              <h2 className="services__text">1</h2>
            </div>
            <div className="input__group  input__groupOne">
              <input
                type="text"
                placeholder="Studio Session"
                className="input input__idividual input__one"
              />
            </div>
          </div>
          <div className="individual__outdoor">
            <div className="text__group">
              <h2 className="services__text">2</h2>
            </div>
            <div className="input__group input__groupTwo">
              <input
                type="text"
                placeholder="Outdoor Session"
                className="input input__idividual input__two"
              />
            </div>
          </div>
          <div className="individual__inOffice">
            <div className="text__group text__groupThree">
              <h2 className="services__text services__textThree">3</h2>
            </div>
            <div className="input__group input__groupThree">
              <input
                type="text"
                placeholder="In-Office Sessions"
                className="input  input__idividual input__three"
              />
            </div>
          </div>
        </div>
        <ButtonIServices />
      </div>
      <div className="services_content companies">
        <div className="sevices__logo">
          <img src={comp__logo} alt="news" />
        </div>
        <h1 className="sevices__textLogo companies__textLogo">news session</h1>
        <div>
          <div className="companies__studio">
            <div className="text__group">
              <h2 className="services__text">1</h2>
            </div>
            <input
              type="text"
              placeholder="Group On-Sites"
              className="input  input__companies input__one"
            />
          </div>
          <div className="individual__outdoor">
            <h2>2</h2>
            <input type="text" />
          </div>
        </div>
        <ButtonIServices />
      </div>
    </div>
  );
}
