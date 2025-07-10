<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const skills = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills');
    skills.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="bg-white p-6 rounded-2xl shadow-lg text-center border hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
        >
          <!-- Nama Skill -->
          <h3 class="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
            {{ skill.name }}
          </h3>

          <!-- Badge Level -->
          <span
            :class="[
              'inline-block text-xs font-medium px-3 py-1 rounded-full',
              skill.level === 'Mahir' ? 'bg-blue-100 text-blue-800' :
              skill.level === 'Menengah' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            ]"
          >
            {{ skill.level }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
