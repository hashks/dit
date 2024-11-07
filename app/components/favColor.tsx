import { useState } from "react";

type FavColorProps = {
  onColorChange: (color: string) => void;
};

export default function FavColor({ onColorChange }: FavColorProps) {
  const [warna, setWarna] = useState("-");

  const handleClick = (newColor: string, bgColor: string) => {
    setWarna(newColor);
    onColorChange(bgColor);
  };

  return (
    <div className="container mx-auto p-4 text-center text-gray-700">
      <div className="border-2 border-gray-300 rounded-lg bg-gray-50 p-6">
        <h1 className="font-bold mb-4">Warna Favorit Saya adalah {warna}</h1>
        <hr className="my-4" />
        <p className="mb-4">Ubah tema ke warna:</p>
        
        <button
          className="bg-gray-400 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded m-2"
          onClick={() => handleClick("gray", "bg-gray-500")}
        >
          gray
        </button>
        
        <button
          className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={() => handleClick("Gelap", "bg-gray-900")}
        >
          Gelap
        </button>
        
        <button
          className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded m-2 border border-gray-300"
          onClick={() => handleClick("Terang", "bg-white")}
        >
          Terang
        </button>
      </div>
    </div>
  );
}
