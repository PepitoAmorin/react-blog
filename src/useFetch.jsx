import { useState, useEffect } from 'react'; 

const useFetch = (url) => {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => { 
    const abortController = new AbortController(); 

    setTimeout(() => {
      fetch(url, { signal: abortController.signal }) 
        .then(response => {  
          if (!response.ok) {
            throw Error(`Posts can't be fetched, please reload.`)
          }
          return response.json(); 
        })
        .then(data => {
          setData(data); 
          setLoading(false); 
          setError(null); 
        }) 
        .catch(error => {
          if (error.name === 'AbortError') {

          } else {
            setError(error.message); 
          setLoading(false);
          }
           
        }) 
    }, 500); 
    
    return () => abortController.abort();  
     

  }, [url]); 

  return { data, loading, error }; 
} 

export { useFetch }; 