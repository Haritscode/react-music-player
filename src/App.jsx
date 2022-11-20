import Sidebar from "./components/Sidebar";
import MusicPlayer from "./components/MusicPlayer";
import Discover from "./pages/Discover";
function App() {
  return (
    <>
      <div className="flex gap-2 w-screen">
        <div className="hidden md:block w-1/10">
        <Sidebar/>
        </div>
        <div className="bg-gradient-to-br from-black to-[#121286] flex w-full overflow-hidden">
          <Discover/>
        </div>
      </div>
    </>
  );
}

export default App;
