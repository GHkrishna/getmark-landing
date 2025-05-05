
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className = "" }: FeatureCardProps) => {
  return (
    <div className={`rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md ${className}`}>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-getmark-red/10 text-getmark-red">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
