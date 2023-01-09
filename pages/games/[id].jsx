import { useRouter } from 'next/router';

import players from "@/mock_data/players.json";
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

import { useState } from "react";

import Image from 'next/image';

const GamePage = () => {
  const router = useRouter();
  const { id } = router.query;

  // find game with matching id
  const player = players.find((player) => player.id === parseInt(id, 10));

  const [logsBox, toggleLogsBox] = useState();

  return (
    <>
      <Head>
        <title>FunZone | Game - {id}</title>
      </Head>

      <div>
        <Toaster position="top-right" reverseOerder={false} />

        <div className="my-auto flex flex-wrap justify-center space-x-10 w-full pt-20">
          <div className="basis-1/6 flex flex-col items-end">
              <div className="font-bold bg_drop rounded-lg w-2/3 border-2 py-3 px-6 bg-dark flex items-center mb-4">
                  <span className="mr-5">⏰</span>
                  <span className="text-center flex-1">
                      00:00
                  </span>
              </div>
              <div className="font-bold bg_drop rounded-lg w-2/3 border-2 py-3 px-6 bg-dark flex items-center mb-4">
                  <span className="mr-5">📆</span>
                  <span className="text-center flex-1">000</span>
              </div>
              <div className="font-bold bg_drop rounded-lg w-2/3 border-2 py-3 px-6 bg-dark flex items-center mb-4">
                  <span className="mr-5">💎</span>
                  <span className="text-center flex-1">{ Math.floor(status.metal).toString().padStart(4,'0') }</span>
              </div>
              <div className="font-bold bg_drop rounded-lg w-2/3 border-2 py-3 px-6 bg-dark flex items-center mb-4">
                  <span className="mr-5">⚡</span>
                  <span className="text-center flex-1">{ Math.floor(status.energy).toString().padStart(4,'0') }</span>
              </div>
              <div className="font-bold bg_drop rounded-lg w-2/3 border-2 py-3 px-6 bg-dark flex items-center mb-4">
                  <span className="mr-5">💪</span>
                  <span className="text-center flex-1">0000</span>
              </div>
          </div>

          <div className="basis-1/2 !ml-[50px] flex flex-col">
            <div className="relative flex-1 mb-8">
              <div className="absolute left-0 w-full top-0 translate-y-[-50%] flex justify-center">
                <div className="bg_drop w-20 h-20 bg-dark rounded-lg mr-5 text-[48px] leading-[80px] text-center">
                  {
                    player && player.avatar ? <Image
                      draggable={false}
                      src="/images/landing-logo.png"
                      alt="base"
                      width={80}
                      height={80}
                    /> : <Image
                      draggable={false}
                      // src={player.avatar}
                      alt="base"
                      width={30}
                      height={30}
                    />
                  }
                </div>
                <div className="p-4 border-2 bg_drop bg-dark rounded-lg">
                  <h2 className="text-white font-press font-bold text-center text-lg">
                    {
                      player && player.name ? player.name : "Annoymous"
                    }
                  </h2>
                </div>
              </div>

              <div
                className={"p-4 border-2 bg_drop bg-cover rounded-lg bg-dark h-full min-h-[360px]"}
                style={{
                  backgroundImage: 'url("/images/background4.jpg")'
                }}
              >
              </div>
            </div>

            <div className="flex flex-wrap flex-grow-0 basis-auto relative mx-[-12px]">
                <div className="basis-1/5 px-3 text-[56px] font-bold">
                    <div className="relative">
                        <div
                            className={
                                "absolute bottom-[100%] border-4 p-5 bg-dark left-0 w-[360px] rounded-lg shadow-lg translate-y-[-20px]  " +
                                (logsBox ? "" : "hidden")
                            }
                            style={{
                                zIndex: logsBox,
                            }}
                        >
                            {/* <Logs className="" /> */}
                        </div>
                        <a
                            draggable="false"
                            className="bg_drop rounded-lg block bg-dark font-icon relative pt-[100%] h-0 transition "
                            href="#"
                            title="Logs"
                            // onClick={onToggleLogsBox}
                        >
                            <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                                📑
                            </span>
                            <div
                                className={
                                    "absolute left-1/2 top-[-20px]  translate-x-[-50%] border-[20px] border-transparent border-t-white " +
                                    (logsBox ? "" : "hidden")
                                }
                            >
                                <span className="sr-only">
                                    Arrow
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
          </div>

          <div className="flex flex-wrap basis-1/6 relative max-h-[300px]">

            <div className="basis-1/2 px-[10px] text-[56px] font-bold mb-4">
                <a
                    draggable="false"
                    className="bg_drop rounded-lg block bg-dark font-icon relative pt-[100%] h-0 transition "
                    href="#"
                    // onClick={openModalProfile}
                    title="Profile"
                >
                    <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                        👤
                    </span>
                </a>
            </div>

            <div className="basis-1/2 px-[10px] text-[56px] font-bold mb-4">
              <a
                  draggable="false"
                  className="bg_drop rounded-lg block bg-dark font-icon relative pt-[100%] h-0 transition "
                  href="#"
                  title="Alliances"
                  // onClick={openModalAlliance}
              >
                  <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                      👥️️
                  </span>
              </a>
            </div>

            <div className="basis-1/2 px-[10px] text-[56px] font-bold mb-4">
              <a
                draggable="false"
                className="bg_drop rounded-lg block bg-dark font-icon relative pt-[100%] h-0 transition "
                href="#"
                // onClick={onToggleTechBox}
                title="Research Upgrade Center"
            >
                <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    💾
                </span>
              </a>
            </div>

            <div className="basis-1/2 px-[10px] text-[56px] font-bold mb-4">
              <a
                draggable="false"
                className="bg_drop rounded-lg block bg-dark font-icon relative pt-[100%] h-0 transition "
                href="#"
                title="Settings"
                // onClick={openModalSettings}
              >
                <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    ⚙️️️
                </span>
              </a>
            </div>

            <div className="basis-1/2 px-[10px] text-[56px] font-bold">
              <a
                draggable="false"
                className="bg_drop rounded-lg block bg-dark font-icon relative pt-[100%] h-0 transition "
                href="#"
                title="Excavator Upgrade Center"
                // onClick={openModalExcavators}
            >
                <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    🪣
                </span>
              </a>
            </div>

            <div className="basis-1/2 px-[10px] text-[56px] font-bold">
                <a
                    draggable="false"
                    className="bg_drop rounded-lg block bg-dark font-icon relative pt-[100%] h-0 transition "
                    href="#"
                    title="Logout"
                    // onClick={openModalLogout}
                >
                    <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                        🔐
                    </span>
                </a>
            </div>                        
          </div>
      </div>
      </div>
    </>
  );
};

export default GamePage;