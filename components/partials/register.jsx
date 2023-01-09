import { useState } from "react";
import { Toaster } from "react-hot-toast";

import Burn from "../features/burn";
import Captcha from "./captcha";
import Loading from "../basic/loading";

import { ImCross } from "react-icons/im";

import Terms from "@/components/partials/terms";

import { useCookies } from "react-cookie";

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [terms, setTerms] = useState(false);
    const [age, setAge] = useState(false);
    const [chkUsername, setChkUsername] = useState(false);
    const [chkEmail, setChkEmail] = useState(false);
    const [chkPassword, setChkPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [cStatus, setCStatus] = useState(false);
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [cookie, setCookie] = useCookies(['loggedIn', 'ref']);
    const [ref, setRef] = useState("");
    const [refChk, setRefChk] = useState(false);

    const checkUsername = () => {
        const r = /^[a-z0-9]+$/gim;
        const r2 = /.{3,15}/gm;
        if (!r2.test(username)) {
            setError("Username must be between 3 and 15 characters in length.");
            setChkUsername(false);
        } else if (!r.test(username)) {
            setError(
                "Username cannot contain special characters."
            );
            setChkUsername(false);
        } else {
            setChkUsername(true);
        }
    };

    const checkEmail = () => {
        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
            setChkEmail(false);
        } else {
            setChkEmail(true);
        }
    };

    const checkPassword = () => {
        const r = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*?[!@#$%&*~])/;
        if (password.length < 8) {
            setError("Username must be 3 - 15 characters in length.");
            setChkPassword(false);
        } else if (!r.test(password)) {
            setError(
                "Password must contain cases, digits and special characters."
            );
            setChkPassword(false);
        } else {
            setChkPassword(true);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        checkUsername();
        checkEmail();
        checkPassword();
        setModal3(true);
    }

    const updateStatus = async (b) => {
        setCStatus(b);
        setModal3(false);
    };

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        month = month.padStart(2, '0');
        day = day.padStart(2, '0');

        return [year, month, day].join('-');
    }

    return (
        <>
            <div>
                <Toaster position="top-right" reverseOrder={false} />
            </div>
            <div className="w-1/2 mx-auto bg-white border rounded-lg py-8 px-28">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="text-center">
                        <label className="text-2xl font-normal lowercase text-secondary">
                            † Username †
                        </label>
                        <input
                            className="text-dark font-montserrat border border-[#767676] rounded-[25px] w-full py-3 px-5 bg-[#e6e6e6] mt-2"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) =>
                                setUsername(e.target.value)
                            }
                            required
                        />
                    </div>
                    <div className="text-center">
                        <label className="text-2xl font-normal text-secondary">
                            † Email †
                        </label>
                        <input
                            className="text-dark font-montserrat border border-[#767676] rounded-[25px] w-full py-3 px-5 bg-[#e6e6e6] mt-2"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                        />
                    </div>
                    <div className="text-center">
                        <label className="text-2xl font-normal lowercase text-secondary">
                            † Password †
                        </label>
                        <input
                            className="text-dark font-montserrat border border-[#767676] rounded-[25px] w-full py-3 px-5 bg-[#e6e6e6] mt-2"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between !mt-6">
                        <div>
                            <input
                                type="checkbox"
                                className="mr-2"
                                id="terms"
                                required
                                onClick={(e) => {
                                    setModal(true);
                                    if (terms) {
                                        e.target.checked = true;
                                    } else if (!terms) {
                                        e.target.checked = false;
                                    }
                                }}
                            />
                            <label className="text-sm font-medium text-secondary">
                                Terms of Service
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                className="mr-2"
                                id="age"
                                required
                                onClick={(e) => {
                                    setModal2(true);
                                    if (age) {
                                        e.target.checked = true;
                                    } else if (!age) {
                                        e.target.checked = false;
                                    }
                                }}
                            />
                            <label className="text-sm font-medium text-secondary">
                                Confirm Age (13+)
                            </label>
                        </div>
                    </div>
                    <p className="text-red-500 text-center">
                        {error}
                    </p>
                    <div className="flex justify-center">
                        <button draggable="false"
                            className="inline-block px-6 py-2.5 bg-secondary text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            type="submit"
                        >
                            {loading ? <Loading /> : "Register"}
                        </button>
                    </div>
                </form>
            </div>
            {modal ? (
                <div className="z-20 fixed top-0 right-0 w-full min-h-screen bg-gray-500/50 flex justify-center items-center">
                    <div className="container mx-auto">
                        <div className="bg-black bg-[url('/images/background.jpg')] bg-cover bg-center h-[90%] rounded-lg p-10">
                            <div className="flex justify-end mb-10">
                                <button draggable="false"
                                    className="transition-transform hover:scale-95"
                                    onClick={() => {
                                        setModal(false);
                                        setTerms(false);
                                    }}
                                >
                                    <ImCross className="" />
                                </button>
                            </div>
                            <Terms />
                            <div className="flex justify-center">
                            <button draggable="false"
                                    className=" bg-black border rounded-lg py-2 pt-[7px] pb-[9px] px-14 text-2xl font-semibold transition-transform hover:scale-95"
                                    onClick={() => {
                                        setTerms(true);
                                        setModal(false);
                                    }}
                                >
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}   
            {modal2 ? (
                <div className=" z-20 fixed top-0 right-0 w-full min-h-screen bg-gray-500/50 flex justify-center items-center">
                    <div className="container mx-auto">
                        <div className="bg-black bg-[url('/images/background.jpg')] bg-cover bg-center rounded-lg p-10 w-1/2 mx-auto">
                            <div className="flex justify-end">
                                <button draggable="false"
                                    className="transition-transform hover:scale-95"
                                    onClick={() => {
                                        setModal2(false);
                                        setAge(false);
                                    }}
                                >
                                    <ImCross className="" />
                                </button>
                            </div>
                            <div>
                                <div className="flex justify-center mb-10">
                                    <div className="text-center">
                                        <label className="text-2xl font-medium text-white">
                                            <Burn title="† confirm age †" />
                                        </label>
                                        <input
                                            type="date"
                                            className=" border rounded-lg text-white bg-black w-full py-3 px-4 mt-6"
                                            value={dob}
                                            min={(new Date().getFullYear() - 120) + '-01-01'}
                                            max={formatDate(Date.now())}
                                            onChange={(e) =>
                                                setDob(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mb-5">
                                <button draggable="false"
                                    className=" bg-black border rounded-lg py-2 px-14 text-2xl font-semibold transition-transform hover:scale-95"
                                    onClick={() => {
                                        checkDOB();
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}            
            {modal3 ? (
                <div className="z-20 absolute top-0 right-0 w-full min-h-screen bg-gray-500/50 flex justify-center items-center">
                    <div className="container max-w-[500px] mx-auto">
                        <div className="bg-black bg-[url('/images/background.jpg')] bg-cover bg-center rounded-lg p-10">
                            <div className="flex justify-end">
                                <button draggable="false"
                                    className="transition-transform hover:scale-95"
                                    onClick={() => {
                                        setModal3(false);
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

export default Register;