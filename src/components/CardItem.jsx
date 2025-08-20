export default function CardItem({data}){
    return (
        <div className="h-[30vh] w-[20vh] md:(h-[50vh] w-[30vh] gap-5) border border-black flex flex-col items-center">
            <div className="hidden md:block w-full h-[20%] bg-yellow-200"></div>
            <h1 className="text-[7pt] font-bold md:(text-xs text-center px-auto) mt-2">{data.title}</h1>
            <p className="mt-2 md:( block text-xs text-center px-auto) text-[7pt] text-center px-auto">{data.deskripsi}</p>
            <p className="text-[7pt] mt-3 ml-2 md:(block text-xs text-center px-auto)" > penjelasan materi klik <a href={data.link1} className="hover:(text-blue-900 font-bold) transition-all duration-300 text-blue-700 decoration-blue-700" target="_blank" rel="noopener noreferrer"> link ini</a></p>
            { data.link2 != "" &&
            <p className="text-[7pt] mt-3 ml-2  md:(block text-xs text-center px-auto)" > full code klik <a href={data.link2} className="hover:(text-blue-900 font-bold) transition-all duration-300 text-blue-700 decoration-blue-700" target="_blank" rel="noopener noreferrer"> link ini</a></p>

            }


        </div>
    )
}