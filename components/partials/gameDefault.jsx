import Image from "next/image";
import Link from "next/link";
import { animated,useSpring } from "react-spring";

const GameDefault = ({game, href, key}) => {
  const props = useSpring({ to: { opacity: 1}, from: { opacity: 0 } });
  
  return (
    <>
      <animated.div className="property" style={ props }>
        <Link 
          draggable="false"
          href={href}
          className=""
        >
          <div className="flip-card-container p-1">
            <div className="rounded-lg shadow-lg flip-card relative">
                <div className="card-front">
                    <figure>
                        <div className="img-bg"></div>
                        <Image draggable="false"
                            className="h-full"
                            src="/images/background13.jpg"
                            alt="Clan"
                            width={300}
                            height={250}
                        />
                        <figcaption className="absolute bottom-4 left-2 right-2 text-white text-center p-2 font-medium text-ellipsis block overflow-hidden"><strong className="font-[1.2em]">#{ key + 1 }</strong> { game.name ? game.name : 'Game ' + (key + 1) }</figcaption>
                    </figure>
                    <span className="absolute right-3 top-3">
                        <Image draggable="false"
                            className="inline-block"
                            src={"/images/ranks/" + (key > 4 ? 'rank.gif' : 'rank' + (key + 1) +'.gif')}
                            alt="rank"
                            width={30}
                            height={30}
                        />
                    </span>
                </div>
                <div className="card-back">
                    <figure>
                        <div className="img-bg"></div>
                        <Image draggable="false"
                            src="/images/background13.jpg"
                            className="h-full"
                            alt="Clan"
                            width={300}
                            height={250}
                        />
                    </figure>
                    <div className="absolute text-center">
                        <p className="text-white text-base mb-2"><strong>Leader:</strong> { game.leader }</p>
                        <p className="text-white text-base mb-2"><strong>Power:</strong> { game.power }</p>
                        <p className="text-white text-base mb-2"><strong>Members:</strong> { game.members }</p>
                        <p className="text-white text-base"><strong>Tax:</strong> { game.tax !== null ? game.tax + '%' : '' }</p>
                    </div>
                </div>
            </div>
          </div>
        </Link>
      </animated.div>
    </>
  );
}

export default GameDefault;