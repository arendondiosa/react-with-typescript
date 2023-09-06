"use client";

import { useState } from "react";
import type { MouseEventHandler } from "react";
import { LazyImage } from "@/components/LazyImage";

const random = (): number => Math.floor(Math.random() * 123) + 1;

const generateId = (): string => Math.random().toString(36).substr(2, 9);

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log('click')
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
            <LazyImage
              src={url}
              width={320}
              height="auto"
              className="rounded bg-gray-300"
              onClick={() => console.log("Hey")}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
