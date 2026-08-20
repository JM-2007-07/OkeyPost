import { East, West } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import img1 from '../assets/Group 5.svg'
import img2 from '../assets/Иконка.svg'
import img3 from '../assets/Иконка (1).svg'
import img4 from '../assets/Иконка (2).svg'
import img5 from '../assets/Иконка (3).svg'
import img6 from '../assets/Иконка (4).svg'
import img7 from '../assets/Иконка (5).svg'
import img8 from '../assets/Иконка (6).svg'
import img9 from '../assets/Иконка (7).svg'
import img10 from '../assets/Иконка (8).svg'
import flag1 from '../assets/фон.svg'
import flag2 from '../assets/фон (1).svg'
import clothes1 from '../assets/Layer 1 1.svg'
import clothes2 from '../assets/Layer 2 1.svg'
import clothes3 from '../assets/Layer 3 1.svg'

export default function Example() {
    const types = [
        {name:'Одежда',img:img1},
        {name:'Электроника',img:img2},
        {name:'Аксессуары',img:img3},
        {name:'Для детей',img:img4},
        {name:'Для спорта',img:img5},
        {name:'Косметика',img:img6},
    ]
    const products = [
        {name:'Columbia Barlow Pass 550 Turbodown Jacket',img:clothes1,small:clothes2,russia:'7891,46₽',uk:'£80.62',delivery:'£7.79',saving:'$119.56'},
        {name:'Другой товар',img:clothes2,small:clothes3,russia:'6590,00₽',uk:'£65.40',delivery:'£6.50',saving:'$98.20'},
        {name:'Третий товар',img:clothes3,small:clothes1,russia:'9200,00₽',uk:'£95.20',delivery:'£8.20',saving:'$125.40'}
    ]
    const [current,setCurrent] = useState(0)
    const nextClothes = () => setCurrent(prev => (prev + 1) % products.length)
    const prevClothes = () => setCurrent(prev => (prev - 1 + products.length) % products.length)
    const product = products[current]
    const prevProduct = products[(current - 1 + products.length) % products.length]
    const nextProduct = products[(current + 1) % products.length]

    return (
        <>
        <style>{`@keyframes fadeIn{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}`}</style>
        <Box sx={{width:'1400px',margin:'auto',mt:'100px',display:'flex',flexDirection:'column',gap:'40px','@media (max-width:400px)':{width:'100%',mt:'45px',px:'15px',gap:'25px',boxSizing:'border-box'}}}>
            <Typography sx={{fontWeight:'800',fontSize:'44px',width:'500px','@media (max-width:400px)':{fontSize:'32px',width:'100%',lineHeight:'1.15'}}}>
                Насколько выгодно покупать?
            </Typography>
            <Box sx={{display:'flex',width:'100%',justifyContent:'space-around',alignItems:'center',borderRadius:'16px',boxShadow:'0px 0px 50px #8A8A8A2C','@media (max-width:400px)':{justifyContent:'space-between',overflow:'hidden'}}}>
                <IconButton sx={{color:'#01CD7D','@media (max-width:400px)':{p:'5px'}}}>
                    <West/>
                </IconButton>
                <Box sx={{display:'flex','@media (max-width:400px)':{overflowX:'auto',width:'100%',scrollbarWidth:'none','&::-webkit-scrollbar':{display:'none'}}}}>
                    {types.map((el,i) => (
                        <Box key={i} sx={{height:'100px',padding:'0px 25px',"&:hover":{bgcolor:'#F2F6FC'},display:'flex',alignItems:'center',gap:'10px','@media (max-width:400px)':{minWidth:'110px',height:'85px',padding:'0 10px',justifyContent:'center',flexDirection:'column',gap:'4px'}}}>
                            <img src={el.img} alt="" style={{maxWidth:'45px',maxHeight:'45px'}}/>
                            <Typography sx={{fontWeight:'700','@media (max-width:400px)':{fontSize:'12px',whiteSpace:'nowrap'}}}>
                                {el.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>
                <IconButton sx={{color:'#01CD7D','@media (max-width:400px)':{p:'5px'}}}>
                    <East/>
                </IconButton>
            </Box>
            <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center','@media (max-width:400px)':{flexDirection:'column',gap:'20px'}}}>
                <Box sx={{display:'flex',flexDirection:'column',width:'400px',gap:'40px',color:'#1F2428','@media (max-width:400px)':{width:'100%',gap:'15px',order:2}}}>
                    <Typography sx={{fontSize:'26px',fontWeight:'700','@media (max-width:400px)':{fontSize:'21px',textAlign:'center',lineHeight:'1.25'}}}>
                        {product.name}
                    </Typography>
                    <Box sx={{width:'100%',height:'120px',borderRadius:'16px',bgcolor:'#F2F6FC',display:'flex',alignItems:'center',gap:'20px',px:'25px','@media (max-width:400px)':{height:'90px',px:'15px',gap:'12px',boxSizing:'border-box'}}}>
                        <img src={flag1} width={75} alt="" style={{maxWidth:'55px'}}/>
                        <Box sx={{display:'flex',flexDirection:'column'}}>
                            <Typography sx={{fontSize:'18px','@media (max-width:400px)':{fontSize:'14px'}}}>
                                Цена в России
                            </Typography>
                            <Typography sx={{fontWeight:'700',fontSize:'26px','@media (max-width:400px)':{fontSize:'21px'}}}>
                                {product.russia}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{width:'500px',height:'500px',borderRadius:'225px',bgcolor:'#F2F6FC',display:'flex',justifyContent:'center',alignItems:'center',overflow:'hidden','@media (max-width:400px)':{width:'280px',height:'280px',borderRadius:'50%',order:1}}}>
                    <img key={current} src={product.img} height={500} alt="" style={{height:'500px',width:'auto',maxWidth:'100%',objectFit:'contain',animation:'fadeIn .4s ease'}}/>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',width:'400px',gap:'40px',color:'#1F2428','@media (max-width:400px)':{width:'100%',gap:'15px',order:3}}}>
                    <Typography sx={{fontSize:'26px',fontWeight:'700',textAlign:'end','@media (max-width:400px)':{fontSize:'21px',textAlign:'center',lineHeight:'1.25'}}}>
                        Доставка одежды из Великобритании от <span style={{color:'#01CD7D'}}>{product.delivery}</span>
                    </Typography>
                    <Box sx={{width:'100%',justifyContent:'end',height:'120px',borderRadius:'16px',bgcolor:'#F2F6FC',display:'flex',alignItems:'center',gap:'20px',px:'25px','@media (max-width:400px)':{height:'90px',px:'15px',gap:'12px',boxSizing:'border-box'}}}>
                        <img src={flag2} width={75} alt="" style={{maxWidth:'55px'}}/>
                        <Box sx={{display:'flex',flexDirection:'column'}}>
                            <Typography sx={{fontSize:'18px','@media (max-width:400px)':{fontSize:'14px'}}}>
                                Цена в UK
                            </Typography>
                            <Typography sx={{fontWeight:'700',fontSize:'26px',color:'#01CD7D','@media (max-width:400px)':{fontSize:'21px'}}}>
                                {product.uk}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{width:'100%',display:'flex',mb:'100px',justifyContent:'space-between',alignItems:'center','@media (max-width:400px)':{mb:'25px',gap:'5px'}}}>
                <Box sx={{display:'flex',alignItems:'center',gap:'40px','@media (max-width:400px)':{gap:'5px'}}}>
                    <Box sx={{width:'120px',height:'120px',borderRadius:'225px',bgcolor:'#F2F6FC',display:'flex',justifyContent:'center',alignItems:'center',overflow:'hidden','@media (max-width:400px)':{width:'65px',height:'65px'}}}>
                        <img key={`prev-${current}`} src={prevProduct.img} alt="" style={{height:'120px',width:'auto',objectFit:'contain',animation:'fadeIn .4s ease',maxWidth:'100%'}}/>
                    </Box>
                    <IconButton onClick={nextClothes} sx={{color:'#01CD7D','@media (max-width:400px)':{p:'4px'}}}>
                        <West/>
                    </IconButton>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',gap:'8px',textAlign:'center','@media (max-width:400px)':{gap:'3px',flex:1}}}>
                    <Typography sx={{fontSize:'18px','@media (max-width:400px)':{fontSize:'11px',lineHeight:'1.2'}}}>
                        Срок доставки примерно 10 дней
                    </Typography>
                    <Typography sx={{fontWeight:'700',fontSize:'26px','@media (max-width:400px)':{fontSize:'14px',lineHeight:'1.2'}}}>
                        Вы экономите до <span style={{color:'#01CD7D'}}>{product.saving}</span>
                    </Typography>
                </Box>
                <Box sx={{display:'flex',alignItems:'center',gap:'40px','@media (max-width:400px)':{gap:'5px'}}}>
                    <IconButton onClick={prevClothes} sx={{color:'#01CD7D','@media (max-width:400px)':{p:'4px'}}}>
                        <East/>
                    </IconButton>
                    <Box sx={{width:'120px',height:'120px',borderRadius:'225px',bgcolor:'#F2F6FC',display:'flex',justifyContent:'center',alignItems:'center',overflow:'hidden','@media (max-width:400px)':{width:'65px',height:'65px'}}}>
                        <img key={`next-${current}`} src={nextProduct.img} alt="" style={{height:'120px',width:'auto',objectFit:'contain',animation:'fadeIn .4s ease',maxWidth:'100%'}}/>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display:'flex',width:'100%',justifyContent:'space-around',alignItems:'center',borderRadius:'16px',boxShadow:'0px 0px 50px #8A8A8A2C',padding:'10px','@media (max-width:400px)':{flexDirection:'column',padding:'5px'}}}>
                <Box sx={{height:'135px',padding:'0px 25px',"&:hover":{bgcolor:'#F2F6FC'},display:'flex',alignItems:'center',gap:'10px','@media (max-width:400px)':{width:'100%',height:'80px',padding:'0 15px',boxSizing:'border-box'}}}>
                    <img src={img7} alt="" style={{maxWidth:'45px',maxHeight:'45px'}}/>
                    <Typography sx={{fontWeight:'700','@media (max-width:400px)':{fontSize:'13px'}}}>
                        Экономия до 70%
                    </Typography>
                </Box>
                <Box sx={{width:'1px',height:'136px',bgcolor:'#C0C9D7','@media (max-width:400px)':{width:'90%',height:'1px'}}}></Box>
                <Box sx={{height:'135px',padding:'0px 25px',"&:hover":{bgcolor:'#F2F6FC'},display:'flex',alignItems:'center',gap:'10px','@media (max-width:400px)':{width:'100%',height:'80px',padding:'0 15px',boxSizing:'border-box'}}}>
                    <img src={img8} alt="" style={{maxWidth:'45px',maxHeight:'45px'}}/>
                    <Typography sx={{fontWeight:'700','@media (max-width:400px)':{fontSize:'13px'}}}>
                        Только подлинная продукция
                    </Typography>
                </Box>
                <Box sx={{width:'1px',height:'136px',bgcolor:'#C0C9D7','@media (max-width:400px)':{width:'90%',height:'1px'}}}></Box>
                <Box sx={{height:'135px',padding:'0px 25px',"&:hover":{bgcolor:'#F2F6FC'},display:'flex',alignItems:'center',gap:'10px','@media (max-width:400px)':{width:'100%',height:'80px',padding:'0 15px',boxSizing:'border-box'}}}>
                    <img src={img9} alt="" style={{maxWidth:'45px',maxHeight:'45px'}}/>
                    <Typography sx={{fontWeight:'700','@media (max-width:400px)':{fontSize:'13px'}}}>
                        Оперативная доставка
                    </Typography>
                </Box>
                <Box sx={{width:'1px',height:'136px',bgcolor:'#C0C9D7','@media (max-width:400px)':{width:'90%',height:'1px'}}}></Box>
                <Box sx={{height:'135px',padding:'0px 25px',"&:hover":{bgcolor:'#F2F6FC'},display:'flex',alignItems:'center',gap:'10px','@media (max-width:400px)':{width:'100%',height:'80px',padding:'0 15px',boxSizing:'border-box'}}}>
                    <img src={img10} alt="" style={{maxWidth:'45px',maxHeight:'45px'}}/>
                    <Typography sx={{fontWeight:'700','@media (max-width:400px)':{fontSize:'13px'}}}>
                        Огромный выбор товаров
                    </Typography>
                </Box>
            </Box>
        </Box>
        </>
    )
}