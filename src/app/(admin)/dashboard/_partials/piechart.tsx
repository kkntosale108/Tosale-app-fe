"use client"; // Menandai komponen ini sebagai komponen klien
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Daftarkan elemen Chart.js yang diperlukan
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [data, setData] = useState({ menengah: 0, atas: 0, bawah: 0 });
  
  
  const dummyData = {
    labels: ['Miskin', 'Kaya', 'Menengah'],
    datasets: [{
      label: 'Jumlah KK',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  useEffect(() => {
    // Fungsi untuk mengambil data dari database
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data'); // Ganti dengan endpoint API Anda
        const result = await response.json();
        
        // Mengelompokkan data
        const groupedData = {
          menengah: result.filter((item: { category: string }) => item.category === 'menengah').length,
          atas: result.filter((item: { category: string }) => item.category === 'atas').length,
          bawah: result.filter((item: { category: string }) => item.category === 'bawah').length,
        };

        setData(groupedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: ['Menengah', 'Atas', 'Bawah'],
    datasets: [
      {
        data: [data.menengah, data.atas, data.bawah],
        backgroundColor: ['blue', 'red', 'yellow'],
        hoverOffset: 4,
      },
    ],
  };

  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <div>
        <Pie data={dummyData} style={{width: '125%', height: '125%'}} />
      {/* <Pie data={chartData} width={100} height={100} /> */}
        </div> 
      
    </div>
  );
};

export default PieChart;