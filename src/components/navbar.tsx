import { NavbarItem } from "@/types";

export const Navbar = () => {
  const NAVBAR_ITEMS: NavbarItem[] = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "/leaderboard",
      text: "Leaderboard",
    },
    {
      link: "/contact",
      text: "Contact Us",
    },
    {
      link: "/upload",
      text: "Upload",
    },
    {
      link: "/login",
      text: "Login",
    },
    {
      link: "/signup",
      text: "Sign Up",
    }
  ]
  return (
    <div className="w-full bg-primary text-white min-h-16 flex items-center justify-between px-8 py-4 shadow-md">
      <h1 className="self-start text-2xl font-bold">DukeGuessr</h1>
      <div className="self-end flex justify-between items-center gap-12">
        {NAVBAR_ITEMS.map((item) => (
          <NavbarLink key={item.link} link={item.link} text={item.text} />
        ))}
      </div>
    </div>
  );
};

const NavbarLink = ({ link, text}: { link: string; text: string }) => {
  return <a href={link}>
    <h1 className="text-xl">
     {text}
    </h1>
  </a>;
}