import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import type { Regiao } from '../types/Regiao';
import '../styles/Mapa.css';

interface MapaProps {
  regiao: Regiao | null;
}

function Centralizar({ regiao }: { regiao: Regiao }) {
  const map = useMap();

  useEffect(() => {
    map.setView([regiao.latitude, regiao.longitude], 12);
  }, [map, regiao]);

  return null;
}

export function Mapa({ regiao }: MapaProps) {
  const posicao: [number, number] = regiao
    ? [regiao.latitude, regiao.longitude]
    : [-14.235, -51.9253];

  return (
    <MapContainer
      center={posicao}
      zoom={regiao ? 12 : 4}
      className="mapa"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {regiao && (
        <>
          <Marker
            position={[regiao.latitude, regiao.longitude]}
            icon={L.icon({
              iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
              iconAnchor: [12, 41],
            })}
          />
          <Centralizar regiao={regiao} />
        </>
      )}
    </MapContainer>
  );
}
