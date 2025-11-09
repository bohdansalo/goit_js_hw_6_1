export function addTeam(name, players) {
  const app = document.querySelector("[data-app]");

  const titleTeam = document.createElement("h2");
  titleTeam.textContent = name;

  const listPlayers = document.createElement("ul");
  players.forEach((player) => {
    const li = document.createElement("li");
    li.textContent = player;
    listPlayers.appendChild(li);
  });

  app.appendChild(titleTeam);
  app.appendChild(listPlayers);
}
