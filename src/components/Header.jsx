import { Box, Button, Drawer, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router'
import { Menu, PersonOutlined, Close } from '@mui/icons-material'
import ButtonOP from './ButtonOP'

export default function Header() {
    const [open,setOpen] = useState(false)
    const links = [
        {name:'Главная',path:'/'},
        {name:'Как покупать',path:'/how-to-buy'},
        {name:'Распродажи',path:'/sales'},
        {name:'Цены',path:'/prices'},
        {name:'Помощь',path:'/help'},
        {name:'Бонусы',path:'/bonuses'},
        {name:'Блог',path:'/blog'},
        {name:'Магазины',path:'/stores'}
    ]
    return (
        <>
        <Box sx={{width:'1400px',margin:'auto',mt:'36px',display:'flex',justifyContent:'space-between',alignItems:'center','@media (max-width:400px)':{width:'100%',mt:'20px',px:'20px',boxSizing:'border-box'}}}>
            <img src={logo} alt="" style={{maxWidth:'170px'}}/>
            <Box sx={{display:'flex',gap:'30px','@media (max-width:400px)':{display:'none'}}}>
                {links.map((el,i) =>
                    <NavLink key={i} to={el.path} className={({isActive}) => isActive ? 'active' : ''}>
                        {el.name}
                    </NavLink>
                )}
            </Box>
            <Box sx={{display:'flex',alignItems:'center',gap:'30px','@media (max-width:400px)':{display:'none'}}}>
                <Button sx={{display:'flex',textTransform:'none',borderRadius:'36px',justifyContent:'center',alignItems:'center',gap:'10px',color:'#1F2428'}}>
                    <PersonOutlined/> Вход
                </Button>
                <ButtonOP>
                    <Typography sx={{fontSize:'13px'}}>
                        Связаться с нами
                    </Typography>
                </ButtonOP>
            </Box>
            <IconButton onClick={() => setOpen(true)} sx={{display:'none','@media (max-width:400px)':{display:'flex',color:'#1F2428',p:'5px'}}}>
                <Menu sx={{fontSize:'30px'}}/>
            </IconButton>
        </Box>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <Box sx={{width:'280px',height:'100%',display:'flex',flexDirection:'column',p:'25px',boxSizing:'border-box'}}>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mb:'35px'}}>
                    <img src={logo} alt="" style={{width:'150px'}}/>
                    <IconButton onClick={() => setOpen(false)}>
                        <Close/>
                    </IconButton>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',gap:'22px'}}>
                    {links.map((el,i) =>
                        <NavLink key={i} to={el.path} onClick={() => setOpen(false)} className={({isActive}) => isActive ? 'active' : ''} style={{fontSize:'17px',fontWeight:'600',textDecoration:'none',color:'#1F2428'}}>
                            {el.name}
                        </NavLink>
                    )}
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',gap:'15px',mt:'35px'}}>
                    <Button sx={{display:'flex',textTransform:'none',borderRadius:'36px',justifyContent:'center',alignItems:'center',gap:'10px',color:'#1F2428',border:'1px solid #E0E0E0'}}>
                        <PersonOutlined/> Вход
                    </Button>
                    <ButtonOP sx={{width:'100%'}}>
                        <Typography sx={{fontSize:'13px'}}>
                            Связаться с нами
                        </Typography>
                    </ButtonOP>
                </Box>
            </Box>
        </Drawer>
        </>
    )
}