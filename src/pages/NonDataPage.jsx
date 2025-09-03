import CardItem from "../components/CardItem"
import { materiTodo, materiFilter,Crud,CrudBackend,paginationBackend,authlogin,webappoltp } from "../Data/materi-todo"
export default function DataPage(){
    return(
        <>
        <div className="min-h-full w-full flex flex-row flex-wrap gap-5 px-2 py-2">
            <CardItem data={materiTodo}/>
            <CardItem data={materiFilter}/>
            <CardItem data={Crud}/>
            <CardItem data={CrudBackend}/>
            <CardItem data={paginationBackend}/>
            <CardItem data={authlogin}/>
            <CardItem data={webappoltp}/>



        </div>
        </>
    )
}