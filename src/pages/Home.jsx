import React from 'react'
import Header from '../components/Header'
import { Box, Typography } from '@mui/material'
import ButtonOP from '../components/ButtonOP'
import Hero from '../components/Hero'
import heroPhoto from '../assets/Иллюстрация.svg'
import heroPhoto2 from '../assets/Иллюстрация (1).svg'
import Example from '../components/Example'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
        <Header/>
        <Hero>
            <Box sx={{display:'flex',flexDirection:'column',gap:'40px',alignItems:'start',color:'white','@media (max-width:400px)':{gap:'25px',width:'100%'}}}>
                <Box>
                    <Typography sx={{fontSize:'72px',fontWeight:'800',width:'850px','@media (max-width:400px)':{fontSize:'36px',width:'100%',lineHeight:'1.1'}}}>
                        Доставка товаров из Великобритании в Россию
                    </Typography>
                    <Typography sx={{fontWeight:'300',fontSize:'20px',width:'700px','@media (max-width:400px)':{fontSize:'16px',width:'100%',lineHeight:'1.5',mt:'15px'}}}>
                        Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.
                    </Typography>
                </Box>
                <ButtonOP>
                    <Typography sx={{fontSize:'17px','@media (max-width:400px)':{fontSize:'14px'}}}>
                        Получить адрес в UK
                    </Typography>
                </ButtonOP>
            </Box>
            <Box sx={{'@media (max-width:400px)':{width:'100%',display:'flex',justifyContent:'center'}}}>
                <img src={heroPhoto} alt="" style={{maxWidth:'100%',height:'auto'}}/>
            </Box>
        </Hero>
        <Example/>
        <Hero>
            <Box sx={{'@media (max-width:400px)':{width:'100%',display:'flex',justifyContent:'center'}}}>
                <img src={heroPhoto2} alt="" style={{maxWidth:'100%',height:'auto'}}/>
            </Box>
            <Box sx={{display:'flex',ml:'50px',flexDirection:'column',gap:'40px',alignItems:'start',color:'white','@media (max-width:400px)':{ml:0,gap:'25px',width:'100%'}}}>
                <Box>
                    <Typography sx={{fontSize:'30px',fontWeight:'700',width:'800px','@media (max-width:400px)':{fontSize:'23px',width:'100%',lineHeight:'1.3'}}}>
                        Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел.
                    </Typography>
                    <Typography sx={{fontWeight:'300',fontSize:'18px','@media (max-width:400px)':{fontSize:'15px',lineHeight:'1.5',mt:'12px'}}}>
                        Такой способ покупки также подойдёт, если магазин принимает только английские карты.
                    </Typography>
                </Box>
                <ButtonOP>
                    <Typography sx={{fontSize:'17px','@media (max-width:400px)':{fontSize:'14px'}}}>
                        Попробовать
                    </Typography>
                </ButtonOP>
            </Box>
        </Hero>
        <Box sx={{display:'flex',width:'1400px',flexDirection:'column',gap:'20px',margin:'auto',mt:'100px',color:'#1F2428','@media (max-width:400px)':{width:'100%',mt:'55px',px:'20px',gap:'15px',boxSizing:'border-box'}}}>
            <Typography sx={{fontSize:'44px',fontWeight:'800','@media (max-width:400px)':{fontSize:'30px',lineHeight:'1.15'}}}>
                Ваш личный адрес в Великобритании для покупок
            </Typography>
            <Typography sx={{fontSize:'18px',fontWeight:'300','@media (max-width:400px)':{fontSize:'15px',lineHeight:'1.6'}}}>
                С нами вы получаете целых два адреса в UK! У нас есть два склада для приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот из них, отправка на который обойдется дешевле (или покупка будет без налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь, а в Манчестер идут гаджеты и всё остальное. С OkeyPost вы всегда получаете максимальную выгоду!
            </Typography>
            <Typography sx={{fontSize:'18px',fontWeight:'300','@media (max-width:400px)':{fontSize:'15px',lineHeight:'1.6'}}}>
                При доставке из UK в Россию все ваши товары обязательно страхуются. Прием посылок на наш склад, их обработка, удаление лишних коробок, хранение сроком до 70 дней – у нас полностью бесплатно. Мы также бесплатно проводим объединение посылок из разных магазинов в одну. Это необходимо для снижения стоимости доставки посылок из UK в Россию.
            </Typography>
            <Typography sx={{fontSize:'18px',fontWeight:'300','@media (max-width:400px)':{fontSize:'15px',lineHeight:'1.6'}}}>
                У нас самая выгодная доставка! От $11.99 за посылку! А если у вас есть какие-то особенные требования, вроде проверки техники или дополнительной пленки для самых хрупких товаров, – операторы нашего склада с радостью выполнят их по спецзапросу.
            </Typography>
            <Typography sx={{fontSize:'18px',fontWeight:'300','@media (max-width:400px)':{fontSize:'15px',lineHeight:'1.6'}}}>
                Okeypost.com – это надежно, быстро и выгодно. А в наших соцсетях вы всегда найдете информацию о лучших скидках fyukbqcrb магазинов. Не обязательно заходить в Черную пятницу или Prime Day, крутые акции проходят каждый день!
            </Typography>
        </Box>
        <Hero>
            <Box sx={{width:'1400px',display:'flex',justifyContent:'space-between',alignItems:'center',color:'white','@media (max-width:400px)':{width:'100%',flexDirection:'column',alignItems:'flex-start',gap:'25px'}}}>
                <Typography sx={{fontSize:'30px',fontWeight:'700',width:'480px','@media (max-width:400px)':{fontSize:'23px',width:'100%',lineHeight:'1.3'}}}>
                    Подпишитеть и будьте в курсе всех скидок и акций магазинов Великобритании!
                </Typography>
                <Box sx={{display:'flex',gap:'25px',alignItems:'center','@media (max-width:400px)':{width:'100%',flexDirection:'column',gap:'15px',alignItems:'stretch'}}}>
                    <input type="text" placeholder="Введите ваш email" style={{width:'500px',outline:'none',height:'50px',border:'none',borderBottom:'1px solid white',color:'white',background:'transparent',boxSizing:'border-box'}} name="" id="" />
                    <ButtonOP>
                        <Typography sx={{fontSize:'17px','@media (max-width:400px)':{fontSize:'14px'}}}>
                            Подписаться
                        </Typography>
                    </ButtonOP>
                </Box>
            </Box>
        </Hero>
        <Footer/>
    </>
  )
}