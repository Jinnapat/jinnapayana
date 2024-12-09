import { works } from "@/data/works";
import Image from "next/image";
import Link from "next/link";

const skills = [
  {
    title: "Learning Media Design Skills",
    description: [
      "ออกแบบสื่อการเรียนรู้ที่เหมาะสมกับช่วงวัยและการพัฒนาของผู้เรียน",
      "สามารถสร้างสื่อผสมระหว่างสื่อทำมือและเทคโนโลยี เช่น 3 มิติ, QR, AR และ VR",
      "มีความสามารถในการทำ animation 2D, 3D และ Stop Motion",
      "สามารถภาคเสียงตัวละครได้หลากหลาย"
    ],
    image: "/images/s1.webp"
  }, {
    title: "Innovation & Design Skills",
    description: [
      "ออกแบบ UX และ UI สำหรับแอปพลิเคชันและเว็บไซต์",
      "สร้างเกมและคิดเนื้อเรื่องสำหรับเกม สามารถสร้างเกม DND และเป็น DM กลุ่มได้",
      "สร้างสรรค์เกมการเรียนรู้ที่ตอบโจทย์การศึกษา"
    ],
    image: "/images/s2.webp"
  }, {
    title: "Research & Writing Skills",
    description: [
      "เขียนบทความและวิจัยในหัวข้อที่เกี่ยวกับการศึกษาและประเด็นทางสังคม",
      "มีความเข้าใจเกี่ยวกับการเรียนรู้และพฤติกรรมมนุษย์"
    ],
    image: "/images/s3.webp"
  }, {
    title: "Communication & Collaboration Skills",
    description: [
      "สามารถสอนเด็กหรือคนทั่วไปเล่นเกมหรือทำกิจกรรมต่าง ๆ ได้",
      "ได้เรียนรู้ทฤษฎีและฝึกประสบการณ์การเป็นวิทยากรและการนำกิจกรรมการเรียนรู้ในระยะเวลา 2 ปีที่เรียน"
    ],
    image: "/images/s4.webp"
  }, {
    title: "Art & Creativity Skills",
    description: [
      "วาดภาพสีน้ำ สีไม้ และออกแบบโลโก้"
    ],
    image: "/images/s5.webp"
  }, {
    title: "Technology & AI Application Skills",
    description: [
      "ใช้เทคโนโลยีหลากหลายรูปแบบและสามารถประยุกต์ใช้ได้ตามความเหมาะสม",
      "สามารถสื่อสารและทำงานร่วมกับ AI อย่างมีประสิทธิภาพ"
    ],
    image: "/images/s6.webp"
  }
]

export default function Home() {
  return (
    <div className="w-full flex flex-col p-3 gap-6 max-w-7xl lg:flex-row">
      <div className="flex flex-col gap-5 items-center lg:w-1/4 w-full">
        <div className="flex flex-col items-center bg-[#545142] bg-opacity-80 p-4 gap-2">
          <Image src="/images/logo.webp" width={1000} height={1000} alt="logo"></Image>
          <b className="text-center">| 2003's | INTP-T | Home school | JSTP 20 | LSEd7 | TU88 |</b>
          <p className="text-center text-sm">​เรียนรู้ให้สนุก เหมือนเล่นเกมที่ไม่มีวันจบ <br></br>เพราะทุกบทเรียนคือชัยชนะใหม่</p>
        </div>
        <div className="flex flex-col items-center bg-[#545142] bg-opacity-80 p-4 w-full">
          <b className="text-lg">Contact Information:</b>
          <p>Phone: 0992711115</p>
          <p>Email: jinnapajstp20@gmail.com</p>
          <a href="https://www.linkedin.com/in/jinnapa-yana-491196340/" target="_blank" className="hover:text-amber-400 transition-colors duration-300">LinkedIn: Jinnapa Yana</a>
        </div>
        <div className="w-full bg-amber-900 bg-opacity-20 border-amber-900 border-2 flex flex-col items-center gap-4 p-3">
          <b className="text-xl">Experience and Achievements</b>
          {
            works.map((work) => <Link key={work.title} href={"/works/" + work.workName} className="relative">
              <Image src={work.image} alt="work image" width={1000} height={1000}></Image>
              <p className="absolute top-0 p-4 lg:opacity-0 hover:opacity-100 w-full h-full lg:bg-gray-700 transition-opacity duration-500 lg:bg-opacity-90">{work.title}</p>
            </Link>)
          }
        </div>
      </div>
      <div className="flex flex-col bg-[#242323] p-4 lg:p-8 gap-6 bg-opacity-90 lg:w-4/6 w-full">
        <p>​เส้นทางการศึกษาของฉันเต็มไปด้วยความหลากหลายและเป็นการผสมผสานระหว่างการเรียนรู้ในระบบและนอกระบบ ประสบการณ์เหล่านี้ได้หล่อหลอมให้ฉันเข้าใจถึงคุณค่าของการเรียนรู้ในทุกมิติ โดยเฉพาะความรู้สึกของคนที่เรียนรู้ได้ยากหรือรู้สึก "ถูกทิ้งไว้ข้างหลัง" ซึ่งฉันเชื่อว่า ปัญหานี้ไม่ได้เกิดจากตัวเด็ก แต่จากระบบการเรียนรู้ที่ยังไม่ตอบสนองต่อความหลากหลายของผู้เรียน ความเข้าใจนี้ทำให้ฉันมุ่งมั่นที่จะสร้างสรรค์สื่อการเรียนรู้ที่หลากหลาย เหมาะสมกับทุกคน และที่สำคัญคือต้องเข้าถึงง่าย บอร์ดเกมจึงกลายเป็นความสนใจของฉัน ด้วยความรู้และทักษะด้านการศึกษาและเทคโนโลยี มาประสานกับความชอบในเรื่องเกมของฉัน ฉันตั้งใจที่จะทำงานในสาย EdTech ตามที่ใฝ่ฝัน เพื่อเปลี่ยนการเรียนรู้ให้เป็นเรื่องสนุก สร้างประสบการณ์ที่มีคุณค่า และช่วยส่งเสริมศักยภาพของผู้เรียนทุกคนในอนาคต</p>
        <b className="text-lg">What I Can Offer</b>
        <p>จากประสบการณ์การแข่งขันทางการศึกษาตั้งแต่ปี 2018 ถึงปี 2023 ฉันได้เรียนรู้การทำงานร่วมกับผู้คนหลากหลาย ทั้งในด้านความคิด ประสบการณ์ และมุมมองที่แตกต่าง เมื่อได้เข้าเรียนคณะวิทยาการเรียนรู้และศึกษาศาสตร์ หลักสูตรได้เปิดให้ลงมือปฏิบัติจริง แต่ฉันก็สรุปว่าสิ่งที่ฉันได้เรียนรู้ยังต้องได้รับการพัฒนาอีกมาก ทำให้ฉันอยากมีโอกาสได้ฝึกงานเพื่อสัมผัสกับสภาพความเป็นจริงที่ฉันต้องเจอในอนาคตจริง โดยเฉพาะอย่างยิ่ง การลงมือปฏิบัติที่เกี่ยวข้องกับบอร์ดเกมและปัญหาด้านการศึกษาในสังคม</p>
        <p>ฉันคิดว่าการนำความชอบและความถนัดของตัวเองมาสร้างประโยชน์ให้องค์กรได้ อย่างความสนใจในศึกษาทางด้านการศึกษาพฤติกรรมการเรียนรู้ในช่วงวัยต่าง ๆ ผสมผสานกับความชอบในเกม ฉันเชื่อว่าตนเองสามารถออกแบบและพัฒนาสื่อการเรียนรู้ที่ทั้งให้ความรู้และสนุกสนาน โดยนำเสนอในรูปแบบที่เข้าใจง่ายและสอดคล้องกับกระบวนการเรียนรู้ของมนุษย์</p>
        <p>ฉันหวังเป็นอย่างยิ่งว่าการฝึกงานครั้งนี้จะช่วยต่อยอดทั้งประสบการณ์และความรู้ที่ฉันมีอยู่ พร้อมเปิดโอกาสให้ฉันได้ลงมือทำจริงในสิ่งที่ฉันหลงใหลและต้องการพัฒนา</p>
        {
          skills.map((skill) => <div key={skill.title} className="flex flex-col lg:flex-row gap-2 p-4 lg:p-8 rounded-x bg-black shadow-sm bg-opacity-80">
            <div className="w-full lg:w-2/3">
              <b className="text-2xl">{skill.title}</b>
              <div className="w-full h-0 border border- mt-4 mb-8"></div>
              <ul>{skill.description.map((d) => <li key={d} className="list-disc ml-9 text-lg">{d}</li>)}</ul>
            </div>
            <div className="w-full lg:w-1/3">
              <Image src={skill.image} alt="eduction image" width={5000} height={5000} className="border-2 border-yellow-500"></Image>
            </div>
          </div>)
        }
      </div>
    </div>
  );
}
