import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data=useLoaderData()
    // const [data, setData] = React.useState([ ])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/farooq140')
    //     .then(response => response.json())
    //     .then(data =>{ console.log(data);
    //     setData(data)
    //     })
        
    // },[])
  return (
    <div className="text-center bg-slate-700 m-6 p-4 text-white text-3xl">
        <img src={data?.avatar_url} alt="Avatar" className=' w-10' />
        Github followers: {data?.login}
    
    </div>
  )
}

export default Github

export const getHubInfoLoader= async()=>{
        const  response=await fetch('https://api.github.com/users/farooq140')
    
    return response.json()
    
}