import { useState, useEffect } from "react";
import { useStudentContext } from "./useStudentContext";

export const useFetch = (url) => {
  const { dispatch } = useStudentContext();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      const res = await fetch(url);
      const json = await res.json();

      setIsPending(false);
      setData(json);
      dispatch({ type: "GETDATA", payload: json });
    };

    fetchData();
  }, [url]);

  return { data, isPending, error };
};
