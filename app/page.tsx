"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const roles = [
    { id: "mahasiswa", label: "Mahasiswa", icon: "👤" },
    { id: "dosen", label: "Dosen", icon: "👤" },
    { id: "admin", label: "Admin", icon: "👤" },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #f5c6d6, #c7b9ff)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: '60px',
      fontFamily: 'sans-serif'
    }}>
      {/* role-box */}
      <div style={{
        backgroundColor: '#d6e4ff',
        width: '900px',
        borderRadius: '30px',
        padding: '40px',
        boxShadow: '0px 10px 25px rgba(0,0,0,0.15)',
        textAlign: 'center'
      }}>
        
        {/* role-header */}
        <div style={{ marginBottom: '20px' }}>
          <Image 
            src="/logo.png" 
            alt="CoreTrack Logo" 
            width={40} 
            height={40} 
            style={{ margin: '0 auto' }}
          />
        </div>

        <h1 style={{ fontSize: '26px', fontWeight: '700', marginTop: '10px', color: '#333' }}>
          Thesis Tracking Informatics Engineering
        </h1>
        <p style={{ marginTop: '5px', fontSize: '18px', color: '#555' }}>
          Daftar Role
        </p>

        {/* role-options */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '40px',
          gap: '20px'
        }}>
          {roles.map((role) => (
            <div
              key={role.id}
              onClick={() => router.push(`/login?role=${role.id}`)}
              style={{
                width: '250px',
                background: '#c6d8ff',
                padding: '30px 20px',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: '0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {/* Icon / Avatar placeholder */}
              <div style={{ fontSize: '60px', marginBottom: '10px', color: '#555' }}>
                {role.icon}
              </div>
              
              {/* role-label */}
              <div style={{
                marginTop: '15px',
                fontSize: '18px',
                fontWeight: '600',
                background: 'white',
                padding: '8px 0',
                width: '80%',
                borderRadius: '10px',
                color: '#333'
              }}>
                {role.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}