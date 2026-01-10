import axios from "axios";
import React, { useEffect, useState } from "react";

const useData = (url, headers = {}) => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios({url,
      method: "GET",
      headers,
    })
      .then((data) => setDatas(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);
  return { datas, loading, error };
};

export default useData;
