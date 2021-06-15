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

  // sil tusu icin onClick methodu
  const sil = (idx) => {
    setData(data.filter((v, i) => i !== idx));
  };

  return { data, sil };
}

export default useFecth;
