const profile = {
    username: "Jacob",
    playTime: 300,
    changeUsername(newName) {
        return this.username = newName;
    },
    updatePlayTime(hours) {
        this.playTime += hours;
    },
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    }
};
