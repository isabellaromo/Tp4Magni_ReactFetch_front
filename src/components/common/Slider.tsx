import { useState } from "react";

const images = [
  "../public/img/instrumentos1.jpg", "../public/img/instrumentos2.webp", "../public/img/instrumentos3.jpg"
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  //Slider: ir una imagen para atrás
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  //Slider: ir una imagen para adelante
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <button onClick={goToPrev} className="text-white text-3xl w-[50px] h-[50px] bg-gray-800 rounded-2xl border-none cursor-pointer hover:bg-gray-950">←</button>
      <div className="shadow-xl shadow-slate-500 rounded-[10px]">
        <img src={images[currentIndex]} alt="slider" className="object-cover w-[500px] h-[400px] rounded-[10px]" />
      </div>
      <button onClick={goToNext} className="text-white text-3xl w-[50px] h-[50px] bg-gray-800 rounded-2xl border-none cursor-pointer  hover:bg-gray-950">→</button>
    </div>
  )
}

export default Slider