
import { ReactNode } from "react";

interface StatsCardProps {
  value: string;
  label: string;
  icon: ReactNode;
}

const StatsCard = ({ value, label, icon }: StatsCardProps) => {
  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-2 text-getmark-red">{icon}</div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
};

export default StatsCard;
