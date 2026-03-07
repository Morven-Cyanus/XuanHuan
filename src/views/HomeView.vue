<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const PETAL_CHARS = ['✿', '❀', '✾', '❁', '꽃', '✽', '❃', '❋']
const PETAL_COLORS = ['#d4af37', '#e8b4b8', '#a0c4ff']

const petals = ref(
  Array.from({ length: 18 }, (_, i) => ({
    id: i,
    char: PETAL_CHARS[i % PETAL_CHARS.length],
    color: PETAL_COLORS[i % 3],
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 8 + 8,
    size: Math.random() * 14 + 12,
  }))
)

function enterTianfu() {
  router.push('/origin')
}
</script>

<template>
  <div class="home-wrap">
    <div class="home-bg-overlay" />

    <!-- Floating petals -->
    <div class="floating-petals" aria-hidden="true">
      <span
        v-for="p in petals"
        :key="p.id"
        class="petal"
        :style="{
          left: p.left + '%',
          color: p.color,
          fontSize: p.size + 'px',
          animationDelay: p.delay + 's',
          animationDuration: p.duration + 's',
        }"
      >{{ p.char }}</span>
    </div>

    <!-- Hero content -->
    <div class="home-inner">
      <div class="home-seal-outer" aria-hidden="true">
        <div class="home-seal-inner">☯</div>
      </div>
      <h1 class="home-title">玄荒道府</h1>
      <p class="home-verse">繁星峥嵘而渐灭，浮华避世而逍遥</p>
      <button class="enter-btn" @click="enterTianfu">进入天府</button>
    </div>
  </div>
</template>

<style scoped>
.home-wrap {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.home-bg-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 50% 30%, rgba(212, 175, 55, 0.07) 0%, transparent 60%),
    linear-gradient(180deg, rgba(5, 5, 15, 0.2) 0%, rgba(5, 5, 15, 0.85) 100%);
}

/* ── Floating petals ── */
.floating-petals {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.petal {
  position: absolute;
  opacity: 0;
  animation: fall linear infinite;
}

@keyframes fall {
  0%   { transform: translateY(-20px) rotate(0deg);   opacity: 0; }
  10%  { opacity: 0.7; }
  90%  { opacity: 0.5; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}

/* ── Hero ── */
.home-inner {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
}

.home-seal-outer {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 2px solid var(--gold);
  margin: 0 auto 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: spin-ring 20s linear infinite;
  box-shadow: 0 0 40px rgba(212, 175, 55, 0.35);
}

.home-seal-outer::before {
  content: '';
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  border: 1px dashed rgba(212, 175, 55, 0.4);
}

@keyframes spin-ring {
  to { transform: rotate(360deg); }
}

.home-seal-inner {
  font-size: 56px;
  animation: spin-ring 20s linear infinite reverse;
}

.home-title {
  font-size: 52px;
  color: var(--gold-light);
  text-shadow: 0 0 30px rgba(212, 175, 55, 0.8), 0 4px 8px rgba(0, 0, 0, 0.9);
  letter-spacing: 8px;
  margin-bottom: 12px;
}

.home-verse {
  font-size: 20px;
  color: var(--silver);
  letter-spacing: 3px;
  margin-bottom: 40px;
  text-shadow: 0 0 10px rgba(130, 150, 200, 0.5);
  font-style: italic;
}

.enter-btn {
  display: inline-block;
  padding: 14px 48px;
  background: linear-gradient(135deg, var(--gold-dim) 0%, var(--gold) 50%, var(--gold-dim) 100%);
  color: var(--ink);
  font-size: 18px;
  font-family: inherit;
  font-weight: bold;
  letter-spacing: 4px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform var(--trans), box-shadow var(--trans);
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.4);
}

.enter-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -60%;
  width: 40%;
  height: 200%;
  background: rgba(255, 255, 255, 0.25);
  transform: skewX(-20deg);
  animation: btn-shine 2.5s ease-in-out infinite;
}

@keyframes btn-shine {
  0%   { left: -60%; }
  100% { left: 160%; }
}

.enter-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(212, 175, 55, 0.65);
}

@media (max-width: 640px) {
  .home-title { font-size: 34px; }
}
</style>
