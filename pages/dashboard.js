import { signOut, getAuth } from "firebase/auth";
import { db } from "../authentication/firebase-config";
import {
  getDocs,
  addDoc,
  collection,
  deleteDoc,
  updateDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { Router, useRouter } from "next/router";
import { firebaseApp } from "../authentication/firebase-config";
import { useState, useEffect } from "react";
import { addDataDb, deleteDocById, getAllDocs, updateDocById } from "@/HigherOrder_Functions/dbFunctions";




const newData = {
  "Loan Limit": "500000",
  Location: "Jos",
  Name: "Michael Abayomi",
  Status: "Loan Approved",
};

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const auth = getAuth();
  const router = useRouter();


  const getDb = async() => {
    const data = await getAllDocs(db, 'Customers');
    setCustomers(data);
  }
  const addDb = async () => {
      await addDataDb(db, 'Test collection', newData);
  };
  const handleDeleteDoc = async () => {
    await deleteDocById(db, 'Test collection', 'PUToUDQb4hhYlSt96enc');
  };
  const handleUpdate = async () => {
    await updateDocById(db, 'Customers', 'CLO1', {
      Name: 'James Morrison',
    });
  };
  
  useEffect(() => {
    getDb();
  }, []);
  
  return (
    <div className="text-center mt-9 relative">
      <button
        className="bg-red-500 p-2 absolute right-20 top-0 rounded-lg"
        onClick={async () => {
          await signOut(auth);
          router.push("/");
        }}
      >
        Logout
      </button>
      <button
        className="bg-green-500 p-2 absolute right-36 top-12 rounded-lg"
        onClick={getDb}
      >
        Get Data
      </button>
      <button
        className="bg-green-500 p-2 absolute right-36 top-24 rounded-lg"
        onClick={addDb}
      >
        Post Data
      </button>
      <button
        className="bg-red-700 p-2 absolute right-36 top-36 rounded-lg"
        onClick={handleDeleteDoc}
      >
        Delete Data
      </button>
      <button
        className="bg-yellow-600 p-2 absolute right-36 top-48 rounded-lg"
        onClick={handleUpdate}
      >
        Update Data
      </button>

      <h3 className="font-bold text-3xl p-1">Customer List</h3>
      <ul>
        {customers?.map((customer) => (
          <ul key={customer.type} className="mb-12">
            <li className="text-lg">
              <span className="font-semibold">Customer Type:</span>{" "}
              {customer.type}
            </li>
            <li className="text-lg">
              <span className="font-semibold">Name:</span> {customer.Name}
            </li>
            <li className="text-lg">
              <span className="font-semibold">Status:</span> {customer.Status}
            </li>
            <li className="text-lg">
              <span className="font-semibold">Loan Limit:</span>{" "}
              {customer["Loan Limit"]}
            </li>
            <li>
              <span className="font-semibold">Loaction:</span>{" "}
              {customer.Location}
            </li>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;