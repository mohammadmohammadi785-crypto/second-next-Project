"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  function handleClick() {
    router.refresh();
    startTransition(() => {
      reset();
    });
  }
  return (
    <div className="items-center flex flex-col text-white w-full h-screen">
      <h1 className="text-center font-bold text-3xl ">{error.message}</h1>
      <button
        className="py-2 px-12 rounded-md mt-2 border"
        onClick={() => handleClick()}
      >
        try again
      </button>
    </div>
  );
}
