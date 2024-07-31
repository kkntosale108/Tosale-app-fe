import Circlefooter from "../../../public/aset/circlefootergreen.svg";
import Image from "next/image";


function LandingPageFooter() {
  return (
    <div className="bg-white text-[#1A4D2E] ">
      <div className="w-full flex gap-x-20 text-[#1A4D2E] px-16 py-6">
          <div className="w-[25%]">
            <p className="font-semibold pb-3">Desa Tosale</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. !</p>
          </div>
          <div className="w-[10%]">
            <p className="font-semibold pb-3">About us</p>
            <p>Lorem</p>
            <p>Carers</p>
            <p>contact us</p>
          </div>
          <div className="w-[25%]">
            <p className="font-semibold pb-3">Contact us</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis voluptates autem possimus molestias quam impedit
            </p>
            <p>+0822876543</p>
          </div>
        {/* </div> */}
        <div className="pt-20">
          <Image src={Circlefooter} alt="Circle footer" />
        </div>
      </div>
      <hr />
      <p className="flex justify-center p-5">Copyright ® 2024 KKN 108 Team</p>
    </div>
  );
}

export { LandingPageFooter };
