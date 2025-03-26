import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                DivineDazzle
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              Transform your space with our stunning collection of wall art. Each piece is carefully curated to bring beauty and inspiration to your home.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/gallery" className="hover:underline">Gallery</Link>
                </li>
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">About Us</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                </li>
                <li className="mb-4">
                  <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:underline">Shipping Info</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Connect</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Instagram</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Facebook</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Pinterest</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} DivineDazzle™. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
} 