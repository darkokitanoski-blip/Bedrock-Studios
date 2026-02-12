import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

// Define what a Game object looks like
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
      setGames(JSON.parse(storedGames));
    } else {
      // DEFAULT DATA: (Remove this else block if you want it empty by default)
      const defaultGames = [
        { 
          id: 1, 
          title: "Streets n' Heist", 
          image: "/newpic2.png", 
          price: "$59.99",
          description: "High-stakes heists and daring chases."
        },
        { 
          id: 2, 
          title: "Parry Vs God", 
          image: "/MAYOgame.png", 
          price: "$49.99",
          description: "Open world boss rush experience."
        }
      ];
      setGames(defaultGames);
      localStorage.setItem('myWishlist', JSON.stringify(defaultGames));
    }
  }, []);

  // 2. Function to remove a game
  const removeGame = (id: number) => {
    const updatedList = games.filter((game) => game.id !== id);
    setGames(updatedList);
    // Update LocalStorage so the deletion persists
    localStorage.setItem('myWishlist', JSON.stringify(updatedList));
  };

  return (
    <>
        <Header></Header>
        <div className="min-h-screen bg-neutral-900 text-white p-8 ">
        
        {/* Header */}
        <div className="max-w-6xl mt-15 mx-auto mb-8 border-b border-neutral-700 pb-4">
            <h1 className="text-4xl font-bold">My Wishlist</h1>
            <p className="text-gray-400 mt-2">
            {games.length} {games.length === 1 ? 'Game' : 'Games'} saved for later
            </p>
        </div>

        {/* Grid Container */}
        <div className="max-w-6xl mx-auto">
            
            {/* Empty State */}
            {games.length === 0 ? (
            <div className="text-center py-20 opacity-50">
                <h2 className="text-2xl font-semibold">Your wishlist is empty</h2>
                <p>Go explore and add some games!</p>
            </div>
            ) : (
            /* Games Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.map((game) => (
                <div 
                    key={game.id} 
                    className="bg-neutral-800 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-lg border border-neutral-700"
                >
                    {/* Image Area */}
                    <div className="h-48 overflow-hidden relative group">
                    <img 
                        src={game.image} 
                        alt={game.title} 
                        className="w-full h-full object-cover transition-opacity duration-500"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        View Details
                        </button>
                    </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold truncate pr-4">{game.title}</h3>
                        <span className="bg-green-600 text-xs font-bold px-2 py-1 rounded">
                        {game.price}
                        </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                        {game.description}
                    </p>

                    <button 
                        onClick={() => removeGame(game.id)}
                        className="w-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-semibold"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
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