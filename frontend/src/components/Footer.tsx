export default function Footer() {
  return (
    <footer className="bg-gray-200 py-6 mt-8">
      <div className="container mx-auto text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Phoenix AI Space. All rights reserved.
      </div>
    </footer>
  );
}