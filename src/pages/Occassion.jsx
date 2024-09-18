import React from 'react'
import HeroSection from '../component/HeroSection';
import CreatePersonalizedsteps from '../component/CreatePersonalizedsteps';

const Occassion = () => {
    const stepsData = [
        {
          image: 'https://res.cloudinary.com/dvidoaowm/image/upload/v1725227571/_f01daf4f-70cd-44e5-ab9e-c269eb91d927_2_yu3mi2.svg',
          title: 'Design Your Avatar to look just like you!',
          description: 'Choose your eyes, hair, skin tone and more for each Avatar. this will now automatically appear throughout your book.'
        },
        {
          image: 'https://res.cloudinary.com/dvidoaowm/image/upload/v1725227571/_f01daf4f-70cd-44e5-ab9e-c269eb91d927_3_vy511c.svg',
          title: 'Customize your book covers',
          description: 'Pick a cover design that reflects your personality and the message you want to convey.'
        },
        {
          image: 'https://res.cloudinary.com/dvidoaowm/image/upload/v1725227588/_f01daf4f-70cd-44e5-ab9e-c269eb91d927_4_ajj7uj.svg',
          title: 'Finalize and order',
          description: 'Review your book and place your order. Your personalized book will be delivered to you.'
        }
      ];
  return (
    <>
    <HeroSection
   title="A BIRTHDAY GIFT THEY WILL LOVE FOREVER"
   subtitle="The original personalized gift book that lets you list all those silly, fun, romantic reasons why you love them.
   "
   buttonText="Create a book now!"
   buttonLink="/create-book"
   image='https://res.cloudinary.com/dvidoaowm/image/upload/v1726655353/IMG_4434_fzjdtx.jpg'
 />
<CreatePersonalizedsteps
   mainTitle="Create a personalized book in 3 steps"
   subTitle="Expressing why someone is special has never been this easy and fun! Each Book is a personalized collection of all the little reasons why you love or appreciate someone. Customize your book as much or as little as you'd like."
   steps={stepsData}
 />
   
  
</>
  
  )
}

export default Occassion