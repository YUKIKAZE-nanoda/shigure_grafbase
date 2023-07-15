import React from "react";
import Image from "next/image";
const FooterColumn=()=>{
    <div className="footer_column">
        <h4></h4>
    </div>
}
const Footer = () => {
    return <footer className="flexStart footer">
        <div className="flex flex-col gap-12 ">
            <div className=" flex items-start flex-col">
                <Image
                    src="/logo-purple.svg"
                    width={115}
                    height={38}
                    alt="Flexibble"

                />
                <p className="text-start text-sm font-normal mt-5 max-w-xs">
                    Flexible is the world's largest marketplace for digital services. Get logo design, marketing services, whiteboards and more, starting from only $5.

                </p>
            </div>
            <div className="flex flex-wrap gap-12">
                <FooterColumn />

            </div>
        </div>
    </footer>
}

export default Footer;