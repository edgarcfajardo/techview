import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { links } from "../Navbar.data";

export function NavbarDesktop() {
  return (
    <div className="hidden md:flex items-center gap-4 text-lg">
        {links.map((link) => (
            <Button key={link.name} asChild variant="ghost">
                <Link href={link.href}>
                    {link.name}
                </Link>
            </Button>
        ))}
    </div>
  )
}
