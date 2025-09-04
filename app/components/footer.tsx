export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400 font-mono font-mono">© {new Date().getFullYear()} SanikaTunes.All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              School
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
