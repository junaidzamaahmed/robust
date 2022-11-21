import Image from "next/image";
import React from "react";
import spinner from "../../src/spinner.png";

export const LoadingScreen = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white text-xl font-semibold">
      <div>
        <Image
          height={40}
          width={40}
          src={spinner}
          className="animate-[spin_1s_ease-out_infinite] mb-5"
          alt="Spinner"
        />
      </div>
      <p>Loading Robust...</p>
    </div>
  );
};
