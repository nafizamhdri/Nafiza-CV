<template>
  <header class="bg-white shadow-md sticky top-0 z-50 animate-fade-in">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold text-gray-800">Nafiza Mahadri</div>

      <!-- Hamburger Button (Mobile) -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Menu Desktop -->
      <ul class="hidden md:flex space-x-6 text-sm font-medium">
        <li><a href="#profil" class="nav-link">Profil</a></li>
        <li><a href="#pendidikan" class="nav-link">Pendidikan</a></li>
        <li><a href="#skill" class="nav-link">Skill</a></li>
        <li><a href="#proyek" class="nav-link">Proyek</a></li>
        <li><a href="#kontak" class="nav-link">Kontak</a></li>
      </ul>
    </nav>

    <!-- Menu Mobile -->
    <div v-if="isOpen" class="md:hidden px-6 pb-4 animate-fade-in-down">
      <ul class="space-y-2">
        <li><a href="#profil" class="nav-link block">Profil</a></li>
        <li><a href="#pendidikan" class="nav-link block">Pendidikan</a></li>
        <li><a href="#skill" class="nav-link block">Skill</a></li>
        <li><a href="#proyek" class="nav-link block">Proyek</a></li>
        <li><a href="#kontak" class="nav-link block">Kontak</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-blue-500 hover:-translate-y-0.5 transition-all duration-300;
}

/* Optional: fade-in-down animation */
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.3s ease-out;
}
</style>
