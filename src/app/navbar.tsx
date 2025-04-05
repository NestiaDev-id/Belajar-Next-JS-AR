import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 ">
      <h1 className=" text-white">Navbar</h1>
      <ul className="flex gap-4">
        <Link href="/">
          <li className="text-white hover:text-grey-500">Home</li>
        </Link>
        <Link href="/about">
          <li className="text-white hover:text-grey-500">About</li>
        </Link>
        <Link href="/about/profile">
          <li className="text-white hover:text-grey-500">Profile</li>
        </Link>
      </ul>
    </div>
  );
}
