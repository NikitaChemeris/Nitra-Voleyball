<template>
    <div class="team-page">
        <h1>Meet the Team</h1>
        <PlayerCards :players="players" />
    </div>
</template>

<script>
import PlayerCards from "../components/PlayerCards.vue";
import playersData from "@/assets/nitra_volleyball_players.json";

export default {
    components: { PlayerCards },
    data() {
        return {
            players: playersData,
        };
    },
};
</script>

<style scoped>
.team-page {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
}

h1 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}
</style>
