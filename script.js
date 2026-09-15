document.addEventListener("DOMContentLoaded", () => {

    /*
     * ==========================================
     * THE REAPER LOUNGE - YEAR 1
     * OFFICIAL 2026 NFL SCHEDULE
     * 2026-2027 NFL SEASON
     *
     * 32 TEAMS
     * 18 WEEKS
     * 272 REGULAR-SEASON GAMES
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

            const isHidden = leagueMessage.hidden;

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
        document.querySelectorAll(".filter-button");

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
       NFL TEAMS
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


    /* ------------------------------------------
       OFFICIAL 2026 NFL SCHEDULE
       272 GAMES
       WEEK 1 - WEEK 18
       
       away = visiting team
       home = home team
    ------------------------------------------ */

    const schedules = {

        /* ======================================
           WEEK 1
           ====================================== */

        1: [

            {
                away: "New England Patriots",
                home: "Seattle Seahawks"
            },

            {
                away: "San Francisco 49ers",
                home: "Los Angeles Rams"
            },

            {
                away: "Atlanta Falcons",
                home: "Pittsburgh Steelers"
            },

            {
                away: "Baltimore Ravens",
                home: "Indianapolis Colts"
            },

            {
                away: "Buffalo Bills",
                home: "Houston Texans"
            },

            {
                away: "Chicago Bears",
                home: "Carolina Panthers"
            },

            {
                away: "Cleveland Browns",
                home: "Jacksonville Jaguars"
            },

            {
                away: "New Orleans Saints",
                home: "Detroit Lions"
            },

            {
                away: "New York Jets",
                home: "Tennessee Titans"
            },

            {
                away: "Tampa Bay Buccaneers",
                home: "Cincinnati Bengals"
            },

            {
                away: "Arizona Cardinals",
                home: "Los Angeles Chargers"
            },

            {
                away: "Green Bay Packers",
                home: "Minnesota Vikings"
            },

            {
                away: "Miami Dolphins",
                home: "Las Vegas Raiders"
            },

            {
                away: "Washington Commanders",
                home: "Philadelphia Eagles"
            },

            {
                away: "Dallas Cowboys",
                home: "New York Giants"
            },

            {
                away: "Denver Broncos",
                home: "Kansas City Chiefs"
            }

        ],


        /* ======================================
           WEEK 2
           ====================================== */

        2: [

            {
                away: "Detroit Lions",
                home: "Buffalo Bills"
            },

            {
                away: "Carolina Panthers",
                home: "Atlanta Falcons"
            },

            {
                away: "Cincinnati Bengals",
                home: "Houston Texans"
            },

            {
                away: "Cleveland Browns",
                home: "Tampa Bay Buccaneers"
            },

            {
                away: "Green Bay Packers",
                home: "New York Jets"
            },

            {
                away: "Minnesota Vikings",
                home: "Chicago Bears"
            },

            {
                away: "New Orleans Saints",
                home: "Baltimore Ravens"
            },

            {
                away: "Philadelphia Eagles",
                home: "Tennessee Titans"
            },

            {
                away: "Pittsburgh Steelers",
                home: "New England Patriots"
            },

            {
                away: "Jacksonville Jaguars",
                home: "Denver Broncos"
            },

            {
                away: "Las Vegas Raiders",
                home: "Los Angeles Chargers"
            },

            {
                away: "Miami Dolphins",
                home: "San Francisco 49ers"
            },

            {
                away: "Seattle Seahawks",
                home: "Arizona Cardinals"
            },

            {
                away: "Washington Commanders",
                home: "Dallas Cowboys"
            },

            {
                away: "Indianapolis Colts",
                home: "Kansas City Chiefs"
            },

            {
                away: "New York Giants",
                home: "Los Angeles Rams"
            }

        ],


        /* ======================================
           WEEK 3
           ====================================== */

        3: [

            {
                away: "Atlanta Falcons",
                home: "Green Bay Packers"
            },

            {
                away: "Carolina Panthers",
                home: "Cleveland Browns"
            },

            {
                away: "Cincinnati Bengals",
                home: "Pittsburgh Steelers"
            },

            {
                away: "Houston Texans",
                home: "Indianapolis Colts"
            },

            {
                away: "Kansas City Chiefs",
                home: "Miami Dolphins"
            },

            {
                away: "Los Angeles Chargers",
                home: "Buffalo Bills"
            },

            {
                away: "New England Patriots",
                home: "Jacksonville Jaguars"
            },

            {
                away: "New York Jets",
                home: "Detroit Lions"
            },

            {
                away: "Seattle Seahawks",
                home: "Washington Commanders"
            },

            {
                away: "Tennessee Titans",
                home: "New York Giants"
            },

            {
                away: "Arizona Cardinals",
                home: "San Francisco 49ers"
            },

            {
                away: "Minnesota Vikings",
                home: "Tampa Bay Buccaneers"
            },

            {
                away: "Baltimore Ravens",
                home: "Dallas Cowboys"
            },

            {
                away: "Las Vegas Raiders",
                home: "New Orleans Saints"
            },

            {
                away: "Los Angeles Rams",
                home: "Denver Broncos"
            },

            {
                away: "Philadelphia Eagles",
                home: "Chicago Bears"
            }

        ],


        /* ======================================
           WEEK 4
           ====================================== */

        4: [

            {
                away: "Pittsburgh Steelers",
                home: "Cleveland Browns"
            },

            {
                away: "Indianapolis Colts",
                home: "Washington Commanders"
            },

            {
                away: "Arizona Cardinals",
                home: "New York Giants"
            },

            {
                away: "Dallas Cowboys",
                home: "Houston Texans"
            },

            {
                away: "Green Bay Packers",
                home: "Tampa Bay Buccaneers"
            },

            {
                away: "Jacksonville Jaguars",
                home: "Cincinnati Bengals"
            },

            {
                away: "Los Angeles Rams",
                home: "Philadelphia Eagles"
            },

            {
                away: "New England Patriots",
                home: "Buffalo Bills"
            },

            {
                away: "New York Jets",
                home: "Chicago Bears"
            },

            {
                away: "Tennessee Titans",
                home: "Baltimore Ravens"
            },

            {
                away: "Miami Dolphins",
                home: "Minnesota Vikings"
            },

            {
                away: "Denver Broncos",
                home: "San Francisco 49ers"
            },

            {
                away: "Kansas City Chiefs",
                home: "Las Vegas Raiders"
            },

            {
                away: "Los Angeles Chargers",
                home: "Seattle Seahawks"
            },

            {
                away: "Detroit Lions",
                home: "Carolina Panthers"
            },

            {
                away: "Atlanta Falcons",
                home: "New Orleans Saints"
            }

        ],


        /* ======================================
           WEEK 5
           ====================================== */

        5: [

            {
                away: "Tampa Bay Buccaneers",
                home: "Dallas Cowboys"
            },

            {
                away: "Philadelphia Eagles",
                home: "Jacksonville Jaguars"
            },

            {
                away: "Cincinnati Bengals",
                home: "Miami Dolphins"
            },

            {
                away: "Cleveland Browns",
                home: "New York Jets"
            },

            {
                away: "Houston Texans",
                home: "Tennessee Titans"
            },

            {
                away: "Indianapolis Colts",
                home: "Pittsburgh Steelers"
            },

            {
                away: "Las Vegas Raiders",
                home: "New England Patriots"
            },

            {
                away: "Minnesota Vikings",
                home: "New Orleans Saints"
            },

            {
                away: "New York Giants",
                home: "Washington Commanders"
            },

            {
                away: "Denver Broncos",
                home: "Los Angeles Chargers"
            },

            {
                away: "Chicago Bears",
                home: "Green Bay Packers"
            },

            {
                away: "Detroit Lions",
                home: "Arizona Cardinals"
            },

            {
                away: "San Francisco 49ers",
                home: "Seattle Seahawks"
            },

            {
                away: "Baltimore Ravens",
                home: "Atlanta Falcons"
            },

            {
                away: "Buffalo Bills",
                home: "Los Angeles Rams"
            }

        ],


        /* ======================================
           WEEK 6
           ====================================== */

        6: [

            {
                away: "Seattle Seahawks",
                home: "Denver Broncos"
            },

            {
                away: "Houston Texans",
                home: "Jacksonville Jaguars"
            },

            {
                away: "Baltimore Ravens",
                home: "Cleveland Browns"
            },

            {
                away: "Carolina Panthers",
                home: "Philadelphia Eagles"
            },

            {
                away: "Chicago Bears",
                home: "Atlanta Falcons"
            },

            {
                away: "New Orleans Saints",
                home: "New York Giants"
            },

            {
                away: "New York Jets",
                home: "New England Patriots"
            },

            {
                away: "Pittsburgh Steelers",
                home: "Tampa Bay Buccaneers"
            },

            {
                away: "Tennessee Titans",
                home: "Indianapolis Colts"
            },

            {
                away: "Arizona Cardinals",
                home: "Los Angeles Rams"
            },

            {
                away: "Buffalo Bills",
                home: "Las Vegas Raiders"
            },

            {
                away: "Los Angeles Chargers",
                home: "Kansas City Chiefs"
            },

            {
                away: "Dallas Cowboys",
                home: "Green Bay Packers"
            },

            {
                away: "Washington Commanders",
                home: "San Francisco 49ers"
            }

        ],


        /* ======================================
           WEEK 7
           ====================================== */

        7: [

            {
                away: "New England Patriots",
                home: "Chicago Bears"
            },

            {
                away: "Pittsburgh Steelers",
                home: "New Orleans Saints"
            },

            {
                away: "Cincinnati Bengals",
                home: "Baltimore Ravens"
            },

            {
                away: "Cleveland Browns",
                home: "Tennessee Titans"
            },

            {
                away: "Indianapolis Colts",
                home: "Minnesota Vikings"
            },

            {
                away: "Miami Dolphins",
                home: "New York Jets"
            },

            {
                away: "New York Giants",
                home: "Houston Texans"
            },

            {
                away: "San Francisco 49ers",
                home: "Atlanta Falcons"
            },

            {
                away: "Tampa Bay Buccaneers",
                home: "Carolina Panthers"
            },

            {
                away: "Denver Broncos",
                home: "Arizona Cardinals"
            },

            {
                away: "Green Bay Packers",
                home: "Detroit Lions"
            },

            {
                away: "Los Angeles Rams",
                home: "Las Vegas Raiders"
            },

            {
                away: "Kansas City Chiefs",
                home: "Seattle Seahawks"
            },

            {
                away: "Dallas Cowboys",
                home: "Philadelphia Eagles"
            }

        ],


        /* ======================================
           WEEK 8
           ====================================== */

        8: [

            {
                away: "Carolina Panthers",
                home: "Green Bay Packers"
            },

            {
                away: "Arizona Cardinals",
                home: "Dallas Cowboys"
            },

            {
                away: "Atlanta Falcons",
                home: "Tampa Bay Buccaneers"
            },

            {
                away: "Baltimore Ravens",
                home: "Buffalo Bills"
            },

            {
                away: "Cleveland Browns",
                home: "Pittsburgh Steelers"
            },

            {
                away: "Indianapolis Colts",
                home: "Jacksonville Jaguars"
            },

            {
                away: "Las Vegas Raiders",
                home: "New York Jets"
            },

            {
                away: "Minnesota Vikings",
                home: "Detroit Lions"
            },

            {
                away: "Tennessee Titans",
                home: "Cincinnati Bengals"
            },

            {
                away: "Los Angeles Chargers",
                home: "Los Angeles Rams"
            },

            {
                away: "Kansas City Chiefs",
                home: "Denver Broncos"
            },

            {
                away: "New England Patriots",
                home: "Miami Dolphins"
            },

            {
                away: "Philadelphia Eagles",
                home: "Washington Commanders"
            },

            {
                away: "Chicago Bears",
                home: "Seattle Seahawks"
            }

        ],


        /* ======================================
           WEEK 9
           ====================================== */

        9: [

            {
                away: "Jacksonville Jaguars",
                home: "Baltimore Ravens"
            },

            {
                away: "Cincinnati Bengals",
                home: "Atlanta Falcons"
            },

            {
                away: "Cleveland Browns",
                home: "New Orleans Saints"
            },

            {
                away: "Dallas Cowboys",
                home: "Indianapolis Colts"
            },

            {
                away: "Denver Broncos",
                home: "Carolina Panthers"
            },

            {
                away: "Detroit Lions",
                home: "Miami Dolphins"
            },

            {
                away: "Los Angeles Rams",
                home: "Washington Commanders"
            },

            {
                away: "New York Giants",
                home: "Philadelphia Eagles"
            },

            {
                away: "New York Jets",
                home: "Kansas City Chiefs"
            },

            {
                away: "Houston Texans",
                home: "Los Angeles Chargers"
            },

            {
                away: "Las Vegas Raiders",
                home: "San Francisco 49ers"
            },

            {
                away: "Arizona Cardinals",
                home: "Seattle Seahawks"
            },

            {
                away: "Green Bay Packers",
                home: "New England Patriots"
            },

            {
                away: "Tampa Bay Buccaneers",
                home: "Chicago Bears"
            },

            {
                away: "Buffalo Bills",
                home: "Minnesota Vikings"
            }

        ],


        /* ======================================
           WEEK 10
           ====================================== */

        10: [

            {
                away: "Washington Commanders",
                home: "New York Giants"
            },

            {
                away: "New England Patriots",
                home: "Detroit Lions"
            },

            {
                away: "Buffalo Bills",
                home: "New York Jets"
            },

            {
                away: "Carolina Panthers",
                home: "New Orleans Saints"
            },

            {
                away: "Houston Texans",
                home: "Cleveland Browns"
            },

            {
                away: "Jacksonville Jaguars",
                home: "Tennessee Titans"
            },

            {
                away: "Kansas City Chiefs",
                home: "Atlanta Falcons"
            },

            {
                away: "Miami Dolphins",
                home: "Indianapolis Colts"
            },

            {
                away: "Minnesota Vikings",
                home: "Green Bay Packers"
            },

            {
                away: "Seattle Seahawks",
                home: "Las Vegas Raiders"
            },

            {
                away: "Los Angeles Rams",
                home: "Arizona Cardinals"
            },

            {
                away: "San Francisco 49ers",
                home: "Dallas Cowboys"
            },

            {
                away: "Pittsburgh Steelers",
                home: "Cincinnati Bengals"
            },

            {
                away: "Los Angeles Chargers",
                home: "Baltimore Ravens"
            }

        ],


        /* ======================================
           WEEK 11
           ====================================== */

        11: [

            {
                away: "Indianapolis Colts",
                home: "Houston Texans"
            },

            {
                away: "Arizona Cardinals",
                home: "Kansas City Chiefs"
            },

            {
                away: "Baltimore Ravens",
                home: "Carolina Panthers"
            },

            {
                away: "Jacksonville Jaguars",
                home: "New York Giants"
            },

            {
                away: "Miami Dolphins",
                home: "Buffalo Bills"
            },

            {
                away: "New Orleans Saints",
                home: "Chicago Bears"
            },

            {
                away: "Tampa Bay Buccaneers",
                home: "Detroit Lions"
            },

            {
                away: "Tennessee Titans",
                home: "Dallas Cowboys"
            },

            {
                away: "New York Jets",
                home: "Los Angeles Chargers"
            },

            {
                away: "Las Vegas Raiders",
                home: "Denver Broncos"
            },

            {
                away: "Pittsburgh Steelers",
                home: "Philadelphia Eagles"
            },

            {
                away: "Minnesota Vikings",
                home: "San Francisco 49ers"
            },

            {
                away: "Cincinnati Bengals",
                home: "Washington Commanders"
            }

        ],


        /* ======================================
           WEEK 12
           ====================================== */

        12: [

            {
                away: "Green Bay Packers",
                home: "Los Angeles Rams"
            },

            {
                away: "Chicago Bears",
                home: "Detroit Lions"
            },

            {
                away: "Philadelphia Eagles",
                home: "Dallas Cowboys"
            },

            {
                away: "Kansas City Chiefs",
                home: "Buffalo Bills"
            },

            {
                away: "Denver Broncos",
                home: "Pittsburgh Steelers"
            },

            {
                away: "Atlanta Falcons",
                home: "Minnesota Vikings"
            },

            {
                away: "Baltimore Ravens",
                home: "Houston Texans"
            },

            {
                away: "Las Vegas Raiders",
                home: "Cleveland Browns"
            },

            {
                away: "New Orleans Saints",
                home: "Cincinnati Bengals"
            },

            {
                away: "New York Giants",
                home: "Indianapolis Colts"
            },

            {
                away: "New York Jets",
                home: "Miami Dolphins"
            },

            {
                away: "Tennessee Titans",
                home: "Jacksonville Jaguars"
            },

            {
                away: "Seattle Seahawks",
                home: "San Francisco 49ers"
            },

            {
                away: "Washington Commanders",
                home: "Arizona Cardinals"
            },

            {
                away: "New England Patriots",
                home: "Los Angeles Chargers"
            },

            {
                away: "Carolina Panthers",
                home: "Tampa Bay Buccaneers"
            }

        ],


        /* ======================================
           WEEK 13
           ====================================== */

        13: [

            {
                away: "Kansas City Chiefs",
                home: "Los Angeles Rams"
            },

            {
                away: "Cincinnati Bengals",
                home: "Cleveland Browns"
            },

            {
                away: "Detroit Lions",
                home: "Atlanta Falcons"
            },

            {
                away: "Green Bay Packers",
                home: "New Orleans Saints"
            },

            {
                away: "Jacksonville Jaguars",
                home: "Chicago Bears"
            },

            {
                away: "Los Angeles Chargers",
                home: "Tampa Bay Buccaneers"
            },

            {
                away: "San Francisco 49ers",
                home: "New York Giants"
            },

            {
                away: "Washington Commanders",
                home: "Tennessee Titans"
            },

            {
                away: "Miami Dolphins",
                home: "Denver Broncos"
            },

            {
                away: "Philadelphia Eagles",
                home: "Arizona Cardinals"
            },

            {
                away: "Buffalo Bills",
                home: "New England Patriots"
            },

            {
                away: "Carolina Panthers",
                home: "Minnesota Vikings"
            },

            {
                away: "Houston Texans",
                home: "Pittsburgh Steelers"
            },

            {
                away: "Dallas Cowboys",
                home: "Seattle Seahawks"
            }

        ],


        /* ======================================
           WEEK 14
           ====================================== */

        14: [

            {
                away: "Minnesota Vikings",
                home: "New England Patriots"
            },

            {
                away: "Atlanta Falcons",
                home: "Cleveland Browns"
            },

            {
                away: "Chicago Bears",
                home: "Miami Dolphins"
            },

            {
                away: "Denver Broncos",
                home: "New York Jets"
            },

            {
                away: "Houston Texans",
                home: "Washington Commanders"
            },

            {
                away: "Indianapolis Colts",
                home: "Philadelphia Eagles"
            },

            {
                away: "New Orleans Saints",
                home: "Carolina Panthers"
            },

            {
                away: "Tampa Bay Buccaneers",
                home: "Baltimore Ravens"
            },

            {
                away: "Tennessee Titans",
                home: "Detroit Lions"
            },

            {
                away: "Los Angeles Chargers",
                home: "Las Vegas Raiders"
            },

            {
                away: "Kansas City Chiefs",
                home: "Cincinnati Bengals"
            },

            {
                away: "Los Angeles Rams",
                home: "San Francisco 49ers"
            },

            {
                away: "New York Giants",
                home: "Seattle Seahawks"
            },

            {
                away: "Buffalo Bills",
                home: "Green Bay Packers"
            },

            {
                away: "Pittsburgh Steelers",
                home: "Jacksonville Jaguars"
            }

        ],


        /* ======================================
           WEEK 15
           ====================================== */

        15: [

            {
                away: "San Francisco 49ers",
                home: "Los Angeles Chargers"
            },

            {
                away: "Seattle Seahawks",
                home: "Philadelphia Eagles"
            },

            {
                away: "Chicago Bears",
                home: "Buffalo Bills"
            },

            {
                away: "Atlanta Falcons",
                home: "Washington Commanders"
            },

            {
                away: "Baltimore Ravens",
                home: "Pittsburgh Steelers"
            },

            {
                away: "Cincinnati Bengals",
                home: "Carolina Panthers"
            },

            {
                away: "Cleveland Browns",
                home: "New York Giants"
            },

            {
                away: "Indianapolis Colts",
                home: "Tennessee Titans"
            },

            {
                away: "Jacksonville Jaguars",
                home: "Houston Texans"
            },

            {
                away: "Miami Dolphins",
                home: "Green Bay Packers"
            },

            {
                away: "New Orleans Saints",
                home: "Tampa Bay Buccaneers"
            },

            {
                away: "New York Jets",
                home: "Arizona Cardinals"
            },

            {
                away: "Dallas Cowboys",
                home: "Los Angeles Rams"
            },

            {
                away: "Denver Broncos",
                home: "Las Vegas Raiders"
            },

            {
                away: "Detroit Lions",
                home: "Minnesota Vikings"
            },

            {
                away: "New England Patriots",
                home: "Kansas City Chiefs"
            }

        ],


        /* ======================================
           WEEK 16
           ====================================== */

        16: [

            {
                away: "Houston Texans",
                home: "Philadelphia Eagles"
            },

            {
                away: "Green Bay Packers",
                home: "Chicago Bears"
            },

            {
                away: "Buffalo Bills",
                home: "Denver Broncos"
            },

            {
                away: "Los Angeles Rams",
                home: "Seattle Seahawks"
            },

            {
                away: "Arizona Cardinals",
                home: "New Orleans Saints"
            },

            {
                away: "Cleveland Browns",
                home: "Baltimore Ravens"
            },

            {
                away: "Los Angeles Chargers",
                home: "Miami Dolphins"
            },

            {
                away: "New England Patriots",
                home: "New York Jets"
            },

            {
                away: "Tennessee Titans",
                home: "Las Vegas Raiders"
            },

            {
                away: "Carolina Panthers",
                home: "Pittsburgh Steelers"
            },

            {
                away: "Cincinnati Bengals",
                home: "Indianapolis Colts"
            },

            {
                away: "San Francisco 49ers",
                home: "Kansas City Chiefs"
            },

            {
                away: "Tampa Bay Buccaneers",
                home: "Atlanta Falcons"
            },

            {
                away: "Washington Commanders",
                home: "Minnesota Vikings"
            },

            {
                away: "Jacksonville Jaguars",
                home: "Dallas Cowboys"
            },

            {
                away: "New York Giants",
                home: "Detroit Lions"
            }

        ],


        /* ======================================
           WEEK 17
           ====================================== */

        17: [

            {
                away: "Baltimore Ravens",
                home: "Cincinnati Bengals"
            },

            {
                away: "Buffalo Bills",
                home: "Miami Dolphins"
            },

            {
                away: "Indianapolis Colts",
                home: "Cleveland Browns"
            },

            {
                away: "Minnesota Vikings",
                home: "New York Jets"
            },

            {
                away: "New Orleans Saints",
                home: "Atlanta Falcons"
            },

            {
                away: "New York Giants",
                home: "Dallas Cowboys"
            },

            {
                away: "Pittsburgh Steelers",
                home: "Tennessee Titans"
            },

            {
                away: "Seattle Seahawks",
                home: "Carolina Panthers"
            },

            {
                away: "Las Vegas Raiders",
                home: "Arizona Cardinals"
            },

            {
                away: "Denver Broncos",
                home: "New England Patriots"
            },

            {
                away: "Detroit Lions",
                home: "Chicago Bears"
            },

            {
                away: "Kansas City Chiefs",
                home: "Los Angeles Chargers"
            },

            {
                away: "Los Angeles Rams",
                home: "Tampa Bay Buccaneers"
            },

            {
                away: "Washington Commanders",
                home: "Jacksonville Jaguars"
            },

            {
                away: "Philadelphia Eagles",
                home: "San Francisco 49ers"
            },

            {
                away: "Houston Texans",
                home: "Green Bay Packers"
            }

        ],


        /* ======================================
           WEEK 18
           ====================================== */

        18: [

            {
                away: "Cleveland Browns",
                home: "Cincinnati Bengals"
            },

            {
                away: "Los Angeles Chargers",
                home: "Denver Broncos"
            },

            {
                away: "New York Jets",
                home: "Buffalo Bills"
            },

            {
                away: "Atlanta Falcons",
                home: "Carolina Panthers"
            },

            {
                away: "Chicago Bears",
                home: "Minnesota Vikings"
            },

            {
                away: "Dallas Cowboys",
                home: "Washington Commanders"
            },

            {
                away: "Detroit Lions",
                home: "Green Bay Packers"
            },

            {
                away: "Jacksonville Jaguars",
                home: "Indianapolis Colts"
            },

            {
                away: "Las Vegas Raiders",
                home: "Kansas City Chiefs"
            },

            {
                away: "Miami Dolphins",
                home: "New England Patriots"
            },

            {
                away: "Philadelphia Eagles",
                home: "New York Giants"
            },

            {
                away: "Pittsburgh Steelers",
                home: "Baltimore Ravens"
            },

            {
                away: "San Francisco 49ers",
                home: "Arizona Cardinals"
            },

            {
                away: "Seattle Seahawks",
                home: "Los Angeles Rams"
            },

            {
                away: "Tampa Bay Buccaneers",
                home: "New Orleans Saints"
            },

            {
                away: "Tennessee Titans",
                home: "Houston Texans"
            }

        ]

    };


    /* ------------------------------------------
       VERIFY SCHEDULE
    ------------------------------------------ */

    const totalGames =
        Object.values(schedules)
            .reduce(
                (total, week) => total + week.length,
                0
            );

    console.log(
        `REAPER LOUNGE: ${totalGames} official NFL games loaded.`
    );


    /* ------------------------------------------
       WEEK SELECTOR
    ------------------------------------------ */

    const weekSelect =
        document.getElementById("weekSelect");

    const scheduleContainer =
        document.getElementById(
            "scheduleContainer"
        );


    /* ------------------------------------------
       RENDER NFL SCHEDULE
    ------------------------------------------ */

    function renderSchedule(week) {

        if (!scheduleContainer) {
            return;
        }

        const selectedWeek =
            Number(week);

        const games =
            schedules[selectedWeek] || [];

        scheduleContainer.innerHTML = "";


        if (!games.length) {

            scheduleContainer.innerHTML = `
                <div class="schedule-empty">
                    <p>NO SCHEDULE FOUND FOR THIS WEEK.</p>
                </div>
            `;

            return;
        }


        games.forEach((game, index) => {

            const card =
                document.createElement("article");

            card.className =
                "game-card";


            /*
             * Reaper Lounge Game of the Week
             * Week 1 = Cowboys vs Giants
             *
             * For every other week, the first
             * official matchup is highlighted.
             */

            if (
                selectedWeek === 1 &&
                game.away === "Dallas Cowboys" &&
                game.home === "New York Giants"
            ) {

                card.classList.add(
                    "featured-game"
                );

            } else if (
                selectedWeek !== 1 &&
                index === 0
            ) {

                card.classList.add(
                    "featured-game"
                );

            }


            card.innerHTML = `
                <div class="game-week">
                    WEEK ${selectedWeek}
                    ${
                        card.classList.contains(
                            "featured-game"
                        )
                            ? " • GAME OF THE WEEK"
                            : ""
                    }
                </div>

                <div class="game-matchup">

                    <span>
                        ${game.away}
                    </span>

                    <span class="game-vs">
                        @
                    </span>

                    <span>
                        ${game.home}
                    </span>

                </div>
            `;


            scheduleContainer.appendChild(card);

        });

    }


    /* ------------------------------------------
       START SCHEDULE
    ------------------------------------------ */

    if (
        weekSelect &&
        scheduleContainer
    ) {

        renderSchedule(
            weekSelect.value || 1
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


    /* ------------------------------------------
       AUTO-CREATE WEEK OPTIONS
       ONLY IF SELECT IS EMPTY
    ------------------------------------------ */

    if (weekSelect) {

        const existingOptions =
            weekSelect.options.length;

        if (existingOptions === 0) {

            for (
                let week = 1;
                week <= 18;
                week++
            ) {

                const option =
                    document.createElement("option");

                option.value = week;
                option.textContent =
                    `Week ${week}`;

                weekSelect.appendChild(
                    option
                );

            }

            weekSelect.value = "1";

            if (scheduleContainer) {
                renderSchedule(1);
            }

        }

    }

});

