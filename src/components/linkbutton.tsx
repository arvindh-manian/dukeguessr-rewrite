export const LinkButton = ({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) => {
  return (
    <a
      href={href}
      className={
        "text-white bg-accent2 rounded-lg px-4 py-2" +
        (className ? " " + className : "")
      }
    >
      <h1 className="text-xl">{text}</h1>
    </a>
  );
};
