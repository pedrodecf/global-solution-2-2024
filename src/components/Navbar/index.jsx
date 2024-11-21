import logo from "../../assets/logo.svg";

export function Navbar() {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col items-center relative z-50">
      <header className="px-8 w-full py-4 flex flex-row justify-between mb-6 items-center absolute">
        <img src={logo} alt="Sustergy" className="w-40 h-auto" />
        <nav>
          <ul className="flex flex-row gap-8">
            <li>
              <a href="/" className="text-sm text-gray hover-nav">
                Página inicial
              </a>
            </li>
            <li>
              <a href="/precos" className="text-sm text-gray hover-nav">
                Preços
              </a>
            </li>
            <li>
              <a href="/consulta" className="text-sm text-gray hover-nav">
                Consulta
              </a>
            </li>
            <li>
              <a href="/como-funciona" className="text-sm text-gray hover-nav">
                Como funciona
              </a>
            </li>
            <li>
              <a href="#contato" className="text-sm text-gray hover-nav">
                Contato
              </a>
            </li>
          </ul>
        </nav>

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
    </div>
  );
}
