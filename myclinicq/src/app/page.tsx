"use client"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function test() {
      const res = await fetch('http://localhost:3001/items')
      const data = await res.json()
      console.log(data)
    }
    test()
  }, [])

  return (
    <div>
      3
    </div>
  );
}
