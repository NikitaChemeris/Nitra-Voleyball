<script>
export default {
    props: {
        matches: {
            type: Array,
            required: true,
        },
    },
    methods: {
        editResult(match) {
            match.isEditing = !match.isEditing;
            if (!match.isEditing) {
                this.$emit("update-matches", this.matches);
            }
        },
        saveResult(match) {
            match.isEditing = false;
            this.$emit("update-matches", this.matches);
        },
    },
};
</script>

<template>
    <table class="match-table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Opponent</th>
                <th>Location</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="match in matches" :key="match.id">
                <td> {{ match.date }} </td>
                <td> {{ match.opponent }} </td>
                <td> {{ match.location }} </td>
                <td>
                    <span v-if="!match.isEditing"> {{ match.result || "TBD" }}</span>
                    <input v-else v-model="match.result" @keyup.enter="saveResult(match)" placeholder="Enter result" />
                </td>
                <td>
                    <button @click="editResult(match)">
                        {{ match.isEditing ? "Save" : "Edit" }}
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
.match-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
}

.match-table th,
.match-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
}

.match-table th {
    background-color: #f4f4f4;
    font-weight: bold;
}

.match-table input {
    width: 80px;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>