import React from 'react'
import { MDBContainer} from 'mdbreact'

const EmbedsPage = () => {
  return (
    <MDBContainer style={{marginTop: "8rem"}}>

      <div className="embed-responsive embed-responsive-21by9">
        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/BOfMROyjZv4"></iframe>
      </div>


    </MDBContainer>

  )
}

export default EmbedsPage;