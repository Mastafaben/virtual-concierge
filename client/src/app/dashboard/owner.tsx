import React, { useEffect, useState } from "react";
import axios from "axios";

export default function OwnerDashboard() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const ownerId = "YOUR_OWNER_ID"; // replace dynamically after auth
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/property/${ownerId}`)
      .then(res => setProperties(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Owner Dashboard</h1>
      <ul>
        {properties.map((p: any) => (
          <li key={p.id} className="mb-4 p-4 border rounded shadow">{p.address}</li>
        ))}
      </ul>
    </div>
  );
}