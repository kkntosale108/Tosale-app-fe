"use client"
import React, { useEffect, useState } from 'react';
import newsData from '../../../(user)/blog/_db/newsData';

const TotalBeritaPage = () => {
    const [jumlahBerita, setJumlahBerita] = useState(0);

    useEffect(() => {
        // Ambil data jumlah berita dari file
        const fetchJumlahBerita = () => {
            setJumlahBerita(newsData.length); // Menghitung jumlah berita
        };

        fetchJumlahBerita();
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#EEEEEE', marginTop: '10px', marginBottom: "10px", borderRadius: "10px" }}>
            <h1 style={{ fontSize: '20px' }}>Total Berita</h1>
            <h2 style={{ fontSize: '20px' }}>{jumlahBerita}</h2>
        </div>
    );
};

export default TotalBeritaPage;