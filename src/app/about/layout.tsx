export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed right-0 top-10 z-10 h-screen w-60 p-4 bg-gray-800 ">
        <ul>
          <li className="text-white">Home</li>
          <li className="text-white">About</li>
          <li className="text-white">Profile</li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
