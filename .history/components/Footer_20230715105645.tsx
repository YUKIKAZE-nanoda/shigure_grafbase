import React from "react";
import Image from "next/image";
const Footer=()=>{
    return <footer className="flexStart footer">
        <div className="flex flex-col gap-12 ">
            <div className=" flex items-start flex-col">
                <Image 
                src="/logo-purple.svg"
                width={115}
                h

                />
            </div>
        </div>
    </footer>
}

export default Footer;