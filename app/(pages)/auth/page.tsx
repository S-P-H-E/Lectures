import Image from "next/image";
import Link from "next/link";

export default function Auth(){
    return (
        <div className="flex flex-col w-full max-w-[400px] mx-auto h-[100dvh] justify-center items-center gap-4">
            <h1 className="text-4xl font-semibold text-center">Access <mark className="text-[#ff5833] bg-transparent">Lectures</mark></h1>
            <p className="text-[#c7c7c7] text-sm text-center">Sign in or sign up instantly with Google.</p>
            <p>Select Your Course.</p>

            <button className="flex px-4 py-3 bg-[#3d3d3d] w-fit rounded-2xl gap-2 font-semibold cursor-pointer">
                <Image alt="Google Logo" src='/googlelogo.png' width={25} height={25}/>
                Continue with Google
            </button>

            <p className="text-[#c7c7c7] text-sm">By continuing, you agree to our <Link href="https://google.com" target="_blank" className="bg-transparent text-white font-semibold">Terms</Link> and <Link href="https://google.com" target="_blank" className="bg-transparent text-white font-semibold">Privacy Policy</Link>.</p>
        </div>
    )
}