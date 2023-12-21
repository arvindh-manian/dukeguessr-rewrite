export const Header = () => {
  return (
    <div className="w-full bg-primary text-white min-h-16 flex items-center justify-between px-8 py-4 shadow-md">
      <h1 className="self-start text-2xl font-bold">DukeGuessr</h1>
      <div className="self-end flex justify-between items-center gap-12 text-xl">
        <h1>Leaderboard</h1>
        <h1>Contact Us</h1>
        <h1>Upload Images</h1>
        <h1>Login</h1>
        <h1>Sign Up</h1>
      </div>
    </div>
  );
};
