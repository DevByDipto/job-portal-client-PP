import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJob from "./HotJob";

const Home = () => {
  const jobsPromis = fetch("http://localhost:3000/jobs").then(res=>res.json())
  console.log(jobsPromis);
  
  return (
    <div>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <HotJob jobsPromis={jobsPromis}></HotJob>
      </Suspense>
    </div>
  );
};

export default Home;
