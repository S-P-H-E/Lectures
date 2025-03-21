"use client"
import { useState } from "react"
import { LuPlus } from "react-icons/lu";

export default function Greeting(){
    // todo: add setName, setLectureCount
    const [name] = useState('Tom')
    const [lectureCount] = useState(0)

    return(
        <div className="w-full flex justify-between">
            <div>
                {/* todo: add a comma after {name} */}
                <span className="text-[#c7c7c7]">Hello</span> {name}
                {/* todo: make this change dynamically with AI */}
                <h1 className='text-6xl font-semibold'>You have {lectureCount !== 0 ? `just ${lectureCount} ${lectureCount > 1 ? "lectures" : "lecture"} left today!` : "no lectures today!"}</h1>
            </div>

            {/* todo: add lecture functionality */}
            {/* ? should i keep this feature just for Admins or students as well */}
            <button className="bg-[#454545] w-fit h-fit rounded-full p-2 cursor-pointer">
                <LuPlus />
            </button>
        </div>
    )
}