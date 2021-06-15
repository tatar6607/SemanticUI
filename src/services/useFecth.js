import axios from "axios";
import { useEffect, useState } from "react";

function useFecth(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortCont = new AbortController();
    axios
      .get(url, { signal: abortCont.signal })
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));

    // clean-up func.
    return () => abortCont.abort();
  }, [url]);

  const sil = (idx) => {
    setData(data.filter((user) => user.id !== idx));
    // console.log("===================");
    // console.log(idx);
    // console.log(data.length);
  };

  return { data, sil };
}

export default useFecth;
