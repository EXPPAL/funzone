import Image from "next/image"


const Index = () => {
    return (
        <>
            <div className="text-center mt-[20px]">
                <Image
                    draggable="false"
                    className="mx-auto"
                    src="/images/home.jpg"
                    alt="landing"
                    width={900}
                    height={900}
                />
            </div>
        </>
    )
}

export default Index;