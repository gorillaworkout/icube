import React, { Component, useEffect,useState } from 'react';   
import './Home.css'
import HorizontalScroll from 'react-scroll-horizontal'
import slide1 from './../../Assets/slide_banner/header-slide-1.png'
import slide2 from './../../Assets/slide_banner/header-slide-2-.jpg'
import slide3 from './../../Assets/slide_banner/header-slide-2.jpg'
import slide4 from './../../Assets/slide_banner/header-slide-3.png'
import BackgroundSlider from 'react-background-slider'
import product1 from './../../Assets/products/bag.jpg'
import product2 from './../../Assets/products/cap.jpg'
import product3 from './../../Assets/products/jacket.jpg'
import product4 from './../../Assets/products/pants.jpg'
import product5 from './../../Assets/products/shoes.jpg'
import product6 from './../../Assets/products/tshirt.jpg'
import contact from './../../Assets/contact-bg.jpg'
// import { Link } from 'react-router-dom'
import {Link} from 'react-scroll'
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Home(){

    const [dataUser,setDataUser] = useState([])
    const [totalCart,setTotalCart]= useState(0)
    const [isLoading,setIsLoading]=useState(true)

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [message,setMessage]=useState('')

    const [messageSave,setMessageSave]=useState(false)


    console.log(dataUser)

    const onName=(e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    const onEmail=(e)=>{
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const onPhone=(e)=>{
        console.log(e.target.value)
        setPhone(e.target.value)
    }

    const onMessage=(e)=>{
        console.log(e.target.value)
        setMessage(e.target.value)
    }

    const onSendMes=()=>{
        

        setMessageSave(true)
        const dataMessage ={
            name,email,phone,message
        }

        axios.post(`http://localhost:4000/user`,{
            dataMessage
        }).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const onSaveMessage=()=>{
        setMessageSave(false)
    }

    const fetchUser=()=>{
        axios.get(`http://localhost:4000/user`)
        .then((dataUser)=>{
            // console.log(dataUser.data)
            setDataUser(dataUser.data)
            setIsLoading(false)

        }).catch((err)=>{
            console.log(err)
        })
    }

    const onAdd=(item)=>{
        setTotalCart(totalCart+1)
    }

    useEffect(()=>{
        fetchUser()
    },[])
    // onClick={() => window.location.replace("/#section-product")}

    if(isLoading){
        return (
            <div>
                <p>LOADING</p>
            </div>
        )
    }


    const toggle=()=>setMessage(false)
    
    return (
        

        <>



            <Modal isOpen={messageSave} size="xl" toggle={toggle}  style={{width:'100%'}}>
                <ModalBody>
                
                    <div className="modal-save">
                        <div className="close" onClick={()=>setMessageSave(false)}>
                            <p>X</p>
                        </div>
                        <div className="modal-mess">
                            <p>THANK YOU FOR </p>
                            <p>CONTACTING</p>
                        </div>
                        <div className="collect-data">
                            <p style={{color:'gray'}}>We Have collect your data as below:</p>
                        </div>

                        <div className="box-message-data">
                            <p>Name:{name}</p>
                            <p>Email:{email}</p>
                            <p>Phone:{phone}</p>
                            <p>Message:{message}</p>
                        </div>

                        <div className="btn-close-mess">
                            <div className="close-btn" onClick={()=>setMessageSave(false)}>
                                <p>CLOSE</p>
                            </div>
                        </div>
                        

                    </div>

                </ModalBody>
            </Modal> 

         




            <div className="outer-home">
                <div className="box-home">
                        <BackgroundSlider 
                        images={[slide1,slide2,slide3,slide4]}
                        duration={10} transition={2} 
                        />
                    <div className="header-home">
                        <div className="left-header">
                            <p>Icube</p>
                        </div>
                        <div className="right-header">
                            <div className="box-option">
                                <Link activeClass="active" to="home" spy={true} smooth={true}>
                                    <p>HOME</p>
                                </Link>
                            </div>
                            <div className="box-option" >
                                <Link  to="section-product" spy={true} smooth={true}>
                                    <p>PRODUCT</p>
                                </Link>
                                {/* <p>PRODUCT</p> */}
                            </div>
                            <div className="box-option">
                                <Link  to="section-contact" spy={true} smooth={true}>
                                    <p>CONTACT</p>
                                </Link>
                            </div>
                            <div className="box-option">
                                <p>CART({totalCart})</p>
                            </div>
                            <div className="box-option2">
                                <p>Hi, {dataUser[0].first_name}</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="header-option">
                        <div className="header-welcome">
                            <p>Welcome To iCube!</p>
                        </div>
                        <div className="header-welcome2">
                            <p>WE DO COMMERCE</p>
                        </div>
                        <div className="header-welcome3">
                            <Link  to="section-product" spy={true} smooth={true}>
                                <p>SHOP NOW</p>    
                            </Link>
                        </div>
                        
                    </div>
                </div>

                <div className="product-box" id="section-product">
                    <div className="container-product">
                        <div className="product-name">
                            <p>PRODUCTS</p>
                            <p>lorem ipsum dolor sit amet jamet</p>
                        </div>

                        <div className="photo-box">
                            <div className="box-atas">
                                <div className="big-photo">
                                    <img src={product6} className="big-photo"></img>
                                </div>
                                <div className="box-atas-kecil">
                                    <div className="canvas-kecil">
                                        <img src={product1} className="canvas-kecil-img"></img>

                                        <div className="box-cart">
                                            <p>Cap</p>
                                            <p>$99</p>
                                            <button className="btn-add" onClick={()=>onAdd('Cap')}>Add to Cart</button>
                                        </div>
                                    </div>
                                    <div className="canvas-kecil">
                                        <img src={product2} className="canvas-kecil-img"></img>
                                        <div className="box-cart">
                                            <p>Bag</p>
                                            <p>$99</p>
                                            <button className="btn-add" onClick={()=>onAdd('Cap')}>Add to Cart</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="box-bawah">
                                <div className="canvas-kecil-bawah">
                                    <img src={product5} className="canvas-kecil"></img>
                                    <div className="box-cart">
                                            <p>Shoes</p>
                                            <p>$99</p>
                                            <button className="btn-add" onClick={()=>onAdd('Shoes')}>Add to Cart</button>
                                        </div>
                                </div>
                                <div className="canvas-kecil-bawah">
                                    <img src={product4} className="canvas-kecil"></img>
                                    <div className="box-cart">
                                            <p>Pants</p>
                                            <p>$99</p>
                                            <button className="btn-add" onClick={()=>onAdd('Pants')}>Add to Cart</button>
                                        </div>
                                </div>
                                <div className="canvas-kecil-bawah">
                                    <img src={product3} className="canvas-kecil"></img>
                                    <div className="box-cart">
                                            <p>Jacket</p>
                                            <p>$99</p>
                                            <button className="btn-add" onClick={()=>onAdd('Jacket')}>Add to Cart</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="contact-box" id="section-contact">
                    {/* <img src={contact} className="contact-box"></img> */}
                    <div className="container-contact">
                        <div className="contact-name">
                            <p>CONTACT US</p>
                            <p>lorem ipsum dolor sit amet jamet</p>
                        </div>

                        <div className="input-box">
                            <div className="input-kiri">
                                <input type='text' placeholder='Your Name *' className="input-isi" onChange={(e)=>onName(e)}></input>
                                <input type='text' placeholder='Your Email *' className="input-isi" onChange={(e)=>onEmail(e)}></input>
                                <input type='text' placeholder='Your Phone *' className="input-isi" onChange={(e)=>onPhone(e)}></input>
                            </div>
                            <div className="input-kanan">
                                <input type='text' placeholder='Your Message *' className="input-isi-2" onChange={(e)=>onMessage(e)}></input>
                            </div>
                        </div>
                        <div className="box-message">
                            <div className="btn-message" onClick={onSendMes}>
                                <p>SEND MESSAGE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}