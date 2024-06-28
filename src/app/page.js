// pages/index.js
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import FileList from '../components/FileList';

const Home = () => {
  return (
    <div>
      <Head>
        <title>File System</title>
        <meta name="description" content="File System using Next.js and JavaScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main>
          <FileList />
        </main>
      </div>
    </div>
  );
};

export default Home;
