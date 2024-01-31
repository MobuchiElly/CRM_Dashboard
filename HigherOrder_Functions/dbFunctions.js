import { db } from "@/authentication/firebase-config";
import {
  getDocs,
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { firebaseApp } from "@/authentication/firebase-config";

const getAllDocs = async (db, collectionName) => {
  let myArr = [];
  await getDocs(collection(db, collectionName)).then((snapshot) => {
    const docs = snapshot.docs;
    const data = docs.map((doc) => ({
      type: doc.id,
      ...doc.data(),
    }));
    myArr = data;
  });
  return myArr;
};
const addDataDb = async (db, collectionName, dataToAdd) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), dataToAdd);
    console.log("successfully added data");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
const deleteDocById = async (db, collectionName, docId) => {
  const delRef = doc(db, collectionName, docId);
  try {
    await deleteDoc(delRef);
  } catch (error) {
    console.error(error);
  }
};

const updateDocById = async(db, collectionName, docId, dataToAdd) => {
  try {
    const updateRef = doc(db, collectionName, docId);
    await updateDoc(updateRef, dataToAdd);
  } catch (error) {
    console.error(error);
  }
};

// const getId = async() => {

// } 

export { getAllDocs, addDataDb, deleteDocById, updateDocById };