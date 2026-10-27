import { useState, useEffect } from 'react';
import {useLoaderData} from 'react-router-dom'

function Github() {
  const data = useLoaderData()
/*  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/ayushibitwiseinfotech-collab')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub user data');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching GitHub data:', error);
      });
  }, []);  */

  return (
    <div className="m-4 bg-gray-600 p-4 text-center text-3xl text-white">
      GitHub followers: {data.followers ?? 'Loading...'}
      <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  );
}

export default Github

export const githubInfoLoader = async () => {
    const response=await fetch('https://api.github.com/users/ayushibitwiseinfotech-collab')
return response.json()
}