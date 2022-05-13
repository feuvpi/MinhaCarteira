import React from 'react'
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import jumboImg from '../assets/scott-graham-5fNmWej4tAA-unsplash.jpg'


const Support = () => {
  return (
    //Image
    <div name="support" className="w-full mt-24">
        <div className="w-full h-auto md:h-4/6 bg-gray-600/90 absolute overflow-hidden">
            <img className="w-full h-full object-cover mix-blend-overlay" src={jumboImg} alt="/" />
        </div>

        <div className="max-w-[1240px] mx-auto relative">
            <div className="px-4 py-12 text-white">
                <h2 className="text-2xl pt-8 text-slate-300 uppercase text-center">Support</h2>
                <h3 className="text-5xl font-bold py-6 text-center">Finding the right solutions.</h3>
                <p className="text-xl py-2 text-center font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iusto.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20">
                <div className="bg-white rounded-xl shadow-2xl">
                    <div className="pt=8">
                        <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg ml-4 mt-[-1rem]" />
                        <h3 className="font-bold text-2xl my-6">TECHNICAL SUPPORT</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi sunt non dignissimos voluptates dolore eius!</p>
                    </div>
                    <div className="bg-slate-100 pl-8 py-4">
                        <p className="flex items-center text-indigo-600 font-semibold">Contact Us <ArrowSmRightIcon className="w-16 p-3"/></p>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-2xl">
                    <div className="pt=8">
                        <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg ml-4 mt-[-1rem]" />
                        <h3 className="font-bold text-2xl my-6">FEATURE BACKLOG</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    </div>
                    <div className="bg-slate-100 pl-8 py-4">
                        <p className="flex items-center text-indigo-600 font-semibold">Contact Us <ArrowSmRightIcon className="w-16 p-3"/></p>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Support