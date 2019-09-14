import React, { Component } from "react"

import img1 from "../images/projects/ialicante-mediterranean-homes-2d4lAQAlbDA-unsplash.jpg"
import img2 from "../images/projects/jarek-ceborski-jn7uVeCdf6U-unsplash.jpg"
import img3 from "../images/projects/pixasquare-4ojhpgKpS68-unsplash.jpg"
import img4 from "../images/projects/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.jpg"
import img5 from "../images/projects/jason-briscoe-AQl-J19ocWE-unsplash.jpg"
import img6 from "../images/projects/lance-anderson-QdAAasrZhdk-unsplash.jpg"

class PhotoViewer extends Component {
  state = {}
  render() {
    return (
      <main className="photo-viewer w-100 mr-1 ml-1">
        <section className="img-view w-100">
          <img src={img5} alt="" className="img-thumbnail" />
        </section>
        <section className="img-list w-100 d-flex flex-wrap bg-light p-2">
          <img className="m-2 p2" src={img1} alt="" width="105" height="70" />
          <img className="m-2 p2" src={img2} alt="" width="105" height="70" />
          <img className="m-2 p2" src={img3} alt="" width="105" height="70" />
          <img className="m-2 p2" src={img4} alt="" width="105" height="70" />
          <img className="m-2 p2" src={img5} alt="" width="105" height="70" />
          <img className="m-2 p2" src={img6} alt="" width="105" height="70" />
        </section>
      </main>
    )
  }
}

export default PhotoViewer
