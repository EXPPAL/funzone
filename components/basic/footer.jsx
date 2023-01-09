import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className="footer text-center md:text-3xl font-semibold fixed left-0 right-0 bottom-[20px] bg-[left_30%_bottom_-50px] bg-no-repeat ">
                <span className="bg-gradient-to-b from-[#ffee0d] to-[#d63107] via-[#ffff75] bg-clip-text text-transparent">
                    XTREME SPORTS © 2023. All Rights Reserved
                </span>
            </footer>
        </>
    )
}

export default Footer;