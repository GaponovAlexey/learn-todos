import Link from 'next/link'

const Header = () => {
  return (
    <header className='p-5 bg-slate-600 justify-between flex '>
      <div>logo</div>
      <ul className='flex'>
        <li className='px-5'>
          <Link href='/'>Home</Link>
        </li>
        <li className='px-5'>
          <Link href='/todo'>Todo</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
