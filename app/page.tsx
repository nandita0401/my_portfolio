import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-700 mb-6">
        Hi, I'm Nandita — a passionate developer and data analyst.
      </p>
      <nav className="space-x-4">
        <a href="/about" className="text-blue-600 hover:underline">About</a>
        <a href="/projects" className="text-blue-600 hover:underline">Projects</a>
        <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
      </nav>
    </div>
  );
}
