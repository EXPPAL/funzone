import { Tab, Tabs } from "@/components/basic/tabs"
import Burn from "@/components/features/burn"
import Head from "next/head"
import Link from "next/link"
import { FormEvent, useState } from "react"
import { Toaster } from "react-hot-toast"

import Loading from "@/components/basic/loading";

import { ImCross } from "react-icons/im";

import Captcha from "@/components/partials/captcha";

import Register from "@/components/partials/register";

const Login = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [modal, setModal] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cStatus, setCStatus] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setModal(true);
    }

    const updateStatus = (success: boolean) => {
        setCStatus(success);
        setModal(false);
    }
    
    return (
        <>
            <Head>
                <title>FunZone | Game</title>
            </Head>

            <div>
                <Toaster position="top-right" reverseOrder={false} />
            </div>

            <Tabs
                className="w-[300px] mx-auto mt-10 mb-0 divide-x divide-gray-500"
                contentClass="my-auto"
            >

                <Tab title="Login" active>
                    <div className="w-1/2 mx-auto bg-white border rounded-lg py-8 px-28">
                        <form className="space-y-2" onSubmit={handleSubmit}>
                            <div className="text-center">
                                <label className="text-2xl font-medium text-secondary">
                                    † Username †
                                </label>
                                <input
                                    className="font-montserrat border border-[#767676] rounded-[25px] w-full py-3 px-5 bg-[#e6e6e6] mt-2"
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                                <div className="text-right">
                                    <Link
                                        draggable="false"
                                        href="/fuser"
                                        className="text-sm font-medium">
                                        Forgot Username
                                    </Link>
                                </div>
                            </div>

                            <div className="text-center">
                                <label className="text-2xl text-secondary font-medium">
                                    † Password †
                                </label>
                                <input
                                    className="text-dark font-montserrat border border-[#767676] rounded-[25px] w-full py-3 px-5 bg-[#e6e6e6] mt-2"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <div className="text-right">
                                    <Link
                                        draggable="false"
                                        href="/fpass"
                                        className="text-sm font-medium">
                                        Forgot Password
                                    </Link>
                                </div>
                            </div>
                            <p className="text-red-500 text-center">{error}</p>
                            <div className="flex justify-center">
                                <button
                                    draggable="false"
                                    className="inline-block px-6 py-2.5 bg-secondary text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    type="submit"
                                >
                                    {loading ? <Loading /> : "Login"}
                                </button>
                            </div>
                        </form>
                    </div>
                </Tab>
                <Tab title="Register">
                    <Register />
                </Tab>
            </Tabs>
            {modal ? (
                <div className="z-20 absolute top-0 right-0 w-full min-h-screen bg-gray-500/50 flex justify-center items-center">
                    <div className="container max-w-[500px] mx-auto">
                        <div className="bg-black bg-[url('/images/background.jpg')] bg-cover bg-center rounded-lg p-10">
                            <div className="flex justify-end">
                                <button
                                    draggable="false"
                                    className="transition-transform hover:scale-95"
                                    onClick={() => { setModal(false);
                                    setLoading(false);
                                }}
                                >
                                    <ImCross className="" />
                                </button>
                            </div>
                            <Captcha data={updateStatus} />
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Login;