import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'

class PhotoViewer extends Component {
    state = {  }
    render() { 
        return ( 
            <main className="photo-viewer">
                <section className="img-view"></section>
                <section className="img-list"></section>
            </main>
         );
    }
}
 
export default PhotoViewer;