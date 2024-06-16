import Image from "next/image";
import Link from "next/link";
import { serialize } from "v8";

export default function Navbar() {
    return (
        <div className="h-14 w-full p-2 flex justify-between  bg-white fixed z-10 shadow-md">
            <div className="flex gap-1 items-center">
                <div className="h-14 w-14 p-2 ml-14 text-start">
                    <Image
                        src={"/tunehub-logo.png"}
                        alt="Tunehub Logo"
                        height={48}
                        width={48}
                    />
                </div>
                <span className="font-light text-[#ef0f66]">TuneHub</span>
                    
                
            </div>
            <div className="flex gap-1 mr-10">
                <Link href={"/login"}>
                    <button className="btn-1" style={{
                        width: "100px",
                        fontSize: "12px"
                    }}>
                        Log-in
                    </button>
                </Link>
                <Link href={"/auth"}>
                    <button className="btn-2" style={{
                        width: "100px",
                        fontSize: "12px"
                    }}>
                        Sign-up
                    </button>
                </Link>
            </div>
        </div>
    );
}