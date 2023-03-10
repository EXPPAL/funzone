import Image from "next/image"


const Contact = () => {
    return (
        <>
            <div className="text-center mt-[20px]">
                <Image
                    draggable="false"
                    className="mx-auto"
                    src="/images/contact.jpg"
                    alt="landing"
                    width={900}
                    height={900}
                />
            </div>
        </>
    )
}

export default Contact;