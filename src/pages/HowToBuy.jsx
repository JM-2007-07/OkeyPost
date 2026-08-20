import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { Link } from 'react-router'
import ButtonOP from '../components/ButtonOP'
import img1 from '../assets/01 1.svg'
import img2 from '../assets/02 1.svg'
import img3 from '../assets/03 1.svg'
import img4 from '../assets/04 1.svg'
import img5 from '../assets/05 1.svg'
import { Instagram, Twitter, WhatsApp } from '@mui/icons-material'
import Footer from '../components/Footer'

export default function HowToBuy() {

    const data = [
        {
            img: img1,
            num: '01',
            name: 'Получаем адрес для покупок в магазинах Великобритании',
            text: 'Okeypost поможет притвориться американцем и не переплачивать. Для этого нужно зарегистрироваться в нашем сервисе. После регистрации вам станут доступны два адреса в Англии, которые вы сможете указывать при оформлении заказов в интернет-магазинах.'
        },
        {
            img: img2,
            num: '02',
            name: 'Идём за покупками в онлайн-магазины',
            text: 'Выбираем нужные товары в магазинах Англии. Расплачиваемся, как обычно, в качестве адреса доставки указываем координаты одного из складов Okeypost. Оформить покупки можно самостоятельно или с нашей помощью. Вот список того, что покупать нельзя.'
        },
        {
            img: img3,
            num: '03',
            name: 'Следим за перемещением посылки до склада',
            text: 'После оформление заказа магазин пришлет трек-номер посылки на ваш e-mail и отправит вещи на наш склад. Через 5-7 дней покупки придут к нам, мы поместим их в специальное хранилище, закрепленное за вашим аккаунтом.'
        },
        {
            img: img4,
            num: '04',
            name: 'Оплачиваем доставку и покупки отправляются домой',
            text: 'Мы сообщим, когда ваши покупки поступят на склад. Вы сможете заказать что-то еще в других магазинах и отправить все одной посылкой (так выгоднее). До 30 дней покупки будут храниться бесплатно. Когда все товары поступили на склад, выбирайте способ доставки, мы надежно все упакуем и отправим вам, сообщив трек-номер.'
        },
        {
            img: img5,
            num: '05',
            name: 'Получаем посылку и спешим сделать новый заказ',
            text: 'Примерно через 2 недели посылка приедет к вам домой, в пункт выдачи заказов или на почту. Получаем покупки и радуемся :)'
        },
    ]

    return (
        <>

            <Hero>
                <Box sx={{display:'flex',flexDirection:'column',gap:'40px',alignItems:'start',color:'white','@media (max-width:400px)':{width:'100%',gap:'25px'}}}>
                    <Box sx={{display:'flex',gap:'6px','@media (max-width:400px)':{fontSize:'14px'}}}>
                        <Link to={'/'}>Главная</Link>
                        /
                        <Link to={'/how-to-buy'}>Как покупать</Link>
                    </Box>

                    <Box>
                        <Typography sx={{fontSize:'48px',fontWeight:'800','@media (max-width:400px)':{fontSize:'34px',lineHeight:'1.15'}}}>
                            Научим покупать в Великобритании!
                        </Typography>

                        <Typography sx={{fontWeight:'700',fontSize:'24px','@media (max-width:400px)':{fontSize:'19px',mt:'10px'}}}>
                            и экономить до 70%
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

                <Box sx={{display:'flex',flexDirection:'column',maxWidth:'920px',gap:'5px'}}>
                    <Typography sx={{fontSize:'44px',fontWeight:'800','@media (max-width:400px)':{fontSize:'30px',lineHeight:'1.2'}}}>
                        Покупать в Великобритании очень просто
                    </Typography>

                    <Typography sx={{fontWeight:'300',fontSize:'20px','@media (max-width:400px)':{fontSize:'15px',lineHeight:'1.6'}}}>
                        Английские магазины не доставляют в Россию, но это не проблема. С OkeyPost можно покупать по лучшим ценам и экономить на доставке. Мы получим ваши посылки, надежно упакуем и отправим их к вам домой.
                    </Typography>
                </Box>

                {data.map((el,i) => (
                    <Box key={i} sx={{display:'flex',width:'100%',gap:'50px','@media (max-width:400px)':{flexDirection:'column',gap:'20px'}}}>

                        <Box sx={{'@media (max-width:400px)':{display:'flex',justifyContent:'center',width:'100%'}}}>
                            <img src={el.img} alt="" style={{maxWidth:'100%',height:'auto'}}/>
                        </Box>

                        <Box sx={{display:'flex',flexDirection:'column',flex:1}}>
                            <Box sx={{display:'flex',gap:'40px',alignItems:'center','@media (max-width:400px)':{gap:'15px',alignItems:'center'}}}>

                                <Typography sx={{fontSize:'80px',fontWeight:'400',color:'#01CD7D','@media (max-width:400px)':{fontSize:'50px'}}}>
                                    {el.num}
                                </Typography>

                                <Box sx={{width:'1px',height:'80px',bgcolor:'#C0C9D7','@media (max-width:400px)':{height:'55px'}}}></Box>

                                <Typography sx={{fontSize:'24px',fontWeight:'700','@media (max-width:400px)':{fontSize:'18px',lineHeight:'1.3'}}}>
                                    {el.name}
                                </Typography>

                            </Box>

                            <Typography sx={{fontSize:'18px',fontWeight:'300','@media (max-width:400px)':{fontSize:'15px',lineHeight:'1.6',mt:'10px'}}}>
                                {el.text}
                            </Typography>
                        </Box>
                    </Box>
                ))}
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

        </>
    )
}