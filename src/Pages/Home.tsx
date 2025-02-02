import SelfPortrait from '../assets/SelfPortrait.jpg';

const Home = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          
          <h1 className="text-5xl font-bold mb-6">Welcome to ReFerScape!</h1>

          
          <p className="text-lg mb-8">
          ReFerScape is your go-to platform for discovering, inspiring images, ideas
          </p>

        

          {/* Featured Image (Optional) */}
          <div className="mt-12">
            <img
                src={SelfPortrait}
                alt="Self Portrait"
                className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;