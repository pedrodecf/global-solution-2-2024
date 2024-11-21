import Separator from "../ui/Separator";
import {
  MdOutlineMailOutline,
  MdOutlinePhone,
  MdOutlineChat,
} from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";


export function CardCompany({ img, name, type }) {
  return (
    <>
      <div className="border border-[#313131] rounded-lg bg-[#111714] max-w-[400px] w-full p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={img}
              alt={`Imagem da empresa ${name}`}
              className="w-[50px] h-auto object-cover rounded-full"
            />
            <div className="flex flex-col text-left">
              <h2 className="text-white font-semibold">{name}</h2>
              <p className="text-gray text-sm">{type}</p>
            </div>
          </div>
          <div className="bg-[#212724] border rounded-full border-[#313131] p-2 cursor-not-allowed">
            <BsThreeDotsVertical className="text-white" />
          </div>
        </div>
        <Separator className="my-3" />
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2">
            <div className="bg-[#212724] border rounded-full border-[#313131] p-2 cursor-not-allowed">
              <MdOutlineMailOutline className="text-white" />
            </div>

            <div className="bg-[#212724] border rounded-full border-[#313131] p-2 cursor-not-allowed">
              <MdOutlinePhone className="text-white" />
            </div>

            <div className="bg-[#212724] border rounded-full border-[#313131] p-2 cursor-not-allowed">
              <MdOutlineChat className="text-white" />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-gradient-to-r from-[#62E763] to-[#3CC889] text-black text-sm rounded-full hover:opacity-90 transition-opacity duration-300 cursor-not-allowed"
          >
            Contratar
          </button>
        </div>
      </div>
    </>
  );
}
