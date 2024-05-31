import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { loginatom } from '../Store/Atoms/LoginAtoms';

export function Login() {
  const [username,setusername] = useState("")
  const [Password,setPassword] = useState("")
  const setusercredentials = useSetRecoilState(loginatom)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <div
        style={{
          padding: '40px 60px',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
          backgroundColor: '#587a77',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2 style={{ marginBottom: '20px', color: '#232626', fontWeight: '600' }}>
          Login
        </h2>
        <input
          type="text"
          placeholder="Username"
          style={{
            margin: '10px 0',
            padding: '12px 16px',
            borderRadius: '20px',
            border: 'none',
            width: '260px',
            fontSize: '16px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
            transition: 'box-shadow 0.3s ease',
          }}
          onFocus={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)';
           }} onChange={(e)=>{setusername(e.target.value) }}
        />
        <input
          type="text"
          placeholder="Password"
          style={{
            margin: '10px 0',
            padding: '12px 16px',
            borderRadius: '20px',
            border: 'none',
            width: '260px',
            fontSize: '16px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
            transition: 'box-shadow 0.3s ease',
          }}
          onFocus={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)';
          }} onChange={(e)=>{ setPassword(e.target.value)}}
        />
        <button
          style={{
            margin: '20px 0 10px',
            padding: '12px 24px',
            borderRadius: '20px',
            border: 'none',
            backgroundColor: '#4b72b9',
            color: '#fff',
            fontSize: '16px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(1px)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)';
          }} onClick={()=>{
            window.location.href="/home"
            setusercredentials({username:username,Password:Password})
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
