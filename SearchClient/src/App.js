import React,{useState,useEffect} from 'react'
import Table from './Table'
import axios from 'axios'
const App = () => {
  const[query,setQuery] = useState("")
  const keys = ["first_name","last_name","email"]  

  const search = (data) =>{
    return data.filter((item)=>
      keys.some((key)=>item[key].toLowerCase().includes(query))
    )
  }

// data.filter(item=>item.first_name.toLowerCase().includes(query)||
//     item.last_name.toLowerCase().includes(query)||
//     item.email.toLowerCase().includes(query)


  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:4000?q=${query}`).then(res=>setData(res.data)).catch(err=>console.log(err))
  },[query])

  return (
    <div className='app'>
      <input type="text" placeholder='Search...' className='search' onChange={(e)=>setQuery(e.target.value)}/>
      <Table data={search(data)}/>
    </div>  
  )
}

export default App