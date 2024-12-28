export default function FeatureCard({ title, text, setIndex, idx, index }) {
    function changeIndex() {
        setIndex(idx);
    }

    return (
        <div
            className={`hover:bg-yellow-100 p-5 md:p-7 rounded-xl h-auto md:h-40 flex flex-col justify-center 
                        ${index === idx ? 'bg-yellow-300' : ''} cursor-pointer min-h-32`}
            onClick={changeIndex}
        >
            <h3 className="text-lg md:text-[1.6vw] font-medium">{title}</h3>
            <p className="text-base md:text-[1.2vw] text-gray-600">{text}</p>
        </div>
    );
}
