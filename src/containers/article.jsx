import React, { Component } from "react";
import "../style.css";

class Article extends Component {
  render() {
    const {id} = this.props.match.params;
    return (
      <div className="w-30 dark-text">
        Article {id}
      </div>
    );
  }
}

export default Article;
