import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Loading from "@/components/basic/loading";

const Captcha = (props) => {
    const [cData, setCData] = useState(null);
    const [cs, setCs] = useState(null);
    const [cUrl, setCUrl] = useState(null);
    const [error, setError] = useState(false);
    const [fetched, setFetched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [sum, setSum] = useState(null);

    const router = useRouter();

    const fetchCaptcha = async () => {
        const res = await fetch("/api/captcha");
        const data = await res.json();
        if (res.status !== 200) {
            setError(true);
        } else {
            setCUrl(data.url);
            setCData(data.data);
            setCs(data.s);
            setFetched(true);
        }
    };

    useEffect(() => {
        fetchCaptcha();
    }, []);

    useEffect(() => {
        const onlyNumber = (e) => {
            document.querySelector("#captcha").addEventListener("keypress", function (evt) {
                if (evt.which < 48 || evt.which > 57) {
                    evt.preventDefault();
                }
            });
        }
        if (fetched) onlyNumber();
    }, [fetched]);

    if (!fetched) {
        return <div>Loading...</div>;
    }

    const showC = () => {
        if (!error) {
            return <Image draggable="false" src={cUrl} alt={cs} width={100} height={50} />;
        } else {
            return <button draggable="false" className="border p-2 rounded" onClick={router.reload()}>Reload</button>
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (sum == cData) {
            setStatus("Success!");
            props.data(true);
        }
        else {
            setStatus("Failure!");
            props.data(false);
            router.reload();
        }
    }

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-around">
                <label htmlFor="captcha" className="flex justify-center items-center mb-8">{showC()}</label>
                <input
                    type="number"
                    id="captcha"
                    className="bg-black bg_drop text-white border py-4 px-5 rounded"
                    placeholder="Enter the sum"
                    value={sum}
                    onChange={(e) => {
                        setSum(e.target.value);
                    }}
                />
            </div>
            <div className="flex justify-center">
                <button draggable="false"
                    type="submit"
                    className="bg_drop bg-black border rounded-lg pt-2 pb-3 px-14 text-2xl font-semibold mt-4 transition-transform hover:scale-95"
                >
                    {loading ? <Loading /> : "Submit"}
                </button>
            </div>
            {status}
        </form>
    );
};

export default Captcha;