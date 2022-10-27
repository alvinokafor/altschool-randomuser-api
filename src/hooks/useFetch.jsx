import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [users, setUsers] = useState([]);

  //fetches data from the random user api
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data.results);
    };

    fetchData().catch(console.error);
  }, [url]);

  return {users}
}

export default useFetch;