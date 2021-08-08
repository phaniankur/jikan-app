import React,{useState} from 'react'
import Box from '@material-ui/core/Box';
import axios from 'axios'
import Card from './Card'
import { InputBase } from '@material-ui/core';
import Button from './Button'

function JikanApp() {
const [jikanData, setjikanData] = useState([])
const [searchData, setsearchData] = useState('')
 const url='https://api.jikan.moe/v3/search/anime'

    function handleChange(e) {
        setsearchData(e.target.value)
    }
    
    
    const handleClick= (e)=>{
        console.log('search:' , searchData)
        //alert('clicked')
        e.preventDefault()
        
        axios.get(url,
        {
            params:{
                 q:{searchData},
                 limit: 50,
            }
        })
        .then(res=> {
            setjikanData(res.data.results)
        })
        .catch(err=> console.log(err))
    }


    return (
        <>
        <Box
        //bgcolor='red'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        mt='2rem'
        >
                <Box
                    fontSize='4rem'
                    fontWeight='bold'
                    color='white'
                    >
                        Jikan API
                </Box>
                <Box
                p='0.5rem'
                >
                    <form onSubmit={handleClick}>
                        <InputBase required={true}  type='text' placeholder='Seach Your Anime...' onChange={handleChange}/>
                        
                        <Button value='Search'/>
                    </form>
                    
                </Box>
                <Box
                display= {searchData? 'block': 'none'}
                fontWeight='normal'>
                    
                    {url}?q={searchData}
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
                    {jikanData.map((item, i)=>(

                        <Card  key={i} image_url={item.image_url} title={item.title} url={item.url} />

                    ))
                    }
                    </Box>
                        
                
            
        </>
            
        
    )
}

export default JikanApp
