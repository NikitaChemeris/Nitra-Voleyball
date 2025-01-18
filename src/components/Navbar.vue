<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/team">Team</router-link></li>
            <li><router-link to="/schedule">Schedule</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </nav>
</template>

<style>
nav {
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px 0;
    width: 100%;
}

ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 0;
    padding: 0;
}

li a {
    color: black;
    font-size: 25px;
}
</style>