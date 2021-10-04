import { useState, useEffect } from "react";

export const Api = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const information = await response.json();
    setData(information);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);
  return { loading, data };
};
