import { Button } from '@mui/material'
import React from 'react'

export default function ButtonOP({children, ...props}) {
    return (
        <Button {...props} sx={{borderRadius:'36px',width:'fit-content',background:'linear-gradient(90deg, #00C97B 0%, #00D981 96.96%)',color:'white',padding:'15px 36px',fontWeight:700,lineHeight:'18px',textTransform:'none',...props.sx,'@media (max-width:400px)':{padding:'12px 24px',fontSize:'14px',lineHeight:'16px'}}}>
            {children}
        </Button>
    )
}