import React from "react";
import NewsItem from "./NewsItem";

export default class NewsList extends React.Component {
  render() {
    const { news } = this.props;

    return (
      <div>
        {news.map((item) => (
          <NewsItem imageURL={item.urlToImage} description={item.description} />
        ))}
      </div>
    );
  }
}
