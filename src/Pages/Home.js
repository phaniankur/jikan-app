import React from 'react'
import Box from '@material-ui/core/Box';

function Home() {
    return (
        <>
        <Box
        p={{xs: '1rem',md:'2rem'}}
        display='flex'
        color='#fff'
        justifyContent='center'
        alignItems={{xs: 'center',md:'flex-start'}}
        flexDirection='column'
        
        height='90vh'
        >
            <Box
            fontSize='5rem'
            
            >
                Jikan API
            </Box>
            <Box
            fontSize={{xs:'18px', md:'20px'}}
            pt='1rem'
            
            >UNOFFICIAL MYANIMELIST API</Box>

            
            <Box
            pt='1rem'
            width={{xs: '100%',md:'50%'}}
            fontSize={{xs:'15px', md: '18px'}}
            >Jikan (時間) is an open-source PHP & REST API for the “most active online anime + manga community and database” — MyAnimeList.net. It parses the website to satisfy the need for an API.
            </Box>
            
        </Box>
        
        </>
        
    )
}

export default Home