import React from "react";
import CountryList from "./CountryList";
import Loader from "./Loader";
import NewsList from "./NewsList";

const token = "bd285e35d4574b39b703ed566c1c5500";

export default class NewsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: [], loader: true, countryChosen: "in" };
  }
  setLoader = () => {
    this.setState({
      loader: true,
    });
  };
  fetchNews = (countryCode) => {
    this.setState({
      countryChosen: countryCode,
    });
    const NEWS_URL = `http://newsapi.org/v2/top-headlines?country=${countryCode}&category=business&apiKey=${token}`;
    console.log(NEWS_URL);
    fetch(NEWS_URL)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          news: json.articles,
          loader: false,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount() {
    this.fetchNews(this.state.countryChosen);
  }
  render() {
    const { news, countryChosen, loader } = this.state;
    console.log(news);
    return (
      <>
        <CountryList
          setLoader={this.setLoader}
          countryChosen={countryChosen}
          fetchNews={this.fetchNews}
        />
        {loader ? <Loader /> : <NewsList news={news} />}
      </>
    );
  }
}
