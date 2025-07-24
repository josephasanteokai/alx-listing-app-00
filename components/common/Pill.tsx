type PillProps = {
    label: string;
    onClick?: () => void;
    isActive?: boolean;
  };
  
  export default function Pill({ label, onClick, isActive }: PillProps) {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
          isActive
            ? "bg-black text-white"
            : "bg-white text-black border-gray-300 hover:bg-gray-100"
        }`}
      >
        {label}
      </button>
    );
  }
  