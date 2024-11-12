import logo from "../../assets/logo.svg";

export function Navbar() {
  return (
    <header className="w-full py-4 flex flex-row justify-between mb-6">
      <img src={logo} alt="Sustergy" className="w-40 h-auto" />

      <button
        className="bg-gradient-to-r from-[#62E763] to-[#3CC889]
            [background-size:200%_auto]
            transition-all duration-500
            hover:[background-position:right_center]
            px-6 py-2 rounded-3xl text-sm"
      >
        Faça uma consulta
      </button>
    </header>
  );
}
