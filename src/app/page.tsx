"use client";

import { useState } from "react";
import type { MouseEventHandler } from "react";
import { RandomFox } from "@/components/RandomFox";

const random = (): number => Math.floor(Math.random() * 123) + 1;

const generateId = (): string => Math.random().toString(36).substr(2, 9);

type ImageItem = { id: string; url: string };

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };

    setImages([...images, newImageItem]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button onClick={addNewFox}>Add new Fox</button>
        {images.map(({ id, url }) => (
          <div className="p-4" key={id}>
            <RandomFox image={url} />
          </div>
        ))}
      </div>
    </main>
  );
}
