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
                className="w-[300px] mx-auto mt-10 mb-0 bg_drop divide-x divide-gray-500"
                contentClass="my-auto"
            >

                <Tab title="Login" active>
                    <div className="bg_drop w-1/2 mx-auto bg-black border rounded-lg py-8 px-28">
                        <form className="space-y-2" onSubmit={handleSubmit}>
                            <div className="text-center">
                                <label className="text-2xl font-medium text-white">
                                    <Burn title="† Username †" />
                                </label>
                                <input
                                    className="bg_drop border rounded-lg w-full py-3 px-4 bg-black mt-2"
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
                                <label className="text-2xl text-white font-medium">
                                    <Burn title="† Password †" />
                                </label>
                                <input
                                    className="bg_drop border rounded-lg w-full py-3 px-4 bg-black mt-2"
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
                                    className="bg_drop bg-black border rounded-lg pt-2 pb-3 px-14 text-2xl font-semibold mt-4 transition-transform hover:scale-95"
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