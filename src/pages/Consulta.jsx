import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { generateRandomPoints } from "../utils/generateRandomPoints";
import Background from "../components/ui/Background";
import Section from "../components/ui/Section";
import "leaflet/dist/leaflet.css";

export function Consulta() {
  const [cep, setCep] = useState("");
  const [center, setCenter] = useState([-23.56763, -46.64899]); // FIAP Paulista
  const [points, setPoints] = useState([]);

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
            style={{ height: "500px", width: "500px" }}
            dragging={false}
            touchZoom={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            boxZoom={false}
            keyboard={false}
            zoomControl={false}
          >
            <MapView center={center} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {points.map((point, index) => (
              <Marker key={index} position={[point.lat, point.lng]}>
                <Popup>
                  <b>Companhia {index + 1}</b>
                  <br />
                  Tipo: {point.type}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </Section>
    </Background>
  );
}
