"use client"; // Menandai komponen ini sebagai komponen klien
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios'; // Tambahkan import axios

// Daftarkan elemen Chart.js yang diperlukan
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [chartData, setChartData] = useState<{ labels: string[]; datasets: { label: string; data: number[]; backgroundColor: string[]; borderColor: string[]; borderWidth: number; }[] }>({ 
    labels: ['Label 1', 'Label 2', 'Label 3'], // Dummy data untuk label
    datasets: [
      {
        label: 'Dataset',
        data: [30, 50, 100], // Dummy data untuk nilai
        backgroundColor: [
          'rgba(128, 128, 255, 0.8)',
          'rgba(255, 128, 128, 0.8)',
          'rgba(128, 255, 255, 0.8)',
        ],
        borderColor: [
          'rgba(128, 128, 255, 1)',
          'rgba(255, 128, 128, 1)',
          'rgba(128, 255, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }); // Tambahkan dummy data

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/data'); // Ganti dengan endpoint API yang sesuai
      const data = response.data;

      setChartData({
        labels: data.labels, // Asumsikan data.labels ada di response
        datasets: [
          {
            label: 'Dataset',
            data: data.values, // Asumsikan data.values ada di response
            backgroundColor: [
              'rgba(128, 128, 255, 0.8)',
              'rgba(255, 128, 128, 0.8)',
              'rgba(128, 255, 255, 0.8)',
            ],
            borderColor: [
              'rgba(128, 128, 255, 1)',
              'rgba(255, 128, 128, 1)',
              'rgba(128, 255, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      });
    };

    fetchData();
  }, []);

  const options = {
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        position: 'nearest' as const,
        callbacks: {
          label: function (context: any) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += context.parsed;
              label += ' (' + context.raw + ')';
            }
            return label;
          },
        },
      },
    },
    responsive: true, // Tambahkan responsif
    maintainAspectRatio: false, // Tambahkan untuk mengatur rasio aspek
  };

  return <div style={{ display: 'flex', justifyContent: 'center',  width: '100%', height: '400px' }}><Pie data={chartData} options={options} /></div>; // Menggunakan style untuk memusatkan
};

export default PieChart;