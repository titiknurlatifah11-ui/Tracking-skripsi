"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const roles = [
    { id: "mahasiswa", label: "Mahasiswa", icon: "👨‍🎓" },
    { id: "dosen", label: "Dosen", icon: "👨‍🏫" },
    { id: "admin", label: "Admin", icon: "⚙️" },
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f7f6',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Image src="/logo.png" alt="Logo" width={100} height={100} priority />
      <h1 style={{ color: '#333', marginBottom: '10px' }}>Selamat Datang di CoreTrack</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>Silakan pilih role Anda untuk masuk</p>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {roles.map((role) => (
          <div
            key={role.id}
            onClick={() => router.push(`/login?role=${role.id}`)}
            style={{
              width: '180px',
              padding: '30px 20px',
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>{role.icon}</div>
            <h3 style={{ margin: 0, color: '#007bff' }}>{role.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}