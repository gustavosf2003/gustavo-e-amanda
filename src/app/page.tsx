"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FlipNumbers from "react-flip-numbers";
import Loading from "./components/Loading";

const Carousel = lazy(() =>
  import("react-responsive-carousel").then((mod) => ({ default: mod.Carousel }))
);

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
    // add a bg gradient from #212121 to #181818 from top to bottom
    <div className="h-full  text-[#ff4f81] flex flex-col items-center justify-center p-6 inconsolata-amanda bg-gradient-to-b from-[#212121] via-[#212121]  to-[#181818]">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 inconsolata-amanda">
        Gu e Amanda ♥️
      </h1>
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-5 inconsolata-amanda">
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
        <Suspense
          fallback={
            <div className="h-[500px] flex justify-center items-center">
              <Loading />
            </div>
          }
        >
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
        </Suspense>
      </div>
      <div className="max-w-3xl text-center text-white">
        <p>
          Criei esta calculadora de tempo para marcar desde quando nos
          conhecemos, do no nosso primeiro encontro (20/11 às 20:40 - Cidade
          Jardim) até o momento.
        </p>
        <p className="mt-2">
          Adicionei alguns momentos especiais que vivemos nesses{" "}
          <u className="font-bold">{timeTogether.days} dias</u> para
          relembrarmos juntos e dizer que você é muito importante para mim. Fico
          muito feliz em estar ao seu lado e quero que esse número aumente cada
          vez mais.
        </p>
        <p className="mt-10">Com carinho, Gu ❤️</p>
      </div>
    </div>
  );
}
