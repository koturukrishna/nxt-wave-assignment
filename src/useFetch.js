import {useState, useEffect} from 'react'

export default function useFetch(url) {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(dat => {
        setData(dat)
      })
  }, [])
  return data
}