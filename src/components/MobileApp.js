import {FiArrowRight} from "react-icons/fi"
export default function MobileApp() {
  return (
    <div className="relative px-2 lg:px-16 xl:px-32 2xl:px-96 items-center mt-16 pb-[4.1rem] bg-gray-100">
      <h2 className="font-bold text-4xl py-10 pt-[4.05rem] text-slate-700">
        Uygulamalarda seveceğiniz daha çok şey var
      </h2>
      <div className="block lg:flex">
        <a href="/#" className="flex mb-2 lg:mb-0 lg:mr-9 items-center border border-gray-300 bg-white">
          <img
            className="p-6 object-fit"
            alt="p1"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1618459302/assets/8e/cbcd2e-e7f1-4bd1-ae4e-5343b99ff22f/original/Driver-App-logo.png"
          />
          <h2 className=" flex font-bold text-xl  lg:text-2xl">Sürücü uygulamasını indirin &nbsp; &nbsp; <FiArrowRight size={30}/> &nbsp; &nbsp; </h2>
        </a>
        <a href="/#" className="flex items-center  border align-middle border-gray-300 bg-white">
          <img
            className="p-6"
            alt="p2"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1618459257/assets/13/6bfdbd-cdb6-4221-92c1-cab1feaa39f3/original/Rider-App-logo.png"
          />
          <h2 className="flex font-bold text-xl  lg:text-2xl">Uber uygulamasını indirin &nbsp; &nbsp; <FiArrowRight size={30}/> &nbsp; &nbsp;</h2>
        </a>
      </div>
    </div>
  );
}
