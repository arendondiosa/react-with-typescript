import { RandomFox } from "@/components/RandomFox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <RandomFox />
      </div>
    </main>
  );
}
