<script setup>
import PageLayout from '@/components/PageLayout.vue'
import GlassPanel from '@/components/GlassPanel.vue'
import { BEIDOU, LIUHE } from '@/data/clans.js'
</script>

<template>
  <PageLayout
    bg="url(/images/a1.jpg)"
    title="十三主脉"
    subtitle="Thirteen Sovereign Veins"
  >
    <GlassPanel>
      <p class="clans-intro">
        玄荒道府下设十三主脉，各脉分管不同领域，共同支撑道府运转：
      </p>

      <!-- 北斗七脉 -->
      <section class="clans-section">
        <h2 class="clans-section-title">☰ 北斗七脉</h2>
        <div class="clans-grid">
          <div v-for="c in BEIDOU" :key="c.name" class="clan-card">
            <span class="clan-icon">{{ c.icon }}</span>
            {{ c.name }}
          </div>
        </div>
      </section>

      <!-- 六合脉 -->
      <section class="clans-section">
        <h2 class="clans-section-title">⚡ 六合脉</h2>
        <div class="clans-grid">
          <div v-for="c in LIUHE" :key="c.name" class="clan-card">
            <span class="clan-icon">{{ c.icon }}</span>
            {{ c.name }}
          </div>
        </div>
      </section>

      <div class="fairy-text" style="margin-top: 16px">
        <p>每脉设脉主一人，由道府核心弟子担任，掌脉内修行、事务调度之权。</p>
      </div>
    </GlassPanel>
  </PageLayout>
</template>

<style scoped>
.clans-intro {
  text-align: center;
  font-size: 16px;
  color: var(--text-dim);
  margin-bottom: 28px;
  letter-spacing: 1px;
}

.clans-section {
  margin-bottom: 32px;
}

.clans-section-title {
  font-size: 18px;
  font-weight: normal;
  color: var(--jade);
  letter-spacing: 3px;
  border-bottom: 1px solid rgba(61, 186, 126, 0.3);
  padding-bottom: 8px;
  margin-bottom: 16px;
}

.clans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
}

.clan-card {
  background: rgba(61, 186, 126, 0.07);
  border: 1px solid rgba(61, 186, 126, 0.2);
  border-radius: var(--radius);
  padding: 14px 10px;
  text-align: center;
  font-size: 16px;
  letter-spacing: 1px;
  color: var(--text-main);
  transition: all var(--trans);
  cursor: default;
}

.clan-card:hover {
  background: rgba(61, 186, 126, 0.15);
  border-color: var(--jade);
  color: var(--jade);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(61, 186, 126, 0.25);
}

.clan-icon {
  font-size: 22px;
  display: block;
  margin-bottom: 6px;
}
</style>
