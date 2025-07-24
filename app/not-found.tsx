
import Link from 'next/link';


const BACKGROUND_IMAGE_URL = '/notfoundimage.png';

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-900 p-6"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center text-white">
        <h1 className="text-7xl font-bold tracking-tighter text-white sm:text-8xl md:text-9xl">
          404
        </h1>
        <p className="mt-4 max-w-sm text-lg text-gray-300 md:text-xl">
          Sorry, we were unable to find that page
        </p>
        <p className="mt-8 text-base text-gray-400 md:text-lg">
          Start from{' '}
          <Link href="/" className="font-medium text-white underline transition-colors hover:text-gray-200">
            home page
          </Link>
        </p>
      </div>
    </main>
  );
}