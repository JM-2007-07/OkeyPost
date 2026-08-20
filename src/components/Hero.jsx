import { Box } from '@mui/material'
import React from 'react'

export default function Hero({children}) {
  return (
    <Box sx={{maxWidth:'1800px',borderRadius:'36px',margin:'auto',mt:'36px',background:'linear-gradient(79.63deg, #5B52A3 1.08%, #40B8EA 100%)',padding:'54px 0px',display:'flex',justifyContent:'center',alignItems:'center','@media (max-width:400px)':{width:'100%',borderRadius:'0 0 28px 28px',mt:'20px',padding:'40px 20px',boxSizing:'border-box',overflow:'hidden'}}}>
        <Box sx={{width:'1400px',display:'flex',alignItems:'center',gap:'0px','@media (max-width:400px)':{width:'100%',flexDirection:'column',alignItems:'flex-start',gap:'30px'}}}>
            {children}
        </Box>
    </Box>
  )
}