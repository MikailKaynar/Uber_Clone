export default function HeroSection() {
  return (
    <div className="relative ">
      <div>
        <h2 className="text-4xl text-center pt-10 md:pt-16 pb-10 font-bold text-gray-900 sm:ml-14 md:ml-20 lg:ml-40 xl:ml-60 2xl:ml-80 ">
          Gittiğiniz her yerde güvenliğinize odaklı
        </h2>
        <div className="block sm:flex justify-center px-5 xl:px-0">
          <div>
            <img
              className="pr-3"
              alt="p1"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png"
            />
            <h2 className="text-lg pt-4 pb-3 font-medium text-gray-600">Güvenliğinizi sağlamaya kararlıyız</h2>
            <p className="font-light">Topluluk Kurallarımızdaki güvenlik özellikleri ve standartlarla tüm <br/> kullanıcılarımız için güvenli bir ortam oluşturmaya katkı sağlama <br/> konusuna kararlıyız.</p>
            <button className="pt-9 border-b-0.5 border-gray-300 hover:border-gray-500 block">Topluluk Kurallarımız hakkında bilgi edinin </button>
            <button className="pt-5 mb-4 sm:mb-0 border-b-0.5 border-gray-300 hover:border-gray-500 block">Tüm güvenlik özelliklerine göz atın</button>
          </div>
          <div className="block sm:flex justify-center px-0 xl:px-0">
            <img
              alt="p2"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png"
            />
            <h2 className="text-lg pt-4 pb-3 font-medium text-gray-600">10.000’den fazla şehre hareketlilik getiriyoruz</h2>
            <p className="font-light">Uygulama dünya çapında binlerce şehirde kullanıldığından evinizden çok <br/> uzaktayken bile araç çağırabilirsiniz.</p>
            <button className="pt-9 border-b-0.5 border-gray-300 hover:border-gray-500 block">Tüm şehirleri görüntüleyin </button>
          </div>
        </div>
      </div>
    </div>
  );
}
