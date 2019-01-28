import React from 'react'
import { MDBContainer} from 'mdbreact'

const EmbedsPage = () => {
  return (
    <MDBContainer style={{marginTop: "8rem", marginBottom: "8rem"}}>

      <div className="embed-responsive embed-responsive-21by9 z-depth-5">
        <iframe className="embed-responsive-item" title="video" src="https://www.youtube.com/embed/BOfMROyjZv4"></iframe>
      </div>


    </MDBContainer>

  )
}

export default EmbedsPage;