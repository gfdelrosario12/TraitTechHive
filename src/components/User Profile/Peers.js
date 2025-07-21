import React, { useState } from "react";
import CardSideImage from "../General Components/CardSideImage";
import { connect } from "react-redux";
import Mayumi from "../../assets/images/reporters/Mayumi.png";
import Lakandula from "../../assets/images/reporters/Lakandula.png";
import Bayani from "../../assets/images/reporters/Bayani.png";
import Diwa from "../../assets/images/reporters/Diwa.png";
import { Link } from "react-router-dom";
import HomeComponent from "../Home Components/HomeComponent";

const Peers = ({changeValues }) => {
  const [clickedCard, setClickedCard] = useState(null);

  const cards = [
    { id: 1, title: "Mayumi Tala", imageUrl: Mayumi, subtext: "Head" },
    { id: 2, title: "Lakandula Amihan", imageUrl: Lakandula, subtext: "Research Staff" },
    { id: 3, title: "Bayani Malaya", imageUrl: Bayani, subtext: "Tech Staff" },
    { id: 4, title: "Diwa Alon", imageUrl: Diwa, subtext: "Field Staff" },
  ];

  const handleCardClick = (card) => {
    changeValues({ value1: card.title, value2: card.imageUrl, value3: card.subtext });
    setClickedCard(card.id === clickedCard ? null : card.id);
  };

  return (
    <HomeComponent>
      <div>
        <Link to="/peers" className="black-underline">
          <h1 className="fs-5 title-font my-4">My Peers:</h1>
        </Link>

        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          {cards.map((card, index) => (
            <div className="mx-3">
              <button onClick={() => handleCardClick(card)} className="w-100">
                <CardSideImage
                  cardWidth="240px"
                  cardHeight="110px"
                  imageWidth="250px"
                  imageHeight="105px"
                  imageUrl={card.imageUrl}
                >
                  <h5 className="fs-6 card-title title-font">{card.title}</h5>
                  <p className="card-text normal-text">{card.subtext}</p>
                </CardSideImage>
              </button>
            </div>
          ))}
        </div>
      </div>
    </HomeComponent>
  );
};

const mapStateToProps = (state) => ({
  value1: state.value1,
  value2: state.value2,
  value3: state.value3,
});

const mapDispatchToProps = (dispatch) => ({
  changeValues: (values) => dispatch({ type: "CHANGE_VALUES", payload: values }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Peers);