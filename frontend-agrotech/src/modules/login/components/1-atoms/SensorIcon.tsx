import React from "react";
import { WiHumidity } from "react-icons/wi";
import { IoSunnyOutline } from "react-icons/io5";
import { FaThermometerEmpty } from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";

interface SensorIconProps {
  name: "thermometer" | "humidity" | "sun" | "ph-sensor";
  size?: number;
  className?: string;
}

const icons = {
  thermometer: FaThermometerEmpty,
  humidity: WiHumidity,
  sun: IoSunnyOutline,
  "ph-sensor": GiChemicalDrop,
};

const SensorIcon: React.FC<SensorIconProps> = ({ name, size = 24, className }) => {
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} className={className} />;
};

export default SensorIcon;