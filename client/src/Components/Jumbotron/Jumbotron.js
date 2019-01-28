import React from "react";
import { Jumbotron } from "mdbreact";

const JumbotronPage = () => {
  return (
    <Jumbotron>
      <h1>404 We're sorry this page doesn't exist.</h1>
      <h3>But here's a pretty picture to look at!</h3> 
      <img className="w-100" src="http://hd.wallpaperswide.com/thumbs/coniferous_forest-t2.jpg" alt="Oops this page isn't available." />
    </Jumbotron>

  )
}

export default JumbotronPage;