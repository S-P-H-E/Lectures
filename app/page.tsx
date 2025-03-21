import Greeting from '@/components/Greeting';
import LecturesView from '@/components/LecturesView';
import WeekView from '@/components/WeekView';
import { db } from '@/lib/prismaClient';

export default async function Home(){
  // const lectures = await db.lecture.findMany({
  // });
  
  // console.log("Lectures: ", lectures)

  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sunday) - 6 (Saturday)

  // Find Monday
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1));
  startOfWeek.setHours(0, 0, 0, 0); // Set to start of the day

  // Find Sunday
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999); // Set to end of the day

  const lectures = await db.lecture.findMany({
    where: {
      date: {
        gte: startOfWeek,
        lte: endOfWeek,
      },
    },
    orderBy: {
      startTime: "asc",
    },
  });

  console.log("This Week's Lectures:", lectures);

  // const deletedLectures = await db.lecture.deleteMany({
  //   where: {
  //     title: "Technical Writing and Communication",
  //   },
  // });

  // const newLecture = await db.lecture.create({
  //   data: {
  //     title: "Technical Writing and Communication",
  //     startTime: new Date("2025-03-19T08:00:00.000Z"),
  //     endTime: new Date("2025-03-19T10:00:00.000Z"),
  //     date: new Date("2025-03-19T00:00:00.000Z"),
  //   },
  // });

  const lecture = [
    {
      lecturer: "Pillay, Leavashni",
      code: "IPRG511",
      name: "Introduction to Programming Logic",

    },
    {
      lecturer: "Sushant",
      code: "IQTT511",
      name: "Introduction to Qunatitiative Thinking"
    },
    {
      lecturer: "Els, Liehan",
      code: "IMAD5112",
      name: "Introduction to Mobile Application Development"
    },
    {
      lecturer: "Gungadeen, Bishma",
      code: "TEWC5111",
      name: "Technical Writing and Communication"
    }
  ]
  
  return (
    <div className='w-full max-w-[800px] mx-auto p-10 flex flex-col gap-6'>
      <Greeting />
      <WeekView />
      <div className='flex flex-col gap-3 w-full'>
          {lectures.map((lecture, index)=>(
            <LecturesView key={lecture.id} index={index} lecture={lecture} />
          ))}
      </div>
    </div>
  )
}