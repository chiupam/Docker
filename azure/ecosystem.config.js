module.exports = {
    apps: [
        {
            name: "azure",
            cwd: "./",
            script: "python3",
            args: "main.py",
            watch: "./main.py",
            watch_delay: 3000
        }
    ]
}