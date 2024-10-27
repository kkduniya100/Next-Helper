const Header = () => {
    return (
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <p>Welcome, User</p>
          <button className="bg-blue-500 text-white px-3 py-1 rounded">Logout</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  