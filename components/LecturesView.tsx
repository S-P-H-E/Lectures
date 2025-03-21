"use client"
import { useDateStore } from '@/store';
import clsx from "clsx";
import { useEffect } from 'react';

type Lecture = {
    id: string;
    title: string;
    date: Date;
  };
  
  type LectureProps = {
    index: number;
    lecture: Lecture;
  };

export default function LecturesView({index, lecture}: LectureProps){
    const { selectedDate } = useDateStore();
    console.log(lecture.date.getDate())

    return(
        <div className={clsx("w-full h-[200px] rounded-2xl p-3", index % 2 == 0 ? "text-[#ff5833]" : "text-[#daedec]", index % 2 !== 0 ? "bg-[#ff5833]" : "bg-[#daedec]", selectedDate == 19 ? 'visible' : 'hidden')}>
            <p>{lecture.code}</p>
            <h1 className='text-5xl'>{lecture.title}</h1>
            <p>{"name"}</p>
        </div>
    )
}