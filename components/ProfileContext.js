// ProfileContext.js
import React, { createContext, useState } from "react";

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    imageUri: null,
    name: "John Doe",
    email: "johndoe@example.com",
    exercises: [
      { name: "Virabhadrasana", date: "2025-02-20" },
      { name: "Vrikshasana", date: "2025-02-22" },
      { name: "Trikonasana", date: "2025-02-24" },
    ],
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};