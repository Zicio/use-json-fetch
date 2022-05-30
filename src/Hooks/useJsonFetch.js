/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const useJsonFetch = (opts) => {
  const newUrl = "http://localhost:7070/".concat(opts);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(newUrl);
        const result = await response.json();
        setData(result.status);
        setError(null);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return [data, loading, error];
};

export default useJsonFetch;
