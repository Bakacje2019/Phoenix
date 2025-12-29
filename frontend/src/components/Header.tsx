import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-primary-dark">Phoenix AI Space</h1>
        <nav className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-primary-dark">
            Home
          </Link>
          <Link href="#features" className="text-gray-700 hover:text-primary-dark">
            Features
          </Link>
          <Link href="#docs" className="text-gray-700 hover:text-primary-dark">
            Documentation
          </Link>
        </nav>
      </div>
    </header>
  );
}