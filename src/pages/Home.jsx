import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="font-poppins text-3xl font-semibold px-10 py-5">
        This is our home page
      </h1>
    </div>
  );
}