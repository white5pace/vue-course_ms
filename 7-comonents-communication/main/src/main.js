import {createApp} from 'vue';
import App from './App'
import FriendContact from "@/6-components/FriendContact";
import NewFriend from "@/6-components/NewFriend";

const app = createApp(App)

app.component('friend-contact', FriendContact)
app.component('new-friend', NewFriend)

app.mount('#app');
