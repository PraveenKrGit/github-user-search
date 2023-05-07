import { useState } from "react";
import Form from "./Form";
import User from "./User";
import "../App.css";

const Home = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState();

  const API_URL = "https://api.github.com";

  const onSearchSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(`${API_URL}/search/users?q=${query}`);
      const result = await response.json();
      console.log(result.items);
      setResults(result.items);
    } catch (e) {
      console.log(e);
    }
  };

  const onSearchChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="home">
      <main className="main">
        <h2 className="title">GitHub User Search</h2>

        <Form
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          value={query}
        />

        {results?.length > 0 && (
          <div id="results">
            <h3>Search Results</h3>
            <div className="container">
              {results?.map((user) => {
                return (
                  <div key={user.login}>
                    <User
                      key={user.login}
                      avatar={user.avatar_url}
                      url={user.html_url}
                      username={user.login}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
      </main>
    </div>
  );
};

export default Home;
