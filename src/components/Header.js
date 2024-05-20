import { RiGlobalLine } from "react-icons/ri"
import { TbGridDots } from "react-icons/tb"
import { IoIosArrowDown } from "react-icons/io"

export default function Header() {
  
  return (
    <div className="bg-brand-color text-white overflow-x-hidden">
      <div className="container mx-auto h-16 flex items-center justify-between">
        <div className="flex">
          <a className="ml-5 mr-20 lg:mr-0 sm:ml-30 bg-black text-2xl" href="/#">Uber</a>
          <a className="ml-8 bg-black text-sm lg:flex items-center hidden lg:visible" href="/#"> Şirket &nbsp; <IoIosArrowDown/></a>
          <a className="ml-8 bg-black text-sm lg:flex items-center hidden lg:visible" href="/#">Güvenlik</a>
          <a className="ml-8 bg-black text-sm lg:flex items-center hidden lg:visible" href="/#">Yardım</a>
        </div>
        <nav className="flex items-center text-end">
          <a href="/#" className="mr-2 bg-black hover:bg-gray-800 p-2 px-3 rounded-3xl text-sm lg:flex items-center hidden lg:visible"> <RiGlobalLine size={18}/> &nbsp;&nbsp;TR-TR</a>
          <a href="/#" className="mr-2 bg-black hover:bg-gray-800 p-2 px-3 rounded-3xl text-sm lg:flex items-center hidden lg:visible"> <TbGridDots size={18}/>  &nbsp;&nbsp; Ürünler</a>
          <a href="/#" className="mr-2 bg-black hover:bg-gray-800 p-2 px-3 rounded-3xl text-sm w-max flex items-center">Oturum Açın</a>
          <a href="/#" className="mr-32 bg-white text-black hover:bg-slate-200 transition duration-300 ease-in-out p-2 px-3 rounded-3xl text-sm flex items-center">Kaydolun</a>
        </nav>
      </div>
    </div>
  );
}
