
import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import '../Container/Container.css'
import axios from 'axios';
const Container = () => {

  useEffect(() => {
    async function getBloger() {
      try {
        const response = await axios.get(' https://jsonplaceholder.typicode.com/users')
        setData(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getBloger()
  }, [])

  interface ToppersData {
    name: string;
    company:{
      name:string;
    }
    id: number;
    position:boolean
  }
  const [data, setData] = React.useState<ToppersData[]>([]);

  
  return (
    <div className='Container'>
        <Header/>
        <Slider data={data}/> 
               
    </div>
  )
}

export default Container