import Image from "next/image";
import { Inter } from "next/font/google";
import LoginPage from "./auth/login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <LoginPage />
    </>
  );
}
