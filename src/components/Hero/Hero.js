import React from 'react';
import HeroImg from '../../images/hero-img.png';

const Hero = () => {
    return (
        <section className='bg-slate-100'>
            <div className="container mx-auto px-20 py-20 flex justify-between items-center flex-1">
                <div>
                    <h3 className='text-3xl font-bold text-green-600 mb-4'><span className='text-orange-600'>DeAngelo</span> Ventures</h3>
                    <h1 className='text-5xl text-slate-800 font-bold uppercase mb-1 leading-tight'>THE PERFECT CHOICE FOR <br />YOUR VENDING SOLUTIONS</h1>
                    <p className='text-2xl text-slate-700 font-semibold mb-5'>Your satisfaction is what drives us.</p>
                    <button className='text-base uppercase font-semibold text-white bg-green-600  py-3 px-7 rounded-md'>Learn More</button>
                </div>

                <div>
                    <img src={HeroImg} alt="Vending Machine" />
                </div>
            </div>
        </section>
    );
};

export default Hero;