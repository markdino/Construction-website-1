import React, { Component } from "react"
import "./photoViewer.scss"

class PhotoViewer extends Component {
  state = {
    imgIndex: 0,
  }
  render() {
    const imgList = this.props.list.src
    return (
      <main className="photo-viewer w-100 mx-1">
        <section className="img-view img-thumbnail mw-100 h-75">
          <img
            src={imgList[this.state.imgIndex]}
            alt={`imageview` + this.state.imgIndex}
          />
        </section>
        <section className="img-list w-100 d-flex flex-wrap justify-content-around bg-light p-2">
          {imgList.map((img, index) => {
            return (
              <img
                src={img}
                alt={`image` + index}
                key={index}
                onClick={() => this.setState({ imgIndex: index })}
                className={
                  this.state.imgIndex === index ? "img-selected" : null
                }
              />
            )
          })}
        </section>
      </main>
    )
  }
}

export default PhotoViewer
