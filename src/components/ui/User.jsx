export function User({ img, nome, rm }) {
  return (
    <div className="flex flex-row gap-4 items-center">
      <div className="rounded-full bg-gradient-to-r from-[#62E763] to-[#3CC889] p-1 max-w-28">
        <img
          src={img}
          alt={`Imagem de perfil de ${nome}`}
          className="rounded-full w-full h-full object-cover grayscale image-hover"
        />
      </div>
      <div>
        <h3 className="text-2xl text-white font-bold">{nome}</h3>
        <p className=" text-sm text-primary font-light">RM: {rm}</p>
      </div>
    </div>
  );
}
