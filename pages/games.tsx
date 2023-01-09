import Image from 'next/image';
import Head from "next/head";
import { Navigation, Scrollbar, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import {Tabs, Tab} from "@/components/basic/tabs";

import games from '@/mock_data/games.json';
import wars from '@/mock_data/wars.json';
import Link from 'next/link';
import GameDefault from '@/components/partials/gameDefault';

const Game = () => {
	return (
		<>
			<Head>
				<title>Secrets of War † Reborn | Game</title>
			</Head>

			<Tabs
				className="w-1/3 mx-auto mt-16 bg_drop divide-x divide-gray-500"
				contentClass="my-auto"
			>
				<Tab title="List of Games">
					<div className="p-4 border-2 bg_drop bg-black rounded-lg">
						<Swiper
							modules={[Navigation, Scrollbar, Mousewheel ]}
							spaceBetween={20}
							slidesPerView={5}
							navigation={true}
							scrollbar={{enabled: true}}
							mousewheel={true}
						>
							{ games.map((game, index) => (
								<SwiperSlide key={index}>
                                    <GameDefault href={`/games/${game.id}`} game={game} key={index} />
								</SwiperSlide>
							))
							}
						</Swiper>
					</div>
				</Tab>
				<Tab title="Clan Wars">
					<div className="p-4 border-2 bg_drop rounded-lg bg-black">
						<Swiper
							modules={[Navigation, Scrollbar, Mousewheel ]}
							spaceBetween={20}
							slidesPerView={3}
							navigation={true}
							scrollbar={{enabled: true}}
							mousewheel={true}
						>
							{ wars.map((war, index) => (
								<SwiperSlide key={index}>
									<div className="flex relative rounded-xl shadow overflow-hidden m-2 h-[284px]">
										<div className="clan caln-first flex-grow-0 flex-shrink-0 basis-1/2 bg-red-700 p-4 relative flex flex-col justify-center">
											<span className="absolute top-4 left-0 right-0 text-center font-bold">{ war.start }</span>
											<div className="mt-auto flex items-center justify-center mb-2">
												<span className="text-white font-bold uppercase">{ war.point1 } points</span>
											</div>
											<h4 className="text-md text-ellipsis overflow-hidden text-white text-center font-extrabold uppercase">{ war.clan1 ? war.clan1 : 'Clan ' + (index * 2 + 1) }</h4>
										</div>
										<div className="clan clan-second flex-grow-0 flex-shrink-0 basis-1/2 bg-blue-700 p-4 relative flex flex-col justify-center">
											<span className="absolute top-4 left-0 right-0 text-center font-bold">{ war.end }</span>
											<div className="mt-auto flex items-center justify-center mb-2">
												<span className="text-white font-bold uppercase text-right">{ war.point2 } points</span>
											</div>
											<h4 className="text-md text-ellipsis overflow-hidden text-white font-extrabold text-center uppercase">{ war.clan2 ? war.clan2 : 'Clan ' + (index + 1) * 2 }</h4>
										</div>
										<div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
											<Image draggable="false" 
												src="/images/sword.png"
												alt="sniper"
												width={50}
												height={50}
											/>
										</div>
									</div>
								</SwiperSlide>
							))
							}
						</Swiper>
					</div>
				</Tab>
			</Tabs>
		</>
	)
}

export default Game;