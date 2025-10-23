export default function Footer() {
  return (
    <footer className="bg-[#FFF7ED] border-t border-orange-100 py-6 text-center text-gray-600">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-[#FB923C] font-semibold">Khidhir</span>.
        All rights reserved.
      </p>
    </footer>
  );
}
