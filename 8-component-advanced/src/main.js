import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from '@/6-components/UI/BaseBadge';
import BaseCard from '@/6-components/UI/BaseCard';

const app = createApp(App);


app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard)

app.mount('#app');
