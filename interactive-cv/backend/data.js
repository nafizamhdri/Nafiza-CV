// backend/data.js

const educationHistory = [
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom', major: 'S1 - Teknik Informatika' },
    { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 1 Slogohimo', major: 'MIPA' },
    { id: 3, period: '2017-2020', institution: 'SMP Negri 1 Purwantoro' },
    { id: 4, period: '2011-2017', institution: 'SDIT Nur Rohman Slogohimo'}
  ];
  
  const skills = [
    { name: 'After Effect', level: 'Mahir' },
    { name: 'Premiere Pro', level: 'Mahir' },
    { name: 'Photoshop', level: 'Mahir' },
    { name: 'Indesign', level: 'Menengah' },
    { name: 'Ilustrator', level: 'Menengah' },
    { name: 'HTML & CSS', level: 'Mahir' },
    { name: 'JavaScript', level: 'Mahir' },
    { name: 'React', level: 'Menengah' },
  ];
  
  const projects = [
    {
      title: 'Motion Graphic Project',
      image: 'assets/checklistmep_1 - frame at 0m3s.jpg',
      description: '',
      tech: ['After Effect'],
      link: 'https://drive.google.com/file/d/1Zgnati30ePFv3IE74IbcSrYf2SozfPQ2/view?usp=sharing'
    },
    {
      title: 'Poster Design Project',
      image: 'https://via.placeholder.com/500x300?text=Proyek+2',
      description: 'Aplikasi untuk melacak progres tugas harian.',
      tech: ['React', 'Firebase'],
      link: '#'
    }
  ];
  
  module.exports = { educationHistory, skills, projects };
  