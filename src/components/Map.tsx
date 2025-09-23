import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const { theme } = useTheme();

  // Faisalabad, Pakistan coordinates
  const coordinates: [number, number] = [73.0849, 31.4504];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Set your token
    mapboxgl.accessToken =
      "pk.eyJ1IjoiY2hyaXN3eGNoYW1wcyIsImEiOiJjbGk4ajBpY2wwMDd3M2ZwcTZ4dDljOGtoIn0.3T3mN_w71qqpzT3jKUf_wQ";

    try {
      const mapStyle = theme === "dark" 
        ? "mapbox://styles/mapbox/dark-v11" 
        : "mapbox://styles/mapbox/light-v11";
        
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: mapStyle,
        center: coordinates,
        zoom: 15,
      });

      // Add marker
      new mapboxgl.Marker({ color: "#1e40af", scale: 1.2 })
        .setLngLat(coordinates)
        // .setPopup(
        //   new mapboxgl.Popup().setHTML(
        //     '<div class="p-2"><strong>R&N Yarn Dyeing</strong><br/>Mian, Street #1 Satayana Rd<br/>Rachna Town, Faisalabad</div>'
        //   )
        // )
        .addTo(map.current);

      // Navigation controls
      // map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      map.current.on("load", () => setIsMapLoaded(true));
    } catch (error) {
      console.error("Error initializing map:", error);
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [theme]);

  return (
    <div className="relative w-full h-[200px]">
      <div
        ref={mapContainer}
        className="absolute inset-0 rounded-lg shadow-lg"
      />
      {!isMapLoaded && (
        <div className="absolute inset-0 bg-muted rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
            <p className="text-sm text-muted-foreground">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
