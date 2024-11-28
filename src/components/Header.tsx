import Link from 'next/link'
import { Button } from './ui/button'

const Header = () => {
  return (
    <div className="py-8 xl:ly-12 text-white">
      <div className="container mx-auto">
        <Link href="./">
          <h1 className="text-4xl font-semibold">
            Gabriel <span>.</span>
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default Header
