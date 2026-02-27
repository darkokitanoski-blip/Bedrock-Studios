import { useParams, Link } from 'react-router-dom';
import { FaDownload, FaGamepad } from 'react-icons/fa';
import Header from '../components/Header';
import { FaShoppingCart } from "react-icons/fa";
import Swal from 'sweetalert2'

// på grund av jag använder TypeScript jag ska definiera dess data type varje object jag ska lägga in 
interface GameData {
  title: string;
  description: string;
  genre: string;
  downloadLink: string;
  image: string;
  wishlistproperties: {
    id: number;
    title: string;
    image: string;
    price: string;
    description: string;
  };
}



const gamesDatabase: Record<string, GameData> = {
  streetsnheist: {
    title: "Streets 'n Heist",
    genre: "Open World Action",
    description: "Navigate the gritty underworld in this high-octane heist simulator. Plan the perfect robbery, evade the law, and rule the streets.",
    downloadLink: "/downloads/snh_setup.exe",
    image: "newpic2.png", 
    wishlistproperties: { 
        id: 1, 
        title: "Streets n' Heist", 
        image: "/newpic2.png", 
        price: "$59.99",
        description: "High-stakes heists and daring chases."
      }
  },
  parryvsgod: {
    title: "Parry vs God",
    genre: "Hardcore Boss Rush",
    description: "Reflexes are your only weapon. Defeat pantheons of ancient deities using nothing but perfectly timed parries. One mistake means death.",
    downloadLink: "/downloads/pvg_setup.exe",
    image: "image_1.jpg",
    wishlistproperties: { 
        id: 2, 
        title: "Parry vs God", 
        image: "/image_1.jpg.png", 
        price: "$59.99",
        description: "Fight a boss in a 3d game"
      }
  }
};


// Den sidan som man är navigerad efter man klickar på ett spel från huvud sidan. Användaren kan också wishlista spelet här.
const GamePage = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id)

  const game = id && gamesDatabase[id.toLowerCase()] ? gamesDatabase[id.toLowerCase()] : null;
  if (!game) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gray-900">
        <h1 className="text-4xl font-bold mb-4">404 - Game Not Found</h1>
        <p>The game "{id}" does not exist in our database.</p>
        <Link to="/" className="mt-6 text-blue-400 hover:underline">Return Home</Link>
      </div>
    );
  }

  return (
    <>
    <Header></Header>
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <div   className="w-full h-80 flex items-center justify-center relative bg-cover bg-center"
  style={{ backgroundImage: `url(/${game.image})` }}>
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay */}
        <h1 className="relative z-10 text-6xl font-extrabold tracking-tighter uppercase drop-shadow-lg">
          {game.title}
        </h1>
      </div>

      <div className="GamePage max-w-4xl mx-auto px-6 py-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-700 pb-6">
          <div>
            <span className="bg-gray-600 text-xs font-bold px-2 py-1 rounded text-gray-300 uppercase tracking-wide">
              {game.genre}
            </span>
            <h2 className="text-3xl font-bold mt-2">Overview</h2>
          </div>
        
          <div className="flex gap-4 mt-4 md:mt-0">
            <button onClick={() => {
  const stored = localStorage.getItem("myWishlist");
  let wishlist = [];

  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      wishlist = Array.isArray(parsed) ? parsed : [parsed];
    } catch {
      wishlist = [];
    }
  }
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your Game Is Wishlisted",
    showConfirmButton: false,
    timer: 1500,
    background: "#000"
  });

  if (!wishlist.find((item) => item.id === game.wishlistproperties.id)) {
    wishlist.push(game.wishlistproperties);
  }

  localStorage.setItem("myWishlist", JSON.stringify(wishlist));
}} className="flex fill-black items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all border border-gray-600">
               <FaShoppingCart className="fill-black" />
               <span>Wishlist</span>
            </button>

            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-bold shadow-lg transition-transform hover:scale-105">
               <FaDownload />
               <span>DOWNLOAD NOW</span>
            </button>
          </div>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 leading-relaxed">
            {game.description}
          </p>
          <div className="mt-8 p-4 bg-gray-800 rounded-lg flex items-center gap-4">
             <FaGamepad className="text-3xl text-gray-400"/>
             <p className="text-sm text-gray-400">
               Version 1.0 • Windows / Mac • 25GB Space Required
             </p>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}

export default GamePage;