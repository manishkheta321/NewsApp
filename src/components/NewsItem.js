import React from "react";
import "../App.css";
export default class NewsItem extends React.Component {
  render() {
    const { imageURL, description } = this.props;
    return (
      <div className="newsItem">
        <img className="col-5" alt="unableToLoadhImage" src={imageURL}></img>
        <p className="col-6">{description}</p>
      </div>
    );
  }
}
