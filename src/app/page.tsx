"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FlipNumbers from "react-flip-numbers";

const calculateTimeTogether = () => {
  const startTime = new Date("2024-08-20T20:40:00-03:00").getTime();
  const now = new Date().getTime();
  const difference = now - startTime;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export default function LovePage() {
  const [timeTogether, setTimeTogether] = useState(calculateTimeTogether());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeTogether(calculateTimeTogether());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full bg-[#212121] text-[#ff4f81] flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Gu e Amanda ♥️
      </h1>
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Nós estamos juntos há:
      </h1>
      <div className="flex space-x-2 text-center">
        <div>
          <FlipNumbers
            height={50}
            width={40}
            color="#ff4f81"
            background="#303030"
            // numberStyle={{ fontSize: "1rem" }}
            play
            numbers={`${timeTogether.days}`}
          />
          <p className="text-white mt-2">Dias</p>
        </div>
        <div>
          <FlipNumbers
            height={50}
            width={40}
            color="#ff4f81"
            background="#303030"
            play
            numbers={`${timeTogether.hours}`}
          />
          <p className="text-white mt-2">Horas</p>
        </div>
        <div>
          <FlipNumbers
            height={50}
            width={40}
            color="#ff4f81"
            background="#303030"
            play
            numbers={`${timeTogether.minutes}`}
          />
          <p className="text-white mt-2">Minutos</p>
        </div>
        <div>
          <FlipNumbers
            height={50}
            width={40}
            color="#ff4f81"
            background="#303030"
            play
            numbers={`${timeTogether.seconds}`}
          />
          <p className="text-white mt-2">Segundos</p>
        </div>
      </div>
      <div className="w-full max-w-xl mt-12">
        <Carousel autoPlay infiniteLoop showStatus={false} swipeable>
          <div>
            <Image
              src="/image3.jpeg"
              alt="Foto 2"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/image2.jpeg"
              alt="Foto 2"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/image4.jpeg"
              alt="Foto 2"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/image1.jpeg"
              alt="Foto 1"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </Carousel>
      </div>
      <div className="max-w-3xl text-center text-white">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
          dictum elit. Vivamus sit amet nulla nec justo gravida tempor.
          Suspendisse potenti.
        </p>
      </div>
    </div>
  );
}
