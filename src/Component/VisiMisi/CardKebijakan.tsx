import { closeIcon } from "../../../public";

interface cardKebijakanProps {
  close: () => void;
  large: String;
  title1: String;
  title2: String;
  title3: String;
  list1: String;
  list2: String;
  list3: String;
  list4: String;
  list5: String;
  list6: String;
  list7: String;
  list8: String;
  list9: String;
  list10: String;
  list11: String;
  list12: String;
  list13: String;
  list14: String;
  list15: String;
}

const CardKebijakan: React.FC<cardKebijakanProps> = ({
  close,
  large,
  title1,
  title2,
  title3,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  list7,
  list8,
  list9,
  list10,
  list11,
  list12,
  list13,
  list14,
  list15,
}) => {
  return (
    <div
      className={`${
        large == "true" ? "w-[790px]" : "w-[550px]"
      } h-full rounded-xl shadow-xl p-5 pl-12 bg-[#ffffff]`}
    >
      <div className="w-full flex justify-between">
        <h1 className="font-medium text-[20px]">
          Arah Kebijakan Pembangunan Desa
        </h1>
        <img
          className="cursor-pointer"
          onClick={close}
          src={closeIcon}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-[#71747B] text-[16px] font-bold">{title1}</h1>
        <ul className="list-none">
          <li>{list1}</li>
          <li>{list2}</li>
          <li>{list3}</li>
          <li>{list4}</li>
          <li>{list5}</li>
          <li>{list6}</li>
        </ul>
        <h1 className="text-[#71747B] text-[16px] font-bold">{title2}</h1>
        <ul className="list-none">
          <li>{list7}</li>
          <li>{list8}</li>
          <li>{list9}</li>
          <li>{list10}</li>
        </ul>
        <h1 className="text-[#71747B] text-[16px] font-bold">{title3}</h1>
        <ul className="list-none">
          <li>{list11}</li>
          <li>{list12}</li>
          <li>{list13}</li>
          <li>{list14}</li>
          <li>{list15}</li>
        </ul>
      </div>
    </div>
  );
};

export default CardKebijakan;
