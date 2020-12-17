import { render } from "@testing-library/react";
import React, { Fragment } from "react";
import "./style.css";
import { BackBtn } from "../../../components/backBtn";

const renderList = (borderRadius = "50%") => {
  return (
    <div className="vocabulary-list">
      <div
        className="vocabulary-item-content"
        style={{ borderRadius: `${borderRadius}` }}
      >
        <div className="vocabulary-item">提</div>
      </div>
      <div
        className="vocabulary-item-content"
        style={{ borderRadius: `${borderRadius}` }}
      >
        <div className="vocabulary-item">提</div>
      </div>
      <div
        className="vocabulary-item-content"
        style={{ borderRadius: `${borderRadius}` }}
      >
        <div className="vocabulary-item">提</div>
      </div>
      <div
        className="vocabulary-item-content"
        style={{ borderRadius: `${borderRadius}` }}
      >
        <div className="vocabulary-item">提</div>
      </div>
      <div
        className="vocabulary-item-content"
        style={{ borderRadius: `${borderRadius}` }}
      >
        <div className="vocabulary-item">提</div>
      </div>
      <div
        className="vocabulary-item-content"
        style={{ borderRadius: `${borderRadius}` }}
      >
        <div className="vocabulary-item">提</div>
      </div>
    </div>
  );
};

export const Vocabulary = () => {
  return (
    <Fragment>
      <BackBtn>Homepage</BackBtn>
      {/* Turn-back button component */}
      {/* <div
        className="turn-back-button"
        style={{ position: "absolute", top: "80px", left: "75px" }}
      >
        <div className="turn-back--icon"></div>
        <span className="turn-back--text">Homepage</span>
      </div> */}

      <div className="vocabulary-section__content">
        {/* Vocabury list */}
        {/* <div className="vocabulary-list">
          <div className="vocabulary-item-content">
            <div className="vocabulary-item">提</div>
          </div>
          <div className="vocabulary-item-content selected">
            <div className="vocabulary-item">提</div>
          </div>
          <div className="vocabulary-item-content">
            <div className="vocabulary-item">提</div>
          </div>
          <div className="vocabulary-item-content">
            <div className="vocabulary-item">提</div>
          </div>
          <div className="vocabulary-item-content">
            <div className="vocabulary-item">提</div>
          </div>
          <div className="vocabulary-item-content">
            <div className="vocabulary-item">提</div>
          </div>
        </div> */}
        {renderList()}
        {/* <renderList /> */}

        {/* Vocabulary meaning content */}
        <div className="vocabulary-meaning__container"></div>

        <div className="vocabulary-main__container">
          {/* Kanji writing learning */}
          <div className="vocabulary-writing__container">
            <div className="vocabulary-writing__title">
              Ấn vào để xem cách viêt
            </div>
            <div className="vocabulary-writing__main">提</div>
          </div>
          <div className="vocabulary-reading__container">
            <div
              className="vocabulary-reading__title"
              style={{ marginBottom: "10px" }}
            >
              Cách đọc và các từ vựng liên quan
            </div>
            {renderList("10px")}
            {/* <div className="relate__list">
              <div className="vocabulary-item-content">
                <div className="vocabulary-item">提</div>
              </div>
              <div className="vocabulary-item-content">
                <div className="vocabulary-item">提</div>
              </div>
              <div className="vocabulary-item-content">
                <div className="vocabulary-item">提</div>
              </div>
              <div className="vocabulary-item-content">
                <div className="vocabulary-item">提</div>
              </div>
              <div className="vocabulary-item-content">
                <div className="vocabulary-item">提</div>
              </div>
              <div className="vocabulary-item-content">
                <div className="vocabulary-item">提</div>
              </div>
            </div> */}

            {/* Listening part */}
            <div className="vocabulary-listening__container">
              <div className="vocabulary-listening-item">
                <span className="list-icon"></span>
                <div className="item--name">提供する </div>
                <div className="item--meaning">make a tour of</div>
                <div className="item--listening"></div>
              </div>
              <div className="vocabulary-listening-item">
                <span className="list-icon"></span>
                <div className="item--name">提供する </div>
                <div className="item--meaning">make a tour of</div>
                <div className="item--listening"></div>
              </div>
              <div className="vocabulary-listening-item">
                <span className="list-icon"></span>
                <div className="item--name">提供する </div>
                <div className="item--meaning">make a tour of</div>
                <div className="item--listening"></div>
              </div>
              <div className="vocabulary-listening-item">
                <span className="list-icon"></span>
                <div className="item--name">提供する </div>
                <div className="item--meaning">make a tour of</div>
                <div className="item--listening"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
