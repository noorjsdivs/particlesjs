import Banner from "./components/Banner";
import Design from "./components/Design";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full h-screen bg-banner-bg bg-no-repeat bg-center bg-cover relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-white">
        {/* Header */}
        <Header />
        {/* Banner */}
        <Banner />
      </div>
      <div className="w-full h-screen absolute top-0 left-0">
        <Design />
      </div>
    </div>
  );
}

export default App;
