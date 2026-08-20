import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router'
import { Instagram, Twitter, WhatsApp } from '@mui/icons-material'

export default function Footer() {
  return (
    <Box sx={{width:'1400px',margin:'auto',display:'flex',flexDirection:'column',gap:'40px',mt:'100px',mb:'40px','@media (max-width:400px)':{width:'100%',mt:'60px',mb:'25px',px:'20px',gap:'25px',boxSizing:'border-box'}}}>
        <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',color:'#1F2428','@media (max-width:400px)':{flexDirection:'column',gap:'35px'}}}>
            <Box sx={{display:'flex',flexDirection:'column',gap:'30px','@media (max-width:400px)':{gap:'20px',alignItems:'center'}}}>
                <img src={logo} alt="" style={{maxWidth:'170px'}}/>
                <Box sx={{display:'flex',gap:'10px'}}>
                    <Button variant='outlined' sx={{border:'1.5px solid #0DC143',color:'#0DC143',width:'66px',height:'66px',borderRadius:'33px','@media (max-width:400px)':{width:'55px',height:'55px',borderRadius:'28px'}}}>
                        <WhatsApp sx={{width:'35px',height:'35px','@media (max-width:400px)':{width:'28px',height:'28px'}}}/>
                    </Button>
                    <Button variant='outlined' sx={{border:'1.5px solid #E1306C',color:'#E1306C',width:'66px',height:'66px',borderRadius:'33px','@media (max-width:400px)':{width:'55px',height:'55px',borderRadius:'28px'}}}>
                        <Instagram sx={{width:'35px',height:'35px','@media (max-width:400px)':{width:'28px',height:'28px'}}}/>
                    </Button>
                    <Button variant='outlined' sx={{border:'1.5px solid #41B7E9',color:'#41B7E9',width:'66px',height:'66px',borderRadius:'33px','@media (max-width:400px)':{width:'55px',height:'55px',borderRadius:'28px'}}}>
                        <Twitter sx={{width:'35px',height:'35px','@media (max-width:400px)':{width:'28px',height:'28px'}}}/>
                    </Button>
                </Box>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:'16px','@media (max-width:400px)':{gap:'10px'}}}>
                <Link style={{fontWeight:'700'}}>О компании</Link>
                <Link>Услуги</Link>
                <Link>Цены</Link>
                <Link>Отзывы</Link>
                <Link>Контакты</Link>
                <Link>Вакансии</Link>
                <Link>Соглашение о персональных данных</Link>
                <Link>Условия использования</Link>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:'16px','@media (max-width:400px)':{gap:'10px'}}}>
                <Link style={{fontWeight:'700'}}>Полезное</Link>
                <Link>Как работает наш сервис</Link>
                <Link>Как покупать с оператором</Link>
                <Link>Ответы на частые вопросы</Link>
                <Link>Популярные магазины</Link>
                <Link>Черный список магазинов</Link>
                <Link>Актуальные распродажи</Link>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:'16px','@media (max-width:400px)':{gap:'10px'}}}>
                <Link style={{fontWeight:'700'}}>Спецпроекты</Link>
                <Link>50% на первую доставку</Link>
                <Link>Скидки для постоянных клиентов</Link>
                <Link>Реферальная программа</Link>
                <Link>Кэшбек Mr. Rebates и Rakuten</Link>
                <Link>Stop Fraud</Link>
            </Box>
        </Box>
        <Box sx={{width:'100%',height:'1px',bgcolor:'#C0C9D7'}}></Box>
        <Typography sx={{fontSize:'13px',fontWeight:'300',textAlign:'center','@media (max-width:400px)':{fontSize:'11px',lineHeight:'1.5'}}}>
            © 2021 Okeypost . Все права защищены.
        </Typography>
    </Box>
  )
}