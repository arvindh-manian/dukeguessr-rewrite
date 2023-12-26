import { ModeImage } from "@/types";

export const ModeButton: React.FC<ModeImage> = ({ text, imageURL }) => {
    return (
        <button 
        className="bg-cover bg-center bg-no-repeat text-white text-center p-4 w-48 h-12 flex items-center justify-center"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        {text}
      </button>
    );
  };