import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { generateRandomPoints } from "../utils/generateRandomPoints";
import Background from "../components/ui/Background";
import Section from "../components/ui/Section";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { CardCompany } from "../components/ui/CardCompany";

export function Consulta() {
  const [cep, setCep] = useState("");
  const [center, setCenter] = useState([-23.56763, -46.64899]); // FIAP Paulista
  const [points, setPoints] = useState([]);

  const icons = {
    Eólica: L.icon({
      iconUrl: "src/assets/types/eolica.png",
      iconSize: [50, 50],
      iconAnchor: [25, 40],
      popupAnchor: [1, -30],
    }),
    Solar: L.icon({
      iconUrl: "src/assets/types/solar.png",
      iconSize: [50, 50],
      iconAnchor: [25, 40],
      popupAnchor: [1, -30],
    }),
    Hidrelétrica: L.icon({
      iconUrl: "src/assets/types/hidreletrica.png",
      iconSize: [50, 50],
      iconAnchor: [25, 40],
      popupAnchor: [1, -30],
    }),
    Geotérmica: L.icon({
      iconUrl: "src/assets/types/geotermica.png",
      iconSize: [50, 50],
      iconAnchor: [25, 40],
      popupAnchor: [1, -30],
    }),
    Biomassa: L.icon({
      iconUrl: "src/assets/types/biomassa.png",
      iconSize: [50, 50],
      iconAnchor: [25, 40],
      popupAnchor: [1, -30],
    }),
    Nuclear: L.icon({
      iconUrl: "src/assets/types/nuclear.png",
      iconSize: [50, 50],
      iconAnchor: [25, 40],
      popupAnchor: [1, -30],
    }),
    Default: L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [25, 40],
      popupAnchor: [1, -30],
    }),
  };

  function MapView({ center }) {
    const map = useMap();
    map.setView(center);
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);

    try {
      if (!/^\d{8}$/.test(cep)) {
        alert("Por favor, insira um CEP válido com 8 dígitos.");
        return;
      }

      const response = await fetch(
        `https://cep.awesomeapi.com.br/json/${cep}`,
        {
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        const { lat, lng } = data;

        setCenter([parseFloat(lat), parseFloat(lng)]);
        const randomPoints = generateRandomPoints(
          parseFloat(lat),
          parseFloat(lng),
          3
        );
        setPoints(randomPoints);
      } else {
        alert(data.message || "Ocorreu um erro na consulta do CEP.");
      }
    } catch (error) {
      if (error.name === "AbortError") {
        alert("A requisição demorou muito, por favor, tente novamente.");
      } else {
        console.error("Erro ao geocodificar o CEP:", error);
        alert(
          "Ocorreu um erro ao buscar o CEP. Por favor, tente novamente mais tarde."
        );
      }
    }
  };

  return (
    <Background className="bg-dark-green h-screen min-h-screen">
      <Section haveNav>
        <h2 className="text-white text-5xl font-semibold tracking-wide leading-normal ">
          Faça uma <span className="text-primary">Consulta</span>
        </h2>
        <p className="text-gray font-light text-sm tracking-wide text-center max-w-[500px] leading-normal mt-2 mb-12">
          Insira seu CEP e descubra as melhores opções de energia na sua região.
          Compare distribuidoras e escolha a energia ideal.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4 max-w-[500px] w-full mx-auto"
        >
          <label className="w-full">
            <span className="text-white font-semibold">Insira seu CEP:</span>
            <div className="flex flex-row gap-2 mt-2">
              <input
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                placeholder="Ex: 01001000"
                className="px-4 py-2 w-full bg-dark-green-2 text-white border border-gray rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-[#62E763] to-[#3CC889] text-white rounded-md hover:opacity-90 transition-opacity duration-300"
              >
                Consultar
              </button>
            </div>
          </label>
        </form>

        <div className="flex flex-row gap-8 items-center">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <MapContainer
              center={center}
              zoom={15}
              key={center.toString()}
              touchZoom={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
              boxZoom={false}
              keyboard={false}
              zoomControl={false}
              style={{ height: "500px", width: "500px", borderRadius: "10px" }}
            >
              <MapView center={center} />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              {points.map((point, index) => (
                <Marker
                  key={index}
                  position={[point.lat, point.lng]}
                  icon={icons[point.type] || icons.Default}
                >
                  <Popup>
                    <b>Companhia: {point.name}</b>
                    <br />
                    Tipo: {point.type}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          {points.length > 0 && (
            <ul className="flex flex-col gap-8 mt-4 w-[350px]">
              {points.map((point, index) => (
                <CardCompany
                  key={index}
                  img={icons[point.type].options.iconUrl}
                  name={point.name}
                  type={point.type}
                />
              ))}
            </ul>
          )}
        </div>
      </Section>
    </Background>
  );
}
