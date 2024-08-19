export function loadAllUsers() {
    return fetch("https://www.github.com/asd")
        .then(response => response.text());
}