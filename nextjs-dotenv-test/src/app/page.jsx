"use client";

import { useEffect, useState } from 'react';
// import 'dotenv/config'

export default function Home() {
  const [clientEnvVar, setClientEnvVar] = useState('');
  const [serverEnvVar, setServerEnvVar] = useState('');

  useEffect(() => {
    require('dotenv').config();
    console.log("process.env.CLIENT_ENV_VAR: ", process.env.CLIENT_ENV_VAR);
    console.log("process.env.NEXT_PUBLIC_CLIENT_ENV_VAR: ", process.env.NEXT_PUBLIC_CLIENT_ENV_VAR);
    setClientEnvVar(process.env.CLIENT_ENV_VAR);
    fetchServerEnvVar();
  }, []);

  const fetchServerEnvVar = async () => {
    const res = await fetch('/api');
    const data = await res.json();
    setServerEnvVar(data.serverEnvVar);
  };

  return (
    <div>
      <p>Client Environment Variable: {clientEnvVar}</p>
      <p>Server Environment Variable: {serverEnvVar}</p>
    </div>
  );
}
