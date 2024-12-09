import { works } from "@/data/works";
import Image from "next/image";
import Link from "next/link";

export default function Works() {
    return (<div className="flex flex-col gap-6 p-4 lg:p-8 w-full bg-[#242323] bg-opacity-90 max-w-7xl">
        <Link href="/" className="hover:text-amber-300 transition-colors duration-300 text-white">back to home</Link>
        <h1 className="text-5xl">My Works</h1>
        <div className="flex flex-col lg:flex-row flex-wrap">
            {
                works.map((work) => <Link key={work.title} href={"/works/" + work.workName} className="relative w-full lg:w-1/3">
                    <Image src={work.image} alt="work image" width={1000} height={1000}></Image>
                    <p className="absolute top-0 p-4 lg:opacity-0 hover:opacity-100 w-full h-full lg:bg-gray-700 transition-opacity duration-500 lg:bg-opacity-90 text-2xl">{work.title}</p>
                </Link>)
            }
        </div>

    </div>)
}