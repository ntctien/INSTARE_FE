import { useEffect, useState } from "react";
import searchUser from "~/api/services/no-auth/searchUser";

const useSearchUser = () => {
  const [value, setValue] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  // Debouncing
  useEffect(() => {
    if (value === "") {
      setSearchResult([]);
      return;
    }
    const getData = setTimeout(async () => {
      await searchUser(value)
        .then(({ data }) => {
          setSearchResult([...data]);
        })
        .catch((err) => console.log(err));
      setSearchLoading(false);
    }, 500);

    return () => clearTimeout(getData);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value !== "") {
      setSearchLoading(true);
    } else {
      setSearchLoading(false);
    }
  };

  const handleClearSearch = () => {
    setValue("");
  };

  return {
    value,
    searchLoading,
    searchResult,
    handleChange,
    handleClearSearch,
  };
};

export default useSearchUser;
