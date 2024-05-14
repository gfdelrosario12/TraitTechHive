import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Card from "../General Components/Card";
import { BsFillHouseFill, BsFillPersonFill } from "react-icons/bs";
import { IoDocumentSharp, IoNewspaperOutline } from "react-icons/io5";
import { RiGalleryLine } from "react-icons/ri";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { connect } from 'react-redux';

const Navigation = ({ value1, value2, changeValues }) => {
  return (
    <div>
      <div>
        <Link to="/" className="title-font fs-2">
        TraitTechHive
        </Link>
        <div className="links my-4 title-font link-hover fs-5">
          <Link to="/" className="p-2">
            <BsFillHouseFill className="mx-2" />
            Overview
          </Link>
          <Link to="/examples" className="p-2">
            <IoDocumentSharp className="mx-2" />
            Examples
          </Link>
          <Link to="/news" className="p-2">
            <IoNewspaperOutline className="mx-2" />
            News
          </Link>
          <Link to="/gallery" className="p-2">
            <RiGalleryLine className="mx-2" />
            Gallery
          </Link>
          <Link to="/application" className="p-2">
            <MdOutlinePhoneAndroid  className="mx-2" />
            Application
          </Link>
        </div>
      </div>
      <div className="links my-2 normal-text link-hover">
        <button className="title-font fs-5 p-2" onClick={() => changeValues({ value1: "TraitTechHive", value2: "data:image/jpeg;base64,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" })}>
          <BsFillPersonFill className="mx-2" />
          Log Out
        </button>
        <div className="my-3">
          <Link to="/about" id="upgrade">
            
            <Card
              cardWidth="200px"
              cardHeight="190px"
              imageWidth="195px"
              imageHeight="100px"
              imageUrl="https://i.natgeofe.com/k/520e971d-7a22-4a6f-90dc-258df74e45bc/american-goldfinch.jpg"
              title="Upgrade to Pro Plan"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  value1: state.value1,
  value2: state.value2
});

const mapDispatchToProps = dispatch => ({
  changeValues: values => dispatch({ type: 'CHANGE_VALUES', payload: values })
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);