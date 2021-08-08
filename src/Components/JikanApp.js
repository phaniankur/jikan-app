import React,{useEffect, useState} from 'react'
import Box from '@material-ui/core/Box';
import axios from 'axios'
import Card from './Card'
import Card_main from './Card_main'
import { InputBase } from '@material-ui/core';
import Button from './Button'

function JikanApp() {
const [jikanData, setjikanData] = useState([])
const [searchData, setsearchData] = useState('')


    function handleChange(e) {
        setsearchData(e.target.value)
    }
    
    
    const handleClick= (e)=>{
        console.log('search:' , searchData)
        //alert('clicked')
        e.preventDefault()
        
        axios.get('https://api.jikan.moe/v3/search/anime',
        {
            params:{
                 q:{searchData},
                 limit: 50,
            }
        })
        //.then(data=> console.log(data.data.results))
        .then(res=> setjikanData(res.data.results))
        .catch(err=> console.log(err))
    }


    return (
        <>
        <Box
        //bgcolor='red'
        display='flex'
        //flexDirection='column'
        justifyContent='center'
        >
                <Box
                    fontSize='22px'
                    fontWeight='bold'
                    color='white'
                    >
                        Jikan API
                </Box>
                <Box
                
                >
                    <form onSubmit={handleClick}>
                        <InputBase required={true} type='text' placeholder='Seach Your Anime...' onChange={handleChange}/>
                        <button >search</button>
                        <Button value='Search'/>
                    </form>
                    
                </Box>
                
                
            </Box>

                
                
                    
            <Box
                //bgcolor={jikanData? 'red': 'blue'}
                
                display='flex'
                flexWrap='wrap'
                flexDirection='row'
                justifyContent='center'
                alignItems='center'
                
                
                >
                    { jikanData? jikanData.map((item, i)=>(

                        <Card  key={i} image_url={item.image_url} title={item.title} url={item.url} />

                    ))
                    :null }
                    </Box>
                        
                
            
        </>
            
        
    )
}

export default JikanApp
