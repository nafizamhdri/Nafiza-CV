<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="proyek" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <div class="grid md:grid-cols-2 gap-10 mt-10">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-gray-50 rounded-2xl shadow-md overflow-hidden transform hover:scale-[1.02] transition-all duration-300 group"
        >
          <!-- Gambar Proyek -->
          <div class="overflow-hidden">
            <img
              :src="project.image"
              alt="Gambar Proyek"
              class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <!-- Detail Proyek -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
              {{ project.title }}
            </h3>

            <p class="text-gray-600 mb-4 text-sm leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Teknologi -->
            <div class="flex flex-wrap mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-full"
              >
                {{ t }}
              </span>
            </div>

            <!-- Link -->
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-blue-600 font-medium hover:underline text-sm"
            >
              Lihat Detail
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
