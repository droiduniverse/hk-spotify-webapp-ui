import { useState, useEffect } from "preact/hooks";
import style from "./style.css";
import Card from "../../components/card/card";
import List from "preact-material-components/List";
import cardStyle from "../../components/card/style.css";



const Search = () => {
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [artistName, setArtistName] = useState("");
  const [_error, setError] = useState("");
  const [placeholder, setPlaceholder] = useState("Please write an artist name:");

  useEffect(() => {
    const fetchData = async () => {
      if (artistName) {
        try {
          const response = await fetch(
            process.env.REACT_APP_SEARCH_SERVICE_URI,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              mode: "cors",
              body: JSON.stringify({ artistName }),
            }
          );

          if (!response.ok) {
            throw new Error(
              response.status.toString() + " " + response.statusText.toString()
            );
          }

          const data = await response.json();
          //console.log(data);
          setResults(data);
          setShowResults(true);
        } catch (error) {
          console.log(error);
          setError("Error: " + error);
        }
      }
    };
    fetchData();
  }, [artistName]);

  const handleSearch = () => {
    setResults([]);
    setShowResults(false);
    setArtistName(document.getElementById("artist-name").value);
  };

  return (
    <div className={style.search}>
      <Card title="Search album by an artist:" className={cardStyle.card}>
        <div className={cardStyle["card-body"]}>
          <label
            htmlFor="artist-name"
            className={cardStyle.placeholder}
            onChange={(e) => setArtistName(e.target.value)}
            onBlur={() => setPlaceholder("Please write an artist name")}
          ></label>
          <input
            type="text"
            id="artist-name"
            className={cardStyle.input}
            placeholder={placeholder}
          />
          <button className={cardStyle.submit} onClick={handleSearch}>
            Search
          </button>
        </div>
      </Card>
      {showResults && results.length > 0 ? (
        <Card title="Search results" className={style.card}>
          <div className={style["card-body"]}>
            <h2>{results[0].artists}</h2>
            <List>
              {results[0].albums.map((result, index) => (
                <List.Item key={index}>{result}</List.Item>
              ))}
            </List>
          </div>
        </Card>
      ) : showResults ? (
        <Card
          title={results.message}
          className={cardStyle["card-w-results"]}
        ></Card>
      ) : null}
      {_error !== "" && (
        <Card title={_error} className={cardStyle["card-error"]}></Card>
      )}
    </div>
  );
};

export default Search;
