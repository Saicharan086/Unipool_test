

export default function Cards({title, content, src}){

    return (
        <div className="flex flex-col gap-4 w-1/3 px-10 py-5 border rounded-lg hover:bg-gray-50">
            <div className="h-1/3 flex items-center">
                <img width="40" height="40" src={src} />
            </div>
            <div className="h-2/3">
                <p className="font-medium text-lg mb-1">{title}</p>
                <p className="text-lg text-gray-600" >{content}</p>
            </div>
        </div>
    )
}