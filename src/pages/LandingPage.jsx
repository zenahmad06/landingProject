import DataPage from "./DataPage"
import { Link, Outlet } from "react-router-dom"
export default function LandingPage(){
    return (
        <>
        {/* sidebar */}
        <div className="  w-[30%] md:w-[25%] flex flex-col items-center  py-5 h-screen fixed l-0 t-0 border border-black shadow-xl">

        </div>
        <div className="md:(max-w-[80%] ml-[25%]) max-w-[70%] ml-[30%] bg-red-100 min-h-screen flex flex-col items-center gap-2">
            {/* nav */}
            <div className="w-full  h-[5vh] md:px-20 px-5 flex bg-white flex-row justify-end gap-10 items-center">
                <Link to='data'><h2 className="hover:text-blue-200">DATA</h2></Link>
                <Link to='nondata'><h2 className="hover:text-blue-200">NON DATA</h2></Link>
            </div>
            <div className="w-full min-h-[80vh] bg-white ml-2 mr-2">
                <Outlet/>
            </div>
            
        </div>
        </>
    )
}