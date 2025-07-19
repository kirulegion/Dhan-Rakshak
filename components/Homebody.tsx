import Image from "next/image";
import Link from "next/link";

const Homebody = () => {
  return (
    <main className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/home.jpg"
        alt="home cover"
        fill
        priority
        className="object-cover brightness-50 blur-sm z-[-1]"
      />

      {/* Overlay Content */}
      <section className="flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          <span className="text-9xl">"</span>Dhan Ki Soch, AI Ki Approach.
          <span className="text-9xl">"</span>
        </h1>
        <Link href="/signin">
          <button className="text-white px-6 py-3 shadow-md bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 active:scale-95 active:shadow-sm transition duration-150">
            Get Started
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Homebody;
