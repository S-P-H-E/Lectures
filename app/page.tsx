import Greeting from '@/components/Greeting';
import WeekView from '@/components/WeekView';
import clsx from 'clsx';

export default async function Home(){
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
        {lecture.map((data, index)=>(
          <div key={index} className={clsx("w-full h-[200px] rounded-2xl p-3", index % 2 == 0 ? "text-[#ff5833]" : "text-[#daedec]", index % 2 !== 0 ? "bg-[#ff5833]" : "bg-[#daedec]")}>
            <p>{data.lecturer}</p>
            <h1 className='text-5xl'>{data.code}</h1>
            <p>{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}