import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="text-zinc-100 bg-zinc-900 min-h-screen p-4 md:p-8">

      <div className="relative h-64 md:h-96 overflow-hidden rounded-lg mb-8">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Books banner"
          className="absolute left-0 top-0 w-full h-full object-cover opacity-65"
        />
    
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl md:text-4xl text-white font-bold text-center opacity-70">
            Welcome To Our SellerManic!
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-center">About This Site</h2>
        <p className="leading-relaxed text-zinc-300">
          Here at our online <Link to={"/"} className='text-yellow-300'>SellerManic</Link>, we believe each book can transport, inspire, 
          and spark the imagination. Our carefully curated collection aims to meet 
          the interests of every kind of reader.
        </p>
        <p className="leading-relaxed text-zinc-300">
          It aims to bring the joy of reading to everyone. 
          We believe that books have the power to educate, inspire, and transform lives.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-16 bg-zinc-800 pb-4 rounded-lg px-4">
        <h2 className="text-3xl font-semibold text-zinc-300 mb-4 text-center pt-4">What Makes Us Unique</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-zinc-700 p-6 rounded-lg text-center">
            <div className="text-yellow-500 text-5xl mb-4">
              <i className="fas fa-book"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Curated Collection</h3>
            <p className="text-zinc-400">
              We handpick each title to ensure quality and diversity.
            </p>
          </div>
          <div className="bg-zinc-700 p-6 rounded-lg text-center">
            <div className="text-yellow-500 text-5xl mb-4">
              <i className="fas fa-truck"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-zinc-400">
              Enjoy same-day shipping and swift delivery services.
            </p>
          </div>
          <div className="bg-zinc-700 p-6 rounded-lg text-center">
            <div className="text-yellow-500 text-5xl mb-4">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
            <p className="text-zinc-400">
              I am always here to assist you with any questions or concerns.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mb-12 bg-zinc-800 p-6 rounded-lg flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk"
          alt="Bhupesh Bora"
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="flex-1 max-md:text-center">
          <h2 className="text-xl font-semibold mb-2">Made By Bhupesh Bora</h2>
          <p className="text-zinc-400">
            Hi! I'm a final-year BTech student and the creator of this website.
            My goal is to promote the magic of reading by making great books accessible to everyone.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4">A Note From Us</h3>
        <p className="text-zinc-400">
          “Thank you for visiting our website. We hope you discover stories that touch your heart, 
          fuel your passions, and enrich your life.”
        </p>
      </div>
    </div>
  );
};

export default AboutUs;