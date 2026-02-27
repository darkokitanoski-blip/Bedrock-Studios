import Header from '../components/Header';
import { useEffect, useState } from 'react';
import { Spinner } from '../components/ui/spinner';


// Konto sida, man kan också logga ut från här
const AccountPage = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<string | null>(null);

  const handleSignOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    async function initUser() {

      const token = localStorage.getItem("authToken");
      const storedUsername = localStorage.getItem("userName");


      if (storedUsername && storedUsername.trim() !== "") {
        setUser(storedUsername);
      }

      if (token) {
        try {
          const res = await fetch("https://innews-6hkq.onrender.com/api/user/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (!res.ok) {
            console.error("Invalid token or server error:", res.status);
            handleSignOut();
            return;
          }

          const data = await res.json();
          console.log(data)
          if (data.userName && data.userName.trim() !== "") {
            localStorage.setItem("userName", data.userName);
            setUser(data.userName);
          } else {
            handleSignOut();
          }
        } catch (err) {
          console.error("Failed to fetch username:", err);
          handleSignOut();
        }
      }

      setLoading(false);
    }

    initUser();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center mt-20 flex flex-col">
        <Spinner />
        Verifying...
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen px-4 pt-20 pb-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-yellow-200 rounded-2xl p-6 mb-6 text-yellow-200">
            <h1 className="text-2xl sm:text-3xl font-bold mb-1">
              Welcome{user ? `, ${user}` : ""}
            </h1>
            <button
              onClick={handleSignOut}
              className="mt-4 px-5 py-3 rounded-xl border border-yellow-200 text-white"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
