import React, { Component } from "react";
import "../style/News.css";

export default class news extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articals: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://api.mediastack.com/v1/news?access_key=f94ac903d6ae218bc09e796b704947fb"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: false,
            articals: result.data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: false,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, articals } = this.state;
    if (error) {
      return <p> Error {error}</p>;
    } else if (isLoaded) {
      return <p> Loading... </p>;
    } else {
      return (
        <div className="tander">
          {articals.map((artical) => (
            <div className="newsCase" key="artical.name">
              <div className="newsText__conteiner">
                <div className="newsText__atribute">
                  <h3>{artical.source}</h3>
                  <h3>{artical.published_at}</h3>
                </div>
                <div className="conteiner__news">
                  <div className="newsLogo">
                    <h1 className="newsLogo__h1">{artical.title}</h1>
                    <img src={artical.image} className="newsLogo__img" />
                  </div>
                  <p className="news__description">{artical.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
