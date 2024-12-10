import Image from "next/image"
import { works } from "@/data/works";
import Link from "next/link";

function getDisplayElement(filename: string) {
    if (filename.endsWith(".mp4") || filename.endsWith(".mov")) return <video className="w-full lg:w-1/2 border border-amber-700" key={filename} src={filename} controls={true}></video>;
    if (filename.endsWith(".pdf")) return (
        <div key={filename} className="w-full lg:w-1/2 relative border border-amber-700">
            <Image className="w-full h-full"  src={filename.replace(".pdf", ".jpg")} width={1000} height={1000} alt="image" objectFit="cover"></Image>
            <a href={filename} target="_blank" className="absolute top-0 p-1 lg:p-4 lg:opacity-0 hover:opacity-100 lg:w-full lg:h-full transition-opacity duration-500 lg:bg-opacity-90 text-lg bg-gray-700">คลิกเพื่ออ่าน</a>
        </div>
    );
    return <Image className="w-full lg:w-1/2 border border-amber-700" key={filename} src={filename} width={1000} height={1000} alt="image" objectFit="cover"></Image>;
}


export default async function Work({ params }: {
    params: Promise<{
        workName: string,
    }>
}) {
    const { workName } = await params
    const workIndex = works.findIndex((work) => work.workName === workName)
    const workData = works[workIndex]
    if (!workData) return <p>Not found (404)</p>

    return (<div className="flex flex-col gap-6 p-4 lg:p-8 w-full bg-[#242323] bg-opacity-90 max-w-7xl">
        <div className="flex flex-row justify-between">
            <Link href="/works" className="hover:text-amber-300 transition-colors duration-300 text-white">back to my works</Link>
            <div className="flex flex-row gap-3">
                { workIndex > 0 && <Link href={"/works/" + works[workIndex - 1].workName} className="hover:text-amber-300 transition-colors duration-300 text-white font-bold">←</Link>}
                { workIndex < works.length - 1 && <Link href={"/works/" + works[workIndex + 1].workName} className="hover:text-amber-300 transition-colors duration-300 text-white font-bold">→</Link>}
            </div>
        </div>
        <div className="bg-black bg-opacity-90 w-full p-8 flex flex-col lg:flex-row gap-5 items-center">
            <b className="text-4xl w-full lg:w-1/3">{workData.title}</b>
            <div className="flex flex-col gap-3 w-full lg:w-2/3 text-xl">
                {workData.description.map((d) => <p key={d}>{d}</p>)}
                {workData.link && <a href={workData.link.src} target="_blank" className="text-amber-100 hover:text-amber-400 transition-colors duration-300">{workData.link.label}</a>}
            </div>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap items-stretch">
            {workData.images.map((w) => getDisplayElement(w))}
        </div>
    </div>)
}

export async function generateStaticParams() {
    return works.map((work) => ({
        workName: work.workName,
    }))
}