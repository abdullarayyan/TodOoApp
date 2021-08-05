import React from "react";
import AddTask from "./Component/AddTask";

const Home = ({ data }) => {
  console.log(data, "hhhh")
  return (
    <React.Fragment>
      <AddTask data={data} />
    </React.Fragment>

  );
}

export default Home;
