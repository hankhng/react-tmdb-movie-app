import React, { useEffect } from 'react'

const Favourite = () => {

  useEffect(() => {
    console.log("component did mount");

    return () => {
      console.log("component did unmount");
    };
  }, []);

  return (
    <div>FAVOURITE</div>
  )
};

export default Favourite