<script>
import MatchTable from '../components/MatchTable.vue'

export default {
    components: { MatchTable },
    data() {
        return {
            matches: [
                { id: 1, date: "18.01.2025", opponent: "Team Alpha", location: "Nitra Stadium", result: "3:1", isEditing: false },
                { id: 2, date: "22.01.2025", opponent: "Team Beta", location: "Away", result: "", isEditing: false },
                { id: 3, date: "30.01.2025", opponent: "Team Gamma", location: "Nitra Stadium", result: "1:3", isEditing: false },
            ],
            newMatch: {
                date: "",
                opponent: "",
                location: "",
                result: "",
            },
        };
    },
    methods: {
        addMatch() {
            const newMatch = { ...this.newMatch, id: Date.now(), result: "", isEditing: false };
            this.matches.push(newMatch);
            this.newMatch = { date: "", opponent: "", location: "", result: "" };
        },
        updateMatches(updatedMatches) {
            this.matches = updatedMatches;
        },
    },
};
</script>

<template>
    <div class="content">
        <h1>Welcome to Nitra Volleyball</h1>
        <h2>Nitra matches here</h2>

        <form @submit.prevent="addMatch" class="add-match-form">
            <input v-model="newMatch.date" placeholder="Enter date" required />
            <input v-model="newMatch.opponent" placeholder="Enter opponent" required />
            <input v-model="newMatch.location" placeholder="Enter location" required />
            <button type="submit">Add Match</button>
        </form>

        <MatchTable :matches="matches" @update-matches="updateMatches" />
    </div>
</template>

<style scoped>
.add-match-form {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
}

.add-match-form input {
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.add-match-form button {
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.add-match-form button:hover {
    background-color: #0056b3;
}
</style>