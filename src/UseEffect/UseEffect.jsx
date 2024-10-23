import React, { useEffect, useState } from 'react'
import Showdata from '../ShowData/ShowData';

// show data json to dom
const UseEffect = () => {

    const [showData, setShowData] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>  response.json())
        .then((result) => setShowData(result));

    }, [])
    const sliceData = showData.slice(0,30);
  return (
    <div>
    {        
    sliceData.map((item, index) =>(
          <Showdata key = {index} todo = {item}/>
        ))

        }
    </div>
  )
}

export default UseEffect