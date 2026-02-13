import { useState, useEffect } from 'react';
import Header from '../components/Header';

interface Game {
  id: number;
  title: string;
  image: string;
  price: string;
  description: string;
}

const Wishlist = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const storedGames = localStorage.getItem('myWishlist');
    if (storedGames) {
      try {
        const parsed = JSON.parse(storedGames);

        setGames(Array.isArray(parsed) ? parsed : [parsed]);
      } catch {
        setGames([]);
      }
    }
  }, []);

  const removeGame = (id: number) => {
    const updatedList = games.filter(game => game.id !== id);
    setGames(updatedList);
    localStorage.setItem('myWishlist', JSON.stringify(updatedList));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-neutral-900 text-white p-8">
        {/* Header */}
        <div className="max-w-6xl mt-15 mx-auto mb-8 border-b border-neutral-700 pb-4">
          <h1 className="text-4xl font-bold">My Wishlist</h1>
          <p className="text-gray-400 mt-2">
            {games.length} {games.length === 1 ? 'Game' : 'Games'} saved for later
          </p>
        </div>

        {/* Grid Container */}
        <div className="max-w-6xl mx-auto">
          {games.length === 0 ? (
            <div className="text-center py-20 opacity-50">
              <h2 className="text-2xl font-semibold">Your wishlist is empty</h2>
              <p>Go explore and add some games!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {games.map(game => (
                <div 
                  key={game.id} 
                  className="bg-neutral-800 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-lg border border-neutral-700"
                >
                  <div className="h-48 overflow-hidden relative group">
                    <img 
                      src={game.image} 
                      alt={game.title} 
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold truncate pr-4">{game.title}</h3>
                      <span className="bg-green-600 text-xs font-bold px-2 py-1 rounded">{game.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">{game.description}</p>

                    <button 
                      onClick={() => removeGame(game.id)}
                      className="w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
