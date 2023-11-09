import { Dispatch, SetStateAction } from "react";

interface User {
  isFarmer: any;
  identity: "farmer" | "customer"; // User identity
  email: string;
  userID: string;
}

interface UserContextType {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}

export type { User, UserContextType };
