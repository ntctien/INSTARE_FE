import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import getListContact from "~/api/services/chat/getListContact";

const useContactList = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userList, setUserList] = useState([]);
  const [contactList, setContactList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentUser) return;
    const handleGetListContact = async () => {
      setLoading(true);
      await getListContact(currentUser.token)
        .then(({ data }) => {
          console.log(data)
          setUserList(data);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    };

    handleGetListContact();
  }, [currentUser]);

  useEffect(() => {
    setContactList([...userList.filter((item) => item.message != null)]);
  }, [userList]);

  return {
    contactList,
    loading,
    userList,
    setContactList,
  };
};

export default useContactList;
