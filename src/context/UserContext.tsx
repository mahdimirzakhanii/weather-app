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

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
