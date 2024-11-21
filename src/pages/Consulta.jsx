import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { generateRandomPoints } from "../utils/generateRandomPoints";
import Background from "../components/ui/Background";
import Section from "../components/ui/Section";
import "leaflet/dist/leaflet.css";

export function Consulta() {
  const [cep, setCep] = useState("");
  const [center, setCenter] = useState([-23.5505, -46.6333]); // São Paulo
  const [points, setPoints] = useState([]);

  function MapView({ center }) {
    const map = useMap();
    map.setView(center);
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!/^\d{8}$/.test(cep)) {
        alert("Por favor, insira um CEP válido com 8 dígitos.");
        return;
      }

      // Modificação: Adicionar um atraso para não exceder 1 requisição por segundo
      await new Promise((resolve) => setTimeout(resolve, 1100)); // Espera 1.1 segundos

      // Modificação: Incluir um cabeçalho 'Referrer' que identifica o aplicativo
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&postalcode=${cep}&country=Brazil`,
        {
          headers: {
            // Substitua pela URL do seu aplicativo ou um identificador único
            Referer: "http://localhost:5173/", // Modificação aqui
          },
        }
      );

      const data = await response.json();

      if (data && data.length > 0) {
        const { lat, lon } = data[0];

        setCenter([parseFloat(lat), parseFloat(lon)]);
        const randomPoints = generateRandomPoints(
          parseFloat(lat),
          parseFloat(lon),
          3
        );
        setPoints(randomPoints);
      } else {
        alert("CEP não encontrado. Por favor, verifique e tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao geocodificar o CEP:", error);
      alert(
        "Ocorreu um erro ao buscar o CEP. Por favor, tente novamente mais tarde."
      );
    }
  };

  return (
    <Background className="bg-dark-green">
      <Section haveNav>
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
          <label>
            Insira seu CEP:
            <input
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="Ex: 01001000"
            />
          </label>
          <button type="submit">Consultar</button>
        </form>

        {/* Modificação: Adicionar a atribuição ao OpenStreetMap e Nominatim */}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <small>
            Os dados de geocodificação são fornecidos por{" "}
            <a href="https://nominatim.openstreetmap.org/">Nominatim</a>, do{" "}
            <a href="https://www.openstreetmap.org/">OpenStreetMap</a>.
          </small>
        </div>

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
