import React from 'react'

import '../styles/home.css'
import { Link } from 'react-router-dom'

import HeroSection from './HeroSection'

import CreatePersonalizedsteps from './CreatePersonalizedsteps'
export const Home = () => {
   
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
    <div>

    <HeroSection
        title="It's your story, tell it and make someone feel special."
        subtitle="Create a personalized book that lists all the reasons why you love someone."
        buttonText="Create a book now!"
        buttonLink="/create-book"
      />
    <CreatePersonalizedsteps
        mainTitle="Create a personalized book in 3 steps"
        subTitle="Expressing why someone is special has never been this easy and fun! Each Book is a personalized collection of all the little reasons why you love or appreciate someone. Customize your book as much or as little as you'd like."
        steps={stepsData}
      />
  


    </div>
  )
}
