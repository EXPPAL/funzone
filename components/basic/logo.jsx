import Image from 'next/image';

const Logo = () => {
	return (
		<div className="text-center pointer-events-none select-none">
			<div className="inline w-auto relative text-sm">
				<Image
					className="logo inline-block"
					src="/images/logo.png"
					alt="logo"
					width={261}
					height={148}
				/>
				{
					new Array(60).fill(1).map((val,index) => (
						<div className="particle z-[-1]" key={index}></div>
					))
				}
			</div>
		</div>
	)
}

export default Logo;