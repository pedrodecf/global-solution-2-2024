import logo from "../../assets/logo.svg";
import Separator from "../ui/Separator";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#05160e]">
      <Separator className="mb-12" />
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center pb-12">
        <img src={logo} alt="Sustergy" className="w-40 h-auto mb-8 md:mb-0" />

        {/* Navegação */}
        <nav>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
            <li>
              <a href="#quem-somos" className="text-sm text-gray hover-nav">
                Quem somos
              </a>
            </li>
            <li>
              <a href="#como-funciona" className="text-sm text-gray hover-nav">
                Como funciona
              </a>
            </li>
            <li>
              <a href="#precos" className="text-sm text-gray hover-nav">
                Preços
              </a>
            </li>
            <li>
              <a href="#contato" className="text-sm text-gray hover-nav">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Redes Sociais */}
        <div className="flex gap-6 mt-8 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-gray hover:text-white text-lg"/>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-gray hover:text-white text-lg"/>

          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-gray hover:text-white text-lg"/>

          </a>
        </div>

        {/* Links Legais */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-8 md:mt-0">
          <a href="#" className="text-sm text-gray hover-nav">
            Política de Privacidade
          </a>
          <a href="#" className="text-sm text-gray hover-nav">
            Cookies
          </a>
          <a href="#" className="text-sm text-gray hover-nav">
            Informações Legais
          </a>
        </div>
      </div>
    </footer>
  );
}
