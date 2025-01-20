<template>
    <ul class="player-list">
        <li v-for="player in players" :key="player.id">
            <img :src="player.image" :alt="player.name" />
            <h3>{{ player.name }}</h3>
            <p>{{ player.position }}</p>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        players: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
ul.player-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    padding: 0;
    list-style: none;
    justify-items: center;
}

li {
    width: 220px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

h3 {
    margin: 0;
    font-size: 16px;
}

p {
    margin: 5px 0 0;
    font-size: 14px;
    color: #666;
}
</style>
