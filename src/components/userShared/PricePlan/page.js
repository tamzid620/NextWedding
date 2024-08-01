/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const PricePlan = () => {
    return (
        <div className='bg-white text-center py-28 lg:px-14 md:px-0 sm: px-0'>
            <h1 className='text-4xl mb-3'>Pricing Plans</h1>
            <h2 className='text-sm text-gray-500'>A stranger's squire</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm: grid-cols-1 gap-10 mt-20'>
                {/* Standard package  */}
                <div className='border-t-2 border-gray-100 shadow-lg shadow-gray-400 py-16 '>
                    <h1 className='text-3xl mb-3 uppercase'>Standard</h1>
                    <p  className='text-3xl mt-3'> <sup>$</sup>291</p>
                    <p  className='text-xl mt-3'>Month</p>
                    <p  
                    style={{ fontFamily: "Lora, serif" }}
                    className='my-8 text-xl text-gray-500'>
                    <span>Relaxing Masages</span> <br/>
                    <span>Manicure & Pedicure</span>  <br/>
                    <span>Body Polish</span>   <br/>
                    <span>Face Treatment</span>  <br/>
                    </p>
                    <button className='bg-gray-500 text-white rounded-sm mt-5 lg:px-28 md:px-20 sm: px-28 py-4 hover:bg-gray-400'>Buy</button>
                </div>
                {/* PREMIUM package  */}
                <div className='border-t-2 border-gray-100 shadow-lg shadow-gray-400 py-16'>
                    <h1 className='text-3xl mb-3'>PREMIUM</h1>
                    <p  className='text-3xl mt-3'> <sup>$</sup>391</p>
                    <p  className='text-xl mt-3'>Month</p>
                    <p  
                    style={{ fontFamily: "Lora, serif" }}
                    className='my-8 text-xl text-gray-500'>
                    <span>Relaxing Masages</span> <br/>
                    <span>Manicure & Pedicure</span>  <br/>
                    <span>Body Polish</span>   <br/>
                    <span>Face Treatment</span>  <br/>
                    </p>
                    <button className='bg-gray-500 text-white  rounded-sm mt-5 lg:px-28 md:px-20 sm: px-28 py-4 hover:bg-gray-400'>Buy</button>
                </div>
                {/* Premium package  */}
                <div className='border-t-2 border-gray-100 shadow-lg shadow-gray-400 py-16'>
                    <h1 className='text-3xl mb-3'>Premium</h1>
                    <p  className='text-3xl mt-3'> <sup>$</sup>491</p>
                    <p  className='text-xl mt-3'>Month</p>
                    <p  
                    style={{ fontFamily: "Lora, serif" }}
                    className='my-8 text-xl text-gray-500'>
                    <span>Relaxing Masages</span> <br/>
                    <span>Manicure & Pedicure</span>  <br/>
                    <span>Body Polish</span>   <br/>
                    <span>Face Treatment</span>  <br/>
                    </p>
                    <button className='bg-gray-500 text-white rounded-sm mt-5 lg:px-28 md:px-20 sm: px-28 py-4 hover:bg-gray-400'>Buy</button>
                </div>
            </div>
        </div>
    );
};

export default PricePlan;