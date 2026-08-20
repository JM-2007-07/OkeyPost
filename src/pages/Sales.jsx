import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { Box, Button, Typography } from '@mui/material'
import { Instagram, Twitter, WhatsApp } from '@mui/icons-material'
import { Link } from 'react-router'
import ButtonOP from '../components/ButtonOP'
import img1 from "../assets/фон.png"
import img2 from "../assets/фон (1).png"
import img3 from "../assets/фон (2).png"
import img4 from "../assets/фон (3).png"
import img5 from "../assets/фон (4).png"
import img6 from "../assets/фон (5).png"
import img7 from "../assets/фон (6).png"
import img8 from "../assets/фон (7).png"

export default function Sales() {

    const products = [
        {
            id:1,
            img:img1,
            name:'Abercrombie & Fitch',
            text1:'цены от £7.99 (3365₽) разделе: мужские вещи: CLEARANCE женские вещи: CLEARANCE',
            text2:'качественные детские вещи на Abercrombie kids'
        },
        {
            id:2,
            img:img2,
            name:'Timberland',
            text1:'NEW! Коллаб Tommy Hilfiger x Timberland!',
            text2:'Ботинки от £7.99 (3365₽) Зимние шапки за £7.99 (3365₽)'
        },
        {
            id:3,
            img:img3,
            name:'Polo Ralph Lauren',
            text1:'Рубашка за £7.99 (3365₽) Худи за £7.99 (3365₽) Свитшот с лого за £7.99 (3365₽)',
            text2:'До - 40% в разделе SALE'
        },
        {
            id:4,
            img:img4,
            name:'Hollister Co.',
            text1:'цены от £7.99 (3365₽) разделе: мужские вещи: CLEARANCE женские вещи: CLEARANCE',
            text2:''
        },
        {
            id:5,
            img:img5,
            name:'Michael Kors',
            text1:'Новая коллекция! Michael Kors x 007 (James Bond)',
            text2:'HOLIDAY HEAD START - 60% на сумки, обувь и одежду'
        },
        {
            id:6,
            img:img6,
            name:'Аутлет Saks OFF 5TH',
            text1:'Black Friday Early Access Брендовые шапки, шарфы и перчатки - 60% OFF',
            text2:'Shop Pajar, Sorel, UGG, Calvin Klein Jeans, Tommy Hilfiger'
        },
        {
            id:7,
            img:img7,
            name:"Victoria's Secret",
            text1:'Лосьоны и мисты за £7.99 (3365₽) 7 трусиков за £7.99 (3365₽) Халаты за £7.99 (3365₽)',
            text2:'Потрать £7.99 (3365₽) - получи купон на $25 на следующий заказ'
        },
        {
            id:8,
            img:img8,
            name:'levi.com',
            text1:'Джинсы от £7.99 (3365₽)',
            text2:'Скидка 30% на заказы от $100 с кодом TREAT30'
        },
    ]

    return (
        <>
            <Header/>

            <Hero>
                <Box sx={{display:'flex',flexDirection:'column',gap:'40px',alignItems:'start',color:'white','@media (max-width:400px)':{width:'100%',gap:'25px'}}}>

                    <Box sx={{display:'flex',gap:'6px','@media (max-width:400px)':{fontSize:'14px'}}}>
                        <Link to={'/'}>Главная</Link>
                        /
                        <Link to={'/sales'}>Распродажи</Link>
                    </Box>

                    <Box>
                        <Typography sx={{fontSize:'48px',fontWeight:'800','@media (max-width:400px)':{fontSize:'36px',lineHeight:'1.1'}}}>
                            Распродажи
                        </Typography>

                        <Typography sx={{fontWeight:'700',fontSize:'24px','@media (max-width:400px)':{fontSize:'18px',lineHeight:'1.3',mt:'10px'}}}>
                            ранний доступ к распродажам в магазинах
                        </Typography>
                    </Box>

                    <ButtonOP>
                        <Typography sx={{fontSize:'17px','@media (max-width:400px)':{fontSize:'14px'}}}>
                            Получить адрес в UK
                        </Typography>
                    </ButtonOP>
                </Box>
            </Hero>

            <Box sx={{width:'1400px',margin:'auto',mt:'100px',display:'flex',flexDirection:'column',gap:'50px',color:'#1F2428','@media (max-width:400px)':{width:'100%',mt:'55px',px:'20px',gap:'35px',boxSizing:'border-box'}}}>

                <Box sx={{display:'flex',flexDirection:'column',maxWidth:'800px'}}>
                    <Typography sx={{fontSize:'44px',fontWeight:'800','@media (max-width:400px)':{fontSize:'30px',lineHeight:'1.2'}}}>
                        Black Friday Early Access ранний доступ к распродажам в магазинах Великобритании!
                    </Typography>
                </Box>

                <Box sx={{display:'grid',gridTemplateColumns:'1fr 1fr',gridTemplateRows:'auto auto auto auto auto',gap:'40px','@media (max-width:400px)':{display:'flex',flexDirection:'column',gap:'35px'}}}>

                    {products.map((el) => (
                        <Box key={el.id} sx={{display:'flex',alignItems:'center',gap:'40px','@media (max-width:400px)':{flexDirection:'column',alignItems:'stretch',gap:'15px'}}}>

                            <Box sx={{display:'flex',justifyContent:'center','@media (max-width:400px)':{width:'100%'}}}>
                                <img src={el.img} height={328} width={360} alt="" style={{maxWidth:'360px',height:'auto',objectFit:'cover'}}/>
                            </Box>

                            <Box sx={{display:'flex',height:'328px',flexDirection:'column',justifyContent:'space-evenly','@media (max-width:400px)':{height:'auto',gap:'12px'}}}>

                                <Typography sx={{fontWeight:700,fontSize:'24px','@media (max-width:400px)':{fontSize:'20px'}}}>
                                    {el.name}
                                </Typography>

                                <Typography sx={{fontSize:'18px','@media (max-width:400px)':{fontSize:'15px',lineHeight:'1.5'}}}>
                                    {el.text1}
                                </Typography>

                                {el.text2 && (
                                    <Typography sx={{fontSize:'18px','@media (max-width:400px)':{fontSize:'15px',lineHeight:'1.5'}}}>
                                        {el.text2}
                                    </Typography>
                                )}

                                <Button sx={{display:'flex',gap:'12px',width:'fit-content',alignItems:'center',textTransform:'none',padding:'0','@media (max-width:400px)':{padding:0}}}>
                                    <Typography sx={{fontSize:'18px',fontWeight:'700',color:'#01CD7D','@media (max-width:400px)':{fontSize:'15px'}}}>
                                        Только выкуп с оператором →
                                    </Typography>
                                </Button>

                            </Box>
                        </Box>
                    ))}

                </Box>
            </Box>

            <Hero>
                <Box sx={{width:'1400px',display:'flex',justifyContent:'space-between',alignItems:'center',color:'white','@media (max-width:400px)':{width:'100%',flexDirection:'column',alignItems:'flex-start',gap:'25px'}}}>

                    <Typography sx={{fontWeight:700,fontSize:'44px','@media (max-width:400px)':{fontSize:'28px',lineHeight:'1.2'}}}>
                        Остались вопросы? Спросите нас в соцсетях!
                    </Typography>

                    <Box sx={{display:'flex',gap:'10px','@media (max-width:400px)':{alignSelf:'center'}}}>

                        <Button variant='outlined' sx={{border:'1.5px solid white',color:'white',width:'66px',height:'66px',borderRadius:'33px','@media (max-width:400px)':{width:'55px',height:'55px',borderRadius:'28px'}}}>
                            <WhatsApp sx={{width:'35px',height:'35px','@media (max-width:400px)':{width:'28px',height:'28px'}}}/>
                        </Button>

                        <Button variant='outlined' sx={{border:'1.5px solid white',color:'white',width:'66px',height:'66px',borderRadius:'33px','@media (max-width:400px)':{width:'55px',height:'55px',borderRadius:'28px'}}}>
                            <Instagram sx={{width:'35px',height:'35px','@media (max-width:400px)':{width:'28px',height:'28px'}}}/>
                        </Button>

                        <Button variant='outlined' sx={{border:'1.5px solid white',color:'white',width:'66px',height:'66px',borderRadius:'33px','@media (max-width:400px)':{width:'55px',height:'55px',borderRadius:'28px'}}}>
                            <Twitter sx={{width:'35px',height:'35px','@media (max-width:400px)':{width:'28px',height:'28px'}}}/>
                        </Button>

                    </Box>
                </Box>
            </Hero>

            <Footer/>
        </>
    )
}