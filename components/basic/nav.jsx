import Link from "next/link";

import Logo from "@/components/basic/logo";

const Nav = () => {
    return (
        <header className="text-9xl text-center fixed z-10 w-full left-0 pointer-events-none">
            <div className="container">
                <Logo />
                <div className="w-2/3 mt-8 mx-auto px-14 mix-blend-screen bg-[left_10px_top_1rem] bg-[length:100%] pointer-events-auto">
                    <div className="flex flex-row justify-around pl-3 relative">
                        <Link draggable="false" className="inline-block px-6 py-2.5 bg-primary text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" href="/about">
                            <span className="relative">About</span>
                        </Link>
                        <Link draggable="false" className="inline-block px-6 py-2.5 bg-primary text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" href="/login">
                            <span className="relative">Game</span>
                        </Link>
                        <Link draggable="false" className="inline-block px-6 py-2.5 bg-primary text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" href="/">
                            <span className="relative">Home</span>
                        </Link>
                        <Link draggable="false" className="inline-block px-6 py-2.5 bg-primary text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" href="/ranks">
                            <span className="relative">Ranks</span>
                        </Link>
                        <Link draggable="false" className="inline-block px-6 py-2.5 bg-primary text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" href="/contact">
                            <span className="relative">Contact Us</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav;