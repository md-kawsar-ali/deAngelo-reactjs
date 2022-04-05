import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-white border-b'>
            <div className='container mx-auto flex justify-between items-center px-20 py-7'>
                <Link to="/">
                    <strong className='text-xl font-bold text-green-600'><span className='text-orange-600'>DeAngelo</span> Ventures</strong>
                </Link>

                <nav className='flex gap-6 text-slate-600 text-md font-semibold'>
                    <Link to='/'>Home</Link>
                    <Link to='/reviews'>Reviews</Link>
                    <Link to='/analytics'>Analytics</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/about'>About</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;