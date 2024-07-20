import React from 'react'
import { HERO } from '../constants'
import profilePic from '../assets/abhinav.png'

const Me = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Hi, I'm <span className="text-purple-500">Abhinav</span></h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Software Engineer</span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO}
                        </p>

                    </div>
                </div>
                <div className="w-2/3 lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={profilePic} alt="profile" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Me;  
