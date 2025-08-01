
const { useState } = React;

function EcommerceHomePage() {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);

  const products = [
    { id: 1, name: "Wireless Headphones", price: 1999, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Smart Watch", price: 2999, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Bluetooth Speaker", price: 1499, image: "https://via.placeholder.com/150" },
  ];

  const handleAddToCart = (product) => setCart([...cart, product]);
  const handleLogin = () => setUser({ name: "John Doe", email: "john@example.com" });
  const handleLogout = () => setUser(null);
  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 p-6">
      <header className="flex justify-between items-center py-4 border-b border-gray-300">
        <h1 className="text-3xl font-extrabold text-blue-800 tracking-wide">🛒 ShopMate</h1>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search for gadgets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-blue-300 rounded-xl p-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {user ? (
            <button className="rounded-xl border border-blue-300 text-blue-700 p-2" onClick={handleLogout}>
              {user.name} (Logout)
            </button>
          ) : (
            <button className="rounded-xl border border-blue-300 text-blue-700 p-2" onClick={handleLogin}>
              Login
            </button>
          )}
          <button className="rounded-xl border border-blue-300 p-2">
            🛒 {cart.length}
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="rounded-2xl shadow-lg border-2 border-blue-200 hover:shadow-xl transition p-4 bg-white">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4" />
            <h2 className="text-xl font-bold text-blue-800 mb-1">{product.name}</h2>
            <p className="text-gray-700 font-medium text-lg">₹{product.price}</p>
            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </main>

      {cart.length > 0 && (
        <footer className="fixed bottom-0 left-0 w-full bg-white border-t p-4 shadow-lg">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <div className="text-lg font-semibold text-blue-800">
              Cart Total: ₹{totalAmount}
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-xl">
              Proceed to Checkout
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}

ReactDOM.render(<EcommerceHomePage />, document.getElementById('root'));
