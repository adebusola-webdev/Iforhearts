import React from 'react'
import HeroSection from '../component/HeroSection';
import CreatePersonalizedsteps from '../component/CreatePersonalizedsteps';

const Fathersday = () => {
    const stepsData = [
        {
          image: 'path/to/image1.png',
          title: 'DESIGN YOUR LOVEMOJIS TO LOOK JUST LIKE YOU!',
          description: 'Choose your eyes, hair, skin tone and more for each LoveMoji®. Your LoveMojis® will now automatically appear throughout your book.'
        },
        {
          image: 'path/to/image2.png',
          title: 'CUSTOMIZE YOUR BOOK COVER',
          description: 'Pick a cover design that reflects your personality and the message you want to convey.'
        },
        {
          image: 'path/to/image3.png',
          title: 'FINALIZE AND ORDER',
          description: 'Review your book and place your order. Your personalized book will be delivered to you.'
        }
      ];
  return (
    <>
    <HeroSection
   title="This Holiday, Tell Them WHY You Love Them!"
   subtitle="The original, personalized gift book that lets you list all those special reasons why you love someone.
   "
   buttonText="Create a book now!"
   buttonLink="/create-book"
   image='https://res.cloudinary.com/dvidoaowm/image/upload/v1726655318/IMG_4432_h8ilhl.jpg'
 />
<CreatePersonalizedsteps
   mainTitle="Create a personalized book in 3 steps"
   subTitle="Expressing why someone is special has never been this easy and fun! Each Book is a personalized collection of all the little reasons why you love or appreciate someone. Customize your book as much or as little as you'd like."
   steps={stepsData}
 />
   
  
</>
  
  )
}

export default Fathersday