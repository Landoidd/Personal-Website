import {FILLERTEXT} from '@/app/utils/utils'
const Project = () => {
    return (<div className="bg-zinc-600 border-2 border-zinc-500 shadow-zinc-700 shadow-md
     rounded-lg h-52 w-1/3 m-4 hover:bg-zinc-400 cursor-pointer overflow-hidden">
        <p className="flex items-center justify-center text-center text-2xl">Coming Soon</p>
        <div className="w-full h-full blur-sm">
            <h1 className="text-center text-xl blur-sm">{FILLERTEXT}</h1>
        </div>
    </div>)
}

export default Project;