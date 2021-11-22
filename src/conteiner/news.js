import React, { Component } from "react";
import "../style/News.css";
import Pagination from "../components/Pagination";

const DEFAULT_LIMIT = 3

export default class news extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articals: [],
      offset : 0,
      total : 0,
      count : 0,
      limit : DEFAULT_LIMIT
    };
    this.handleNextClick = this.handleNextClick.bind(this)
    this.handlePrevClick = this.handlePrevClick.bind(this)
  }

  handleNextClick = () => {
      this.setState({
          offset: this.state.offset + DEFAULT_LIMIT,
      } )
  }

    handlePrevClick = () => {
        this.setState({
            offset: this.state.offset - DEFAULT_LIMIT,
        } )
    }

  fetchNews (offsetVal, limitVal) {
      fetch(
          `http://api.mediastack.com/v1/news?access_key=4f0731a1b726c511f98ac7a42e88e58f&offset=${offsetVal}&limit=${limitVal}`, {
              method: 'GET'
          }
      )
          .then((res) => res.json())
          .then(
              (result) => {
                  console.log(result);
                  this.setState({
                      isLoaded: false,
                      articals: result.data,
                      total: result.pagination.total,
                      count: result.pagination.count,
                  });
              }

          )
          .catch((error) => {
              this.setState({
                  isLoaded: false,
                  error: error.message,
              });
          });
  }

  componentDidMount() {
      this.fetchNews(this.state.offset, this.state.limit)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log(prevProps, prevState)
      if (prevState.offset !== this.state.offset){
          this.fetchNews (this.state.offset, this.state.limit)
          console.log(this.fetchNews)
      }
  }

    render() {
    const { error, isLoaded, articals, total, offset, count } = this.state;
    if (error) {
      return <p> Error {error}</p>;
    } else if (isLoaded) {
      return <p> Loading... </p>;
    } else {
      return (
          <>
            <Pagination total={total} offset={offset} count={count} handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick}/>
            <div className="tander">
              {articals?.map((artical) => (
                  <div className="newsCase" key="artical.name">
                    <div className="newsText__conteiner">
                      <div className="newsText__atribute">
                        <h3>{artical.source}</h3>
                        <h3>{artical.published_at}</h3>
                      </div>
                      <div className="conteiner__news">
                        <div className="newsLogo">
                          <h1 className="newsLogo__h1">{artical.title}</h1>
                          <img src={artical.image} className="newsLogo__img" alt="image"/>
                        </div>
                        <p className="news__description">{artical.description}</p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </>
      );
    }
  }
}
