import clsx from "clsx";

export default function WeekView(){
    const today = new Date()
    const day = today.getDay()
    const date = today.getDate()

    const days = [
        {
            date: (date-day)+1,
            dayOfTheWeek: "Mon"
        },
        {
            date: (date-day)+2,
            dayOfTheWeek: "Tue"
        },
        {
            date: (date-day)+3,
            dayOfTheWeek: "Wed"
        },
        {
            date: (date-day)+4,
            dayOfTheWeek: "Thu"
        },
        {
            date: (date-day)+5,
            dayOfTheWeek: "Fri"
        },
    ]
    return (
        <div>
            <div className="flex w-full justify-between bg-[#3d3d3d] text-[#aaaaaa] rounded-2xl px-5 py-3">
                {days.map((data, index) => (
                    <div key={index}>
                        <div className={clsx(date == data.date && "bg-[#ff5833] text-white","flex items-center rounded-full px-4 py-1 gap-2")}>
                            <h1 className="text-[30px] font-semibold">{data.date}</h1>
                            <p>{data.dayOfTheWeek}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}