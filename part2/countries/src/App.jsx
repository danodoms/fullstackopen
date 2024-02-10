import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState(null);

  const handleSearch = () => {};

  return (
    <>
      <div>
        <p>Find countries</p>

        <input value={searchTerm} onChange={handleSearch} />
      </div>
    </>
  );
}

export default App;
