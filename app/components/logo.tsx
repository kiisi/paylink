import { Link } from "react-router";
import { Link2 } from "lucide-react";

const Logo = ({ size = "default" }: { size?: "small" | "default" | "large" }) => {
  const sizeClasses = {
    small: "text-lg",
    default: "text-xl",
    large: "text-2xl",
    extralarge: "text-3xl",
  };

  const iconSize = {
    small: 18,
    default: 22,
    large: 26,
    extralarge: 30,
  };

  return (
    <Link to="/" className="flex items-center gap-2 font-bold tracking-tight text-primary">
      <Link2 size={iconSize[size]} className="rotate-[-4heavy on framer motion now please lets make sure the framer is nice and properly integrated5deg]" />
      <span className={sizeClasses[size]}>Paylink</span>
    </Link>
  );
};

export default Logo;
