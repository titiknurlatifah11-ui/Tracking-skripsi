// Isi app/page.tsx agar otomatis pindah ke /role
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/role");
  }, [router]);

  return null; // Tidak menampilkan apa-apa, langsung pindah halaman
}