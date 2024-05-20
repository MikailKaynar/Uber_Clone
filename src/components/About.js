import { BsFillPeopleFill } from "react-icons/bs";
import { LuFileText } from "react-icons/lu";
import { BiHomeAlt2 } from "react-icons/bi";
export default function About() {
  return (
    <div className=" relative items-center mx-[1rem] lg:mx-[4rem] xl:mx-[10rem] 2xl:mx-[23rem] mt-30">
      <div class="flex justify-between">
        <div >
          <BsFillPeopleFill size={26} />
          <h2 className="font-medium text-gray-600 pt-5 pb-2">Hakkımızda</h2>
          <p>
            Nasıl başladığımızı, bize yön veren itici gücü ve <br /> dünyanın
            hareket etme şeklini nasıl yeniden <br /> hayal ettiğimizi öğrenin.
          </p>
          <button className="pt-9 border-b-0.5 border-gray-300 hover:border-gray-500 block">Uber hakkında daha fazla bilgi edinin </button>
        </div>
        <div className="px-5">
          <LuFileText size={26} />
          <h2 className="font-medium text-gray-600 pt-5 pb-2">
            Güncel Haberler
          </h2>
          <p>
            En son geliştirdiğimiz özellikler, girişimlerimiz ve <br /> iş
            ortaklıklarımız hakkındaki duyurulara göz atın.
          </p>
          <button className="pt-9 border-b-0.5 border-gray-300 hover:border-gray-500 block">Güncel Haberler’e gidin </button>
        </div>
        <div>
          <BiHomeAlt2 size={26} />
          <h2 className="font-medium text-gray-600 pt-5 pb-2">
            Küresel vatandaşlık
          </h2>
          <p>
            Hizmet sunduğumuz şehirlerde olumlu bir etki <br /> yaratmaya yönelik
            taahhüdümüz hakkında <br /> bilgi edinin.
          </p>
          <button className="pt-9 border-b-0.5 border-gray-300 hover:border-gray-500 block">İş ortaklıklarımıza göz atın </button>
        </div>
      </div>
    </div>
  );
}
