import {FaSignal} from "react-icons/fa"
import {ImSpoonKnife} from "react-icons/im"
import {AiOutlineCar} from "react-icons/ai"

export default function Cards() {
  return (
    <div>
      <div className="relative ">
        <img
          className="w-full object-cover max-lg:hidden"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1897,h_755/v1653688465/assets/29/74ec2f-a727-47e1-9695-c78f8dadee5f/original/DotCom_Update_Earner_bg2x.jpg"
          alt="photo1"
        />
        <div className="sloganBox">
          <div className="kategoriKutu">
            <div className="kategoriler">
              <FaSignal size={25} className="m-auto" />
              <p className="kategoriYazi ">Sürücü olun <br/> veya teslimat <br/> yapın</p>
            </div>
            <div className="kategoriler">
              <ImSpoonKnife size={25} className="m-auto"/> 
              <p className="kategoriYazi ">Yemek <br/> siparişi <br/> verin</p>
            </div>
            <div className="kategoriler">
              <AiOutlineCar size={25} className="m-auto"/> 
              <p className="kategoriYazi">Yolculuk</p>
            </div>
          </div>
          <div className="sloganYaziBox">
            <h2 className="sloganYazi">Direksiyon başına geçip para kazanmaya başlayın</h2>
            <p className="pt-1 md:pt-2 lg:pt-4 xl:pt-5 ">En büyük aktif yolcu ağına sahip platformda sürücü olun.</p>
            <button className=" block bg-black p-2 px-4 mt-5 md:mt-2 rounded-lg text-base font-medium  xl:p-3 xl:px-6 xl:mt-7 text-white hover:bg-gray-800 transition ease-in duration-500">Sürücü olarak kaydolun</button>
            <button className="pt-6 xl:pt-10 border-b-0.5 border-gray-300 hover:border-gray-500">Sürücü olma ve teslimat yapma hakkında daha fazla bilgi edinin</button>
          </div>
        </div>
      </div>
      
      <div className="relative ">
        <img id="photo1" className="w-screen h-80 object-cover" 
        src="https://www.uber-assets.com/image/upload/v1613106985/assets/0e/47aa71-35cb-459a-a975-78c61ea300e2/original/HP-U4B-NYC-bkg.png" alt="asddas"/>
        <div className="absolute top-3 mx-[1rem] sm:mx-[0rem] left-2 sm:top-16 sm:left-10 lg:left-56 xl:left-72 2xl:left-90">
          <h2 className="text-2xl md:text-3.5xl font-bold pb-4">Bildiğiniz Uber iş için yeniden tasarlandı</h2>
          <p>Dünyanın her yerinden ve her ölçekten şirketin yolculukları, yemek siparişlerini ve yerel teslimatları <br/> yönetebileceği bir platform.</p>
          <button className="bg-black text-white font-medium p-2 md:p-3 px-3 md:px-6 rounded-lg mt-5">Başlayın</button>
        </div>
      </div>
    </div>
  );
}
