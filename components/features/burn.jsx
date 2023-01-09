const Burn = ({ title, className = "" }) => {
	return (
		<>
		{
		title.split('').map((char, index) => (
			<span className={"title-fire " + className} key={index} style={{
				animationDuration: Math.random() + 's'
			}}>{char}</span>
		))
		}
		</>
	)
}

export default Burn;