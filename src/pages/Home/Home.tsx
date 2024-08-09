import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAuth } from '../../context/AuthContexProvider'
import { Button, Pill, Tabs } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RiAddLargeFill } from 'react-icons/ri';

function Surveycontainer(){
  return(
    <div></div>
  )
}


function Home() {
  const navi = useNavigate()
  const cout = useSelector((state)=>state.counter.count)
  const {isAuthenticated,logout,user} = useAuth();
  const[userinfo,setuserinfo] = useState({email:"none",displayName:"none"})

  
  
    useEffect(()=>{

    },[])
    
  return (
    <div className='flex flex-1   min-h-[100%] min-w-[100%] p-4' >
      <div className='flex flex-col min-w-[100%] min-h-[100%] items-center gap-3 md:flex-row'>
        <div className='flex flex-col bg-[#161c23] flex-1 w-[100%] h-[95%] rounded-xl'>
          <div className='flex gap-2 items-center'>
            <Pill bg="#75e587">Open:34</Pill>
            <Pill bg="red">Closed:34</Pill>

            <Button className='ml-auto' leftSection={<RiAddLargeFill/>} color='#005B41' bg="#005B41" radius="1rem" >Create Survey</Button>
          </div>
        </div>
        <div className='bg-[#232D3F] flex-1 w-[100%] h-[95%] rounded-xl'>
        <Tabs variant="outline" defaultValue="gallery">
      <Tabs.List className='text-white rounded-lg'>
        <Tabs.Tab value="gallery">
          Total
        </Tabs.Tab>
        <Tabs.Tab value="messages">
          By Survey
        </Tabs.Tab>
        <Tabs.Tab value="settings" >
          Settings
        </Tabs.Tab>
      </Tabs.List>
      </Tabs>
        </div>
        
      </div>
    </div>
  )
}

export default Home