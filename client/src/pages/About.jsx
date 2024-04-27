import React from 'react';

export default function About() {
  return (
    
    <div className='py-20 px-4 max-w-6xl mx-auto bg-gradient-to-r from-purple-800 to-indigo-900 text-white shadow-lg rounded-lg'
    style={{
      backgroundImage: `url('https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
      <h1 className='text-4xl font-bold mb-8 text-gray-100'>About KL Estate</h1>
      <p className='mb-6 text-lg text-gray-200'>
        KL Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
      </p>
      <p className='mb-6 text-lg text-gray-200'>
        Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='mb-8 text-lg text-gray-200'>
        Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
      </p>
    </div>
  );
}
