import React, { createContext, useContext, useState } from "react";

interface UserContext {
  name: string | null;
  setName: (name: string | null) => void;
}

const UserContext = createContext<UserContext>({
  name: null,
  setName: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState<string | null>(localStorage.getItem("user"));

  const handleSetName = (value: string | null) => {
    setName(value);
    if (value) {
      localStorage.setItem("user", value);
    }
  };
  return (
    <UserContext.Provider value={{ name, setName: handleSetName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
