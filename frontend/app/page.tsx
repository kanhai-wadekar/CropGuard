'use client'
import Image from "next/image";
import React, { useState } from "react";
import Popout from "./components/popout"
import Login from "./components/login"
import { title_font } from './fonts'
import title from "./public/newTitle.png"
import Dash from "./components/dashboard"

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState<string>("");

    const handleLogin = (user: string) => {
        setIsLoggedIn(true);
        setUsername(user);
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername("");
    }

    return (
        <div>
            <div className="z-10 w-screen h-screen items-center justify-around font-mono text-sm lg:flex-col bg-[url('./public/grassback.jpg')] bg-cover bg-no-repeat bg-center">
                <div className="h-3/4 text-8xl text-black w-full text-center flex-col">
                    <div className="flex-col h-1/4 w-screen">
                        <div className="flex w-full">
                            <div className="flex items-start justify-start p-2 w-1/2">
                                {/* Placeholder */}
                            </div>
                            <div className="flex items-start justify-end p-2 w-1/2">
                                <div className="text-6xl text-black">
                                    <div id="login" className="text-gray-500 hover:text-gray-700">
                                        <Login isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Title */}
                    <div className={`flex justify-center w-screen hover:scale-110 transition-all ease-in-out ${title_font.className}`}>
                        <Image
                            src={title}
                            width={300}
                            height={300}
                            alt="Faulty Farming"
                            className="justify-cente w-2/3"
                        />
                    </div>
                    <div className="h-3/4 flex text-white items-center justify-center text-center align-middle">
                        {/* Content */}
                        <Popout username={username}/>
                    </div>
                </div>
            </div>

            {/* About Faulty Farming Section */}
            <div className="flex-col bg-stone-800 h-screen items-center justify-center text-center text-6xl p-20 space-y-20 w-screen">
                <div className="flex justify-center w-full items-center">
                    <div className="w-1/2 pb-12">
                        {isLoggedIn && (
                            <Dash username={username} />
                        )}
                    </div>
                </div>
                <b> About Faulty Farming</b>
                <div className="flex items-center justify-center text-center text-2xl">
                    <p className="w-2/3">Faulty Farming is a project that utilizes cutting edge computer vision technology to empower farmers. By identifying unhealthy crops, we enable farmers to focus on sustainable agriculture practices. </p>
                </div>
                <div>
                    <b> Tech</b>
                </div>
                <div className="flex items-center justify-center text-center text-2xl">
                    <p className="w-2/3">We utilized Next.js, Tailwind CSS, and TypeScript for our frontend, incorporating various UI frameworks. Our Python backend hosts an ML model built with PyTorch and stores data with SQLite.</p>
                </div>
            </div>
        </div>
    );
}
