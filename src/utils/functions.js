import firebase from "./firebase";

import { getDatabase, push, set, ref, remove, update } from "firebase/database";
import { useEffect, useState } from "react";
import { onValue } from "firebase/database";
import Toastify from "./toast";

//ADDING USERS TO DATABASE

export const AddUser = (info) => {
  const db = getDatabase();
  const userRef = ref(db, "baglanti");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
};

//ADDING USERS TO TABLE WHO IN DATABASE

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState();

  useEffect(() => {
    setIsLoading(true);
    const db = getDatabase();
    const userRef = ref(db, "baglanti");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const baglantiArray = [];
      for (let id in data) {
        baglantiArray.push({ id, ...data[id] });
      }
      setContactList(baglantiArray)
      setIsLoading(false)
    });
  }, []);
  return {isLoading, contactList}
};

//USER DELETE

export const UserDelete = (id) => {
    const db = getDatabase();
    const userRef = ref(db, "baglanti");
    remove(ref(db, "baglanti/" + id))
    Toastify("User info has deleted!")
}


//EDIT INFO

export const editUser = (info) => {
    const db = getDatabase();
    const updated = {};

    updated["baglanti/"+info.id] = info;
    return update(ref(db), updated)
}