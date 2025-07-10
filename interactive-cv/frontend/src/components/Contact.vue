<script setup>
import SectionTitle from './SectionTitle.vue';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer id="kontak" class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-6 text-center">
      <!-- Judul -->
      <SectionTitle title="Hubungi Saya" />

      <!-- Deskripsi -->
      <p class="text-lg text-gray-400 mb-8">
        Jangan ragu untuk terhubung atau bertanya.
      </p>

      <!-- Tombol Email -->
      <a
        href="mailto:emailanda@example.com"
        class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center gap-2 mb-10"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13l8-6.99V6H4zm0 12h16V8l-8 6-8-6v10z"
          />
        </svg>
        Kirim Email
      </a>

      <!-- Link Sosial -->
      <div class="flex justify-center space-x-6 mb-8">
        <a
          href="https://github.com/username"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582 0-.288-.01-1.048-.015-2.056-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.808 1.304 3.495.997.108-.775.42-1.304.762-1.604-2.665-.3-5.467-1.333-5.467-5.932 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.005-.404c1.02.005 2.047.137 3.005.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.63-5.48 5.922.43.37.814 1.096.814 2.21 0 1.595-.014 2.88-.014 3.27 0 .322.217.699.825.58C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z"
            />
          </svg>
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9h4v12H3zM9 9h3.6v1.8h.1c.5-.9 1.7-1.8 3.4-1.8 3.7 0 4.5 2.4 4.5 5.5V21h-4v-5.5c0-1.3-.02-3-2-3s-2.3 1.4-2.3 2.9V21h-4V9z"
            />
          </svg>
          LinkedIn
        </a>
      </div>

      <!-- Footer Copyright -->
      <p class="text-gray-500 text-sm">
        &copy; {{ currentYear }} Nafiza Mahadri. Dibuat dengan ❤️
      </p>
    </div>
  </footer>
</template>
