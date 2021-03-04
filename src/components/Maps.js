import React, { useState, Component} from 'react'
import ReactDOM from 'react-dom'
import ReactMapboxGL, { Source, Layer } from "@urbica/react-map-gl";
import marylandPrecincts from "../geojson/md_2016_w_ushouse.geojson"




class Maps extends Component{
    state = {
        viewport: {
          latitude: 39.8283,
          longitude: -98.5795,
          zoom: 4.25
        }
      };
    
      render(){
        return(
          <div>
            <ReactMapboxGL
              {...this.state.viewport}
              style={{width: "100vw", height: "100vh"}}
              mapStyle="mapbox://styles/mapbox/light-v9"
              accessToken={'pk.eyJ1Ijoid29ybGRjYWxsaW5nIiwiYSI6ImNrbHZjbjV4cjJvcXYycHBtMmJjaGZ0aHcifQ.68N60kfWy9s3PeNMuqnuQA'}
              onViewportChange={viewport => this.setState({ viewport })}
            >
            <Source
              id="mdprecincts"
              type="geojson"
              data={marylandPrecincts}
            />
            <Layer
              id="MarylandPrecincts"
              type="fill"
              source="mdprecincts"
              paint={{
                "fill-color": "#228b22",
                "fill-opacity": 0.4
              }}
            />
            </ReactMapboxGL>
          </div>
        )
      }
    }

export default Maps;