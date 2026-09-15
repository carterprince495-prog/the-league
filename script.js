
document.addEventListener("DOMContentLoaded", () => {

    /*
     * ==========================================
     * REAPER LOUNGE - YEAR 1
     * JavaScript interactions
     * ==========================================
     */


    /* ------------------------------------------
       REVEAL THE REAPER
    ------------------------------------------ */

    const revealButton =
        document.getElementById("revealButton");

    const leagueMessage =
        document.getElementById("leagueMessage");

    if (revealButton && leagueMessage) {

        revealButton.addEventListener("click", () => {

            const isHidden =
                leagueMessage.hidden;

            leagueMessage.hidden = !isHidden;

            revealButton.setAttribute(
                "aria-expanded",
                String(isHidden)
            );

            revealButton.textContent =
                isHidden
                    ? "HIDE THE REAPER"
                    : "REVEAL THE REAPER";
        });
    }


    /* ------------------------------------------
       COPY LOUNGE CODE
    ------------------------------------------ */

    const copyButton =
        document.getElementById("copyCodeButton");

    const copyMessage =
        document.getElementById("copyMessage");

    if (copyButton && copyMessage) {

        copyButton.addEventListener("click", async () => {

            const code = "REAPER-Y1";

            try {

                await navigator.clipboard.writeText(code);

                copyMessage.textContent =
                    "Lounge code copied!";

            } catch (error) {

                copyMessage.textContent =
                    "Code: REAPER-Y1";

            }

        });
    }


    /* ------------------------------------------
       STANDINGS FILTER
    ------------------------------------------ */

    const filterButtons =
        document.querySelectorAll(
            ".filter-button"
        );

    const standingsRows =
        document.querySelectorAll(
            "#standingsTable tbody tr"
        );

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const conference =
                button.dataset.conference;

            filterButtons.forEach(item => {
                item.classList.remove("active");
            });

            button.classList.add("active");

            standingsRows.forEach(row => {

                if (
                    conference === "all" ||
                    row.dataset.conference === conference
                ) {

                    row.style.display = "";

                } else {

                    row.style.display = "none";

                }

            });

        });

    });


    /* ------------------------------------------
       MADDEN SCHEDULE
    ------------------------------------------ */

    const teams = [
        "Arizona Cardinals",
        "Atlanta Falcons",
        "Baltimore Ravens",
        "Buffalo Bills",
        "Carolina Panthers",
        "Chicago Bears",
        "Cincinnati Bengals",
        "Cleveland Browns",
        "Dallas Cowboys",
        "Denver Broncos",
        "Detroit Lions",
        "Green Bay Packers",
        "Houston Texans",
        "Indianapolis Colts",
        "Jacksonville Jaguars",
        "Kansas City Chiefs",
        "Las Vegas Raiders",
        "Los Angeles Chargers",
        "Los Angeles Rams",
        "Miami Dolphins",
        "Minnesota Vikings",
        "New England Patriots",
        "New Orleans Saints",
        "New York Giants",
        "New York Jets",
        "Philadelphia Eagles",
        "Pittsburgh Steelers",
        "San Francisco 49ers",
        "Seattle Seahawks",
        "Tampa Bay Buccaneers",
        "Tennessee Titans",
        "Washington Commanders"
    ];


    /*
     * Rotating the teams creates a fictional
     * Madden league schedule.
     *
     * This is NOT the official NFL schedule.
     */

    function createWeek(week) {

        const rotated = [...teams];

        const rotation =
            (week - 1) % rotated.length;

        const first =
            rotated.slice(rotation);

        const second =
            rotated.slice(0, rotation);

        const ordered =
            first.concat(second);

        const games = [];

        for (
            let i = 0;
            i < 16;
            i++
        ) {

            let home =
                ordered[i];

            let away =
                ordered[31 - i];

            /*
             * Alternate home/away order
             * so the fictional schedule
             * does not always favor one side.
             */

            if ((week + i) % 2 === 0) {

                const temp = home;

                home = away;
                away = temp;
            }

            games.push({
                home,
                away
            });
        }

        return games;
    }


    const weekSelect =
        document.getElementById("weekSelect");

    const scheduleContainer =
        document.getElementById(
            "scheduleContainer"
        );


    function renderSchedule(week) {

        if (!scheduleContainer) {
            return;
        }

        const games =
            createWeek(Number(week));

        scheduleContainer.innerHTML = "";

        games.forEach((game, index) => {

            const card =
                document.createElement("article");

            card.className =
                "game-card";

            /*
             * Highlight the first matchup
             * as the fictional Game of the Week.
             */

            if (index === 0) {
                card.classList.add(
                    "featured-game"
                );
            }

            card.innerHTML = `
                <div class="game-week">
                    WEEK ${week}
                    ${index === 0
                        ? " • GAME OF THE WEEK"
                        : ""}
                </div>

                <div class="game-matchup">
                    <span>${game.away}</span>

                    <span class="game-vs">
                        @
                    </span>

                    <span>${game.home}</span>
                </div>
            `;

            scheduleContainer.appendChild(card);

        });

    }


    if (weekSelect && scheduleContainer) {

        renderSchedule(
            weekSelect.value
        );

        weekSelect.addEventListener(
            "change",
            () => {

                renderSchedule(
                    weekSelect.value
                );

            }
        );

    }

});
