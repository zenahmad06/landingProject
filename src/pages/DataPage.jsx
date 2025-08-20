import CardItem from "../components/CardItem"
import { project_question,project_statistik,project_eda,project_dataengineer1,project_oltp } from "../Data/kumpul"
export default function DataPage(){
    return(
        <>
        <div className="min-h-full w-full flex flex-row flex-wrap gap-5 px-2 py-2">
            <CardItem data={project_question}/>
            <CardItem data={project_statistik}/>
            <CardItem data={project_eda}/>
            <CardItem data={project_oltp}/>
            <CardItem data={project_dataengineer1}/>


        </div>
        </>
    )
}