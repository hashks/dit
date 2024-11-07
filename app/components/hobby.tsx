import React from 'react'; 
import hobby1 from "./assets/masak.png";
import hobby2 from "./assets/novel.png";
import hobby3 from "./assets/drakor.png";
import hobby4 from "./assets/alam.png";

const Hobbies = [
  { id: 1, name: "Memasak", image: hobby1 },
  { id: 2, name: "Membaca Novel", image: hobby2 },
  { id: 3, name: "Menonton Drakor", image: hobby3 },
  { id: 4, name: "Memotret Pemandangan", image: hobby4 },
];

export default function MyGallery() {
  return (
    <section className="container mx-auto p-4 text-center">
      <h2 className="text-yellow-400 font-bold">MY GALLERY</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
        {Hobbies.map((hobby) => (
          <div key={hobby.id} className="border-2 border-gray-600 rounded-lg bg-gray-700 text-gray-100 p-4 shadow-md">
            <img src={hobby.image.src} alt={hobby.name} className="w-full h-auto rounded-md" />
            <div className="mt-2 font-medium">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
