import React from 'react'
import '../styles/shop.css'
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <div className='shop__con'>
        <h1 className='shop_con_header'>
            celebrate love,frienship and family with inkforhearts

        </h1>
    <div className="books_display_main_con">
        <div className="books__con">
            <div className="book__info">
                <img src="https://res.cloudinary.com/dvidoaowm/image/upload/v1726655412/IMG_4437_jcseyc.jpg" alt="" />
                <h2>10 Reasons why i love you</h2>
                <p>love is personal, so the best gift to say 'i love you' could only be a personalised book from inkforhearts</p>
                <div className="price_con">
                    <p>N 25,000</p>
                    <Link className='create_btn here' >create here</Link>
                </div>
            </div>
        </div>
        <div className="books__con">
            <div className="book__info">
                <img src="https://res.cloudinary.com/dvidoaowm/image/upload/v1726655393/IMG_4438_oaal4v.jpg" alt="" />
                <h2>10 Reasons why i love you</h2>
                <p>love is personal, so the best gift to say 'i love you' could only be a personalised book from inkforhearts</p>
                <div className="price_con">
                    <p>N 25,000</p>
                    <Link className='create_btn here' >create here</Link>
                </div>
            </div>
        </div>
        <div className="books__con">
            <div className="book__info">
                <img src="https://res.cloudinary.com/dvidoaowm/image/upload/v1726655332/IMG_4433_ijbkxw.jpg" alt="" />
                <h2>10 Reasons why i love you</h2>
                <p>love is personal, so the best gift to say 'i love you' could only be a personalised book from inkforhearts</p>
                <div className="price_con">
                    <p>N 25,000</p>
                    <Link className='create_btn here' >create here</Link>
                </div>
            </div>
        </div>
        <div className="books__con">
            <div className="book__info">
                <img src="https://res.cloudinary.com/dvidoaowm/image/upload/v1726655318/IMG_4432_h8ilhl.jpg" alt="" />
                <h2>10 Reasons why i love you</h2>
                <p>love is personal, so the best gift to say 'i love you' could only be a personalised book from inkforhearts</p>
                <div className="price_con">
                    <p>N 25,000</p>
                    <Link className='create_btn here' >create here</Link>
                </div>
            </div>
        </div>
        <div className="books__con">
            <div className="book__info">
                <img src="https://res.cloudinary.com/dvidoaowm/image/upload/v1726655379/IMG_4436_ex8sml.jpg" alt="" />
                <h2>10 Reasons why i love you</h2>
                <p>love is personal, so the best gift to say 'i love you' could only be a personalised book from inkforhearts</p>
                <div className="price_con">
                    <p>N 25,000</p>
                    <Link className='create_btn here' >create here</Link>
                </div>
            </div>
        </div>
        <div className="books__con">
            <div className="book__info">
                <img src="https://res.cloudinary.com/dvidoaowm/image/upload/v1726655366/IMG_4435_tfs3vy.jpg" alt="" />
                <h2>10 Reasons why i love you</h2>
                <p>love is personal, so the best gift to say 'i love you' could only be a personalised book from inkforhearts</p>
                <div className="price_con">
                    <p>N 25,000</p>
                    <Link className='create_btn here' >create here</Link>
                </div>
            </div>
        </div>
  
       
    </div>

    </div>
  )
}

export default Shop