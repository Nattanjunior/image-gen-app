import { createContext, ReactNode, useState } from 'react';

type UserDetailType = any; // Defina o tipo do usuário aqui

type UserDetailContextType = {
  userDetail: UserDetailType | null;
  setUserDetail: (user: UserDetailType) => void;
};

export const UserDetailContext = createContext<UserDetailContextType>({
  userDetail: null,
  setUserDetail: () => {},
});

export const UserDetailProvider = ({ children }: { children: ReactNode }) => {
  const [userDetail, setUserDetail] = useState<UserDetailType | null>(null);
  
  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
};