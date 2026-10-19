import Link from "next/link";

export default function NavBar() {
    const navLinks = [
        { label: "Highlights", href: "#highlights", className: "hover:text-yellow transition-colors duration-300" },
        { label: "Projects", href: "#projects", className: "hover:text-yellow transition-colors duration-300" },
        { label: "Toolbox", href: "#toolbox", className: "hover:text-yellow transition-colors duration-300" },
        { label: "Story", href: "#story", className: "hover:text-yellow transition-colors duration-300" },
        { label: "Contact me", href: "#contact", className: "bg-yellow text-ink px-4 py-2 rounded-xl hover:text-yellow hover:bg-ink transition-colors duration-300" },
    ];

    return <nav className="flex items-center justify-between h-20.5 bg-ink px-2" aria-label="Main navigation">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4">
            <Link className="flex items-center gap-2 text-white font-bold" href="#top">
                <span className="w-8 h-8 bg-coral flex items-center justify-center text-white font-bold rounded-xl">FS</span><span>Fábio Silva</span>
            </Link>
            <div className="text-white gap-4 flex items-center font-medium">
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={link.className}>
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    </nav>;
}
