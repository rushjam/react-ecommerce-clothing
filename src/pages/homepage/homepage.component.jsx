import React from "react";
import Directry from "../../components/directory/directory.component";

import './homepage.styles.scss'

const HomePage = ({history}) => {
  return (
    <div className="homepage">
      <Directry />
    </div>
  );
};

export default HomePage;
