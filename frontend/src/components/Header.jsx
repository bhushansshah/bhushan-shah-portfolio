export default function Header() {
  return (
    <header className="flex justify-between items-center mb-2">
      <div className="text-sky-500 font-bold text-2xl">Bhushan Shah</div>
      <nav className="space-x-6 font-semibold text-sky-600">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#publications">Publications</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}