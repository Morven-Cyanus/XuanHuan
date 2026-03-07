<script setup>
import PageLayout from '@/components/PageLayout.vue'
import GlassPanel from '@/components/GlassPanel.vue'
import { POEM_LINES } from '@/data/poem.js'
</script>

<template>
  <PageLayout
    bg="url(/images/e1.png)"
    title="神域天府吟"
    subtitle="Ode to the Divine Celestial Palace"
  >
    <GlassPanel>
      <p class="poem-author">归元道人 · 阳辰 著</p>
      <div class="poem-body">
        <p
          v-for="(line, i) in POEM_LINES"
          :key="i"
          class="poem-line"
        >{{ line }}</p>
      </div>
    </GlassPanel>
  </PageLayout>
</template>

<style scoped>
.poem-author {
  text-align: center;
  color: var(--gold-dim);
  font-size: 14px;
  letter-spacing: 4px;
  margin-bottom: 28px;
}

.poem-body {
  columns: 2;
  column-gap: 32px;
}

@media (max-width: 700px) {
  .poem-body {
    columns: 1;
  }
}

.poem-line {
  font-size: 17px;
  line-height: 2.4;
  color: var(--text-main);
  text-align: center;
  break-inside: avoid;
  transition: color var(--trans), text-shadow var(--trans);
}

.poem-line:hover {
  color: var(--gold-light);
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}
</style>
