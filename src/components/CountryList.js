import React from "react";

import "../App.css";
const countryList = { in: "India", us: "USA", ru: "Russia" };

export default class CountryList extends React.PureComponent {
  componentDidMount() {
    console.log("hello");
  }

  render() {
    const { countryChosen, fetchNews, setLoader } = this.props;

    return (
      <div className="countries">
        {Object.keys(countryList).map((item) => {
          console.log(countryChosen, item);
          return (
            <button
              className={countryChosen === item ? "active" : "deactive"}
              onClick={() => {
                fetchNews(item);
                setLoader();
              }}
            >
              {countryList[item]}
            </button>
          );
        })}
      </div>
    );
  }
}
