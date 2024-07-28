import React from 'react'
import { statisticElement, computerElement, userElement, teamWorkElemen1, healthElement, teamElemen } from '../../../public'

const Misi = () => {
  return (
    <div>
      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className="text-[#1A4D2E] text-4xl md:text-4xl font-semibold mb-8">Misi</h1>
      </div>
      <div className='w-full flex flex-col items-center'>
        <div className='w-[1000px] h-[360px] flex flex-row justify-between items-center'>
          <div className='h-36'>
             <p className='w-[450px] bg-[#EEEBEB] rounded-xl p-[14px] font-normal'>Mewujudkan tata kelola pemerintahan yang mengacu pada prinsip-prinsip 
                 penyelenggaraan pemerintahan yang bersih dan baik</p>
          </div>
           <img width={470} src={userElement} alt="" />
        </div>
        <div className='w-[1000px] h-[360px] flex flex-row justify-between items-center'>
          <img width={470} src={computerElement} alt="" />
          <div className='h-36'>
             <p className='w-[450px] bg-[#EEEBEB] rounded-xl p-[14px] font-normal'>Mewujudkan tata kelola pemerintahan yang mengacu pada prinsip-prinsip 
             penyelenggaraan pemerintahan yang bersih dan baik</p>
          </div>
        </div>
        <div className='w-[1000px] h-[360px] flex flex-row justify-between items-center'>
          <div className='h-36'>
             <p className='w-[450px] bg-[#EEEBEB] rounded-xl p-[14px] font-normal'>Mewujudkan tata kelola pemerintahan yang mengacu pada prinsip-prinsip 
             penyelenggaraan pemerintahan yang bersih dan baik</p>
          </div>
          <img width={470} src={statisticElement} alt="" />
        </div>
        <div className='w-[1000px] h-[360px] flex flex-row justify-between items-center'>
          <img width={470} src={healthElement} alt="" />
          <div className='h-36'>
             <p className='w-[450px] bg-[#EEEBEB] rounded-xl p-[14px] font-normal'>Peningkatan kualitas hidup sumber daya manusia melalui pendidikan dan kesehatan</p>
          </div>
        </div>
        <div className='w-[1000px] h-[360px] flex flex-row justify-between items-center'>
          <div className='h-36'>
             <p className='w-[450px] bg-[#EEEBEB] rounded-xl p-[14px] font-normal'>Mewujudkan dan Mengembangkan ruang kreativitas masyarakat melalui kepemimpinan yang melibatkan dan menggerakan</p>
          </div>
          <img width={470} src={teamWorkElemen1} alt="" />
        </div>
        <div className='w-[1000px] h-[360px] flex flex-row justify-between items-center mb-20'>
          <img width={470} src={teamElemen} alt="" />
          <div className='h-36'>
             <p className='w-[450px] bg-[#EEEBEB] rounded-xl p-[14px] font-normal'>Meningkatkan kesiapsiagaan dan ketangguhan masyarakat terhadap bencana Desa</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Misi