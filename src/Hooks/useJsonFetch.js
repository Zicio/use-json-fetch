import { useState, useEffect } from "react";

const useJsonFetch = (opts) => {
  const newUrl = "http://localhost:7070/".concat(opts);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(newUrl);
      if (response.ok) {
        const result = await response.json();
        setData(result);
      }
      setError(null);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useJsonFetch;
