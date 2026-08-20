import React from 'react'
import { Box, Typography } from '@mui/material'
import Header from '../components/Header'
import ButtonOP from '../components/ButtonOP'
import { Home } from '@mui/icons-material'
import { Link } from 'react-router'

export default function NotFound() {
    return (
        <>
            <Box sx={{width:'1400px',minHeight:'calc(100vh - 100px)',margin:'auto',display:'flex',alignItems:'center',justifyContent:'space-between','@media (max-width:400px)':{width:'100%',minHeight:'calc(100vh - 80px)',padding:'40px 20px',boxSizing:'border-box',flexDirection:'column',justifyContent:'center',gap:'50px'}}}>
                <Box sx={{display:'flex',flexDirection:'column',gap:'30px',width:'650px',color:'#1F2428','@media (max-width:400px)':{width:'100%',gap:'20px',alignItems:'flex-start'}}}>
                    <Typography sx={{fontSize:'180px',fontWeight:'800',lineHeight:'1',color:'#01CD7D','@media (max-width:400px)':{fontSize:'110px'}}}>
                        404
                    </Typography>
                    <Typography sx={{fontSize:'44px',fontWeight:'800','@media (max-width:400px)':{fontSize:'30px',lineHeight:'1.2'}}}>
                        Кажется, такой страницы нет
                    </Typography>
                    <Typography sx={{fontSize:'20px',fontWeight:'300',lineHeight:'1.6',width:'550px','@media (max-width:400px)':{width:'100%',fontSize:'16px',lineHeight:'1.5'}}}>
                        Страница, которую вы ищете, была перемещена, удалена или никогда не существовала. Но не переживайте — вы можете вернуться на главную и продолжить покупки.
                    </Typography>
                    <ButtonOP sx={{'@media (max-width:400px)':{padding:'13px 22px'}}}>
                        <Link to={'/'} style={{textDecoration:'none',color:'inherit'}}>
                            <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
                                <Home sx={{fontSize:'20px'}}/>
                                <Typography sx={{fontSize:'17px','@media (max-width:400px)':{fontSize:'15px'}}}>
                                    Вернуться на главную
                                </Typography>
                            </Box>
                        </Link>
                    </ButtonOP>
                </Box>
                <Box sx={{width:'500px',height:'500px',borderRadius:'50%',bgcolor:'#F2F6FC',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',flexShrink:0,'@media (max-width:400px)':{width:'280px',height:'280px'}}}>
                    <Typography sx={{fontSize:'220px',fontWeight:'800',color:'#01CD7D',opacity:'.15','@media (max-width:400px)':{fontSize:'120px'}}}>
                        404
                    </Typography>
                    <Box sx={{position:'absolute',width:'180px',height:'180px',borderRadius:'50%',bgcolor:'white',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0px 0px 50px #8A8A8A2C','@media (max-width:400px)':{width:'105px',height:'105px'}}}>
                        <Typography sx={{fontSize:'80px',fontWeight:'800',color:'#01CD7D','@media (max-width:400px)':{fontSize:'50px'}}}>
                            ?
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}