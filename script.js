document.addEventListener("DOMContentLoaded", () => {

  const button = document.getElementById("revealButton");
  const message = document.getElementById("leagueMessage");

  if (!button || !message) {
    return;
  }

  button.addEventListener("click", () => {

    const isHidden = message.hidden;

    message.hidden = !isHidden;

    button.setAttribute(
      "aria-expanded",
      String(isHidden)
    );

    button.textContent = isHidden
      ? "HIDE THE REAPER"
      : "REVEAL THE REAPER";
  });

});
