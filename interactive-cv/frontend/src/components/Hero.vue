<template>
  <section id="profil" class="container mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
    <!-- Teks -->
    <div class="md:w-1/2 text-center md:text-left animate-fade-in-left">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Halo, Saya <span class="text-blue-600">Nafiza</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
        Halo nama saya adalah Nafiza Mahadri Widyatamaka. Saya adalah seorang Mahasiswa S1 Informatika di Universitas Amikom Yogyakarta. Saya juga adalah seorang freelance editor motion graphic. Saya memiliki beberapa hobi utama, seperti bermain musik, bermain game, fitnes dan mengedit.
      </p>
      <a
        href="#kontak"
        class="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 hover:scale-105 transform transition duration-300 inline-block shadow-md"
      >
        Hubungi Saya
      </a>
    </div>

    <!-- Gambar -->
    <div class="md:w-1/2 flex justify-center animate-fade-in-right">
      <img
        src="https://fotomhs.amikom.ac.id/2023/23_11_5741.jpg"
        alt="Foto Profil"
        class="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-white"
      />
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out forwards;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out forwards;
}
</style>
