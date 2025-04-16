# Sims 4 Guide v1.0

[![GitHub Stars](https://img.shields.io/github/stars/FatPurple/sims-4-guide)](https://github.com/FatPurple/sims-4-guide/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/FatPurple/sims-4-guide)](https://github.com/FatPurple/sims-4-guide/network/members)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Overview

This project is a comprehensive online guide for the popular video game The Sims 4. Version 1.0 includes detailed information on aspirations, collections, sentiments, and a dictionary of in-game terms. It aims to be a helpful resource for both new and experienced Sims 4 players.

## Features

* **Aspirations:** In-depth information on all Sims 4 aspirations, including goals and rewards.
* **Collections:** A complete list of all collectible items in the game and how to find them.
* **Sentiments:** Explanations of the various sentiments Sims can develop and their effects.
* **Dictionary:** A searchable dictionary of common terms and concepts used in The Sims 4.

## Technologies Used

* HTML
* CSS
* JavaScript

This project's data is organized within several JavaScript objects (`allCollections`, `allAspirations`, `allCareers`). Each of these objects uses a similar structure: the keys of the object represent categories (e.g., collection names in `allCollections`, aspiration categories in `allAspirations`, career paths in `allCareers`). The value associated with each category key is an array of objects, where each object contains detailed information about a specific item within that category (e.g., a collectible item, an aspiration milestone, a career level).

## How to Use

1.  **Download or clone the repository** to your local machine.
    ```bash
    git clone [https://github.com/FatPurple/sims-4-guide.git](https://github.com/FatPurple/sims-4-guide.git)
    ```
2.  Navigate to the project directory in your file explorer.
3.  **Open the `sims.html` file** in your preferred web browser. This will load the main menu of the Sims 4 Guide.
4.  From the main menu and within each section, **use the provided links** to navigate to different parts of the guide (Aspirations, Collections, Sentiments).
5.  The **dictionary (`sims_dictionary.html`)** can be opened directly in your browser or accessed via a link within the guide to search for specific Sims 4 terms.

## License

This project is licensed under the [GNU GPLv3](LICENSE).

## Author

Joshua R. Netzley Sr. (FatPurple)