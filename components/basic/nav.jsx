import Link from "next/link";

import Logo from "@/components/basic/logo";

const Nav = () => {
    return (
        <header className="text-9xl text-center fixed z-10 w-full left-0 pointer-events-none">
            <div className="container">
                <Logo />
                <div className="w-2/3 mt-8 mx-auto text-sm px-14 mix-blend-screen bg-[left_10px_top_1rem] bg-[length:100%] pointer-events-auto">
                    <div className="flex flex-row justify-around font-press pl-3 relative">
                        <Link draggable="false" className="relative px-6 py-3 text-white rounded-lg group" href="/about">
                            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                            <span className="relative">About</span>
                        </Link>
                        <Link draggable="false" className="relative px-6 py-3 text-white rounded-lg group" href="/login">
                            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                            <span className="relative">Game</span>
                        </Link>
                        <Link draggable="false" className="relative px-6 py-3 text-white rounded-lg group" href="/">
                            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                            <span className="relative">Home</span>
                        </Link>
                        <Link draggable="false" className="relative px-6 py-3 text-white rounded-lg group" href="/ranks">
                            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                            <span className="relative">Ranks</span>
                        </Link>
                        <Link draggable="false" className="relative px-6 py-3 text-white rounded-lg group" href="/contact">
                            <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                            <span className="relative">Contact Us</span>
                        </Link>
                        {/* {
                            new Array(100).fill(1).map((val,index) => (
                                <div className="particle z-[-1]" key={index}></div>
                            ))
                        } */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav;