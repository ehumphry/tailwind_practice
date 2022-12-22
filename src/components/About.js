import React from 'react';
import HeaderMenu from './HeaderMenu';


export default function About() {
  const color = `hsl(${Math.random() * 360}, 100%, 25%)`;

    return (
      <>
        <HeaderMenu/>
        <div
        className="max-w-3xl mx-auto my-16 p-4 rounded-lg shadow-md lg:px-6 xl:px-8 xxl:px-10"
          style={{ backgroundColor: color}}
        >
      <p className="text-white text-3xl font-bold  pb-8">About Us</p>
      
      <p className="text-gray-100 mt-2 text-xl pb-8">Welcome to PeopleWork, an organization dedicated to helping people find their dream careers and reach their full potential. We offer a variety of resources and services to support individuals in their job search, including resume building, interview coaching, and career counseling. Our team is passionate about empowering people to succeed and we are committed to helping you achieve your goals.</p>
      <p className="text-gray-100 mt-2 text-xl pb-8">At PeopleWork, we believe that everyone has unique talents and abilities that can be cultivated through education and experience. We are proud to support individuals from all walks of life and to provide opportunities for personal and professional growth. Whether you are a recent graduate looking to launch your career or an experienced professional seeking a new challenge, we are here to help you take the next step.</p>
      <p className="text-gray-100 mt-2 text-xl pb-4">Thank you for considering PeopleWork as your partner in your career journey. We look forward to working with you and helping you achieve your dreams.</p>
     
    </div>
      </>
    )
  }