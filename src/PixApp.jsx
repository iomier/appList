import React, { Component } from "react";
import unsplash from "./components/pixApp/getPixApi";
import { toJson } from "unsplash-js";
import InfiniteScroll from "react-infinite-scroll-component";
class PixApp extends Component {
  state = {
    photos: [],
    count: 20,
    start: 1
  };
  componentDidMount = () => {
    const { count, start } = this.state;
    unsplash.photos
      .listPhotos(start, count)
      .then(toJson)
      .then(json => {
        this.setState({ photos: json });
      });
  };
  fetchNext = () => {
    const { count, start } = this.state;
    console.log(count, start);
    this.setState({ start: this.state.start + count });
    console.log(start);
    unsplash.photos
      .listPhotos(start, count, "latest")
      .then(toJson)
      .then(json => {
        this.setState({ photos: this.state.photos.concat(json) });
      });
  };
  render() {
    const { photos } = this.state;
    return (
      <div>
        <h1>Pix Gallery App</h1>
        <InfiniteScroll
          dataLength={this.state.photos.length}
          next={this.fetchNext}
          hasMore={true}
          loader={<h3>Loading ...</h3>}>
          <div className="grid">
            {photos.map(photo => (
              <img
                key={photos.id}
                src={photo.urls.thumb}
                alt={photo.description}
              />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default PixApp;
