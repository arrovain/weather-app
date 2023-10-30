import React from 'react'
import './App.css'
import {useState} from 'react'
import axios from 'axios'

const Main = () => {

const [data, setData] = useState({})
const [location, setLocation] = useState('')
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7795ab99508b530657b7cc9eb8a2ad65`

const searchLocation = (event) =>{
  if (event.key === 'Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)}
    )}}
  console.error('geçerli bir şehir')







  return (
    <div className='app'>
      <div className='search'>
         <input className='input' onKeyPress={searchLocation}  placeholder='Lütfen şehri girin' onChange={(e) => setLocation(e.target.value)} value={location} type='text'/>
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            {data.main ? <h1>{data.main.temp}°C </h1> : null}
            </div>
            <div className='temp'>
             <h1>{data.value}</h1>  
             </div>
            
           
            
       
  

</div>
      </div>
    </div>  
  
  
    
  )
}

export default Main