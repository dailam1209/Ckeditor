"use client"
import ListBlog from "./list/page";
import { getValueLocalStorage } from "@/funtions/function";
import LoginPage from "@/components/login";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [ token, setToken] = useState<any>()
  return (
    <>
      {/* <ListBlog/>  */}
    </>
  );
}
