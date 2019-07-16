import * as React from 'react';
import { useEffect } from "react";
import '../styles/map.scss'

import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "resium";


 
const Map: React.FC = () => {

  return (
    <div className="map">

       <Viewer full>
        <Entity
          name="Tokyo"
          position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
          point={{ pixelSize: 10 }}
          description="hoge"
        />
      </Viewer>
    </div>
  )
}

export default Map;