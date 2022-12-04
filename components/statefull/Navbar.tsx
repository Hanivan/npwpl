import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import MoonIcon from "@/components/stateless/MoonIcon";
import SunIcon from "@/components/stateless/SunIcon";

const Navbar = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [matchUrl, setMacthUrl] = useState(router.asPath);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setMacthUrl(router.asPath);
  }, [router]);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="hidden md:block font-medium">
      <ul className="flex gap-8">
        <li>
          <Link
            href={`/`}
            rel="noopener noreferrer"
            className={`${
              matchUrl === "/" ? "pb-1 border-b-2 border-secondary" : ""
            }`}
          >
            Home
          </Link>
        </li>
        {/* <li>
          <Link href={`projects`} rel="noopener noreferrer"></Link>
        </li> */}
        <li>
          <button
            className="p-2 rounded border border-secondary text-secondary hover:bg-secondary hover:text-bg-light transition"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </li>
        {/* <li>
          <Link
            href={`https://github.com/Hanivan`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            href={`https://instagram.com/hanivanrizky`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram
          </Link>
        </li>
        <li>
          <Link
            href={`https://www.linkedin.com/in/hanivanrizky`}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link
            href={`https://hanivanrizky.t.me`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Telegram
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
