"use client";
import { useState } from "react";

function ThemeSwitcher(props) {
  const themes = [
    {
      id: "system",
      name: "System",
      emoji: "🖥️",
      color: "",
      accents: [{ name: "None", id: "" }],
    },
    {
      id: "ctp-latte",
      name: "Latte",
      emoji: "🌻",
      color: {
        text: "text",
        subtext: "overlay2",
        success: "green",
        warning: "yellow",
        danger: "red",
        accent: "mauve",
        border: "surface0",
        background2: "base",
        background1: "mantle",
        background0: "crust",
        yellow: "yellow",
        mauve: "mauve",
      },
      accents: [
        { name: "Default", id: "mauve" },
        { name: "Rosewater", id: "rosewater" },
        { name: "Flamingo", id: "flamingo" },
        { name: "Pink", id: "pink" },
        { name: "Mauve", id: "mauve" },
        { name: "Red", id: "red" },
        { name: "Maroon", id: "maroon" },
        { name: "Peach", id: "peach" },
        { name: "Yellow", id: "yellow" },
        { name: "Green", id: "green" },
        { name: "Teal", id: "teal" },
        { name: "Sky", id: "sky" },
        { name: "Sapphire", id: "sapphire" },
        { name: "Blue", id: "blue" },
        { name: "Lavender", id: "lavender" },
      ],
    },
    {
      id: "ctp-frappe",
      name: "Frappé",
      emoji: "🪴",
      color: {
        text: "text",
        subtext: "overlay2",
        success: "green",
        warning: "yellow",
        danger: "red",
        accent: "mauve",
        border: "surface0",
        background2: "base",
        background1: "mantle",
        background0: "crust",
        yellow: "yellow",
        mauve: "mauve",
      },
      accents: [
        { name: "Default", id: "mauve" },
        { name: "Rosewater", id: "rosewater" },
        { name: "Flamingo", id: "flamingo" },
        { name: "Pink", id: "pink" },
        { name: "Mauve", id: "mauve" },
        { name: "Red", id: "red" },
        { name: "Maroon", id: "maroon" },
        { name: "Peach", id: "peach" },
        { name: "Yellow", id: "yellow" },
        { name: "Green", id: "green" },
        { name: "Teal", id: "teal" },
        { name: "Sky", id: "sky" },
        { name: "Sapphire", id: "sapphire" },
        { name: "Blue", id: "blue" },
        { name: "Lavender", id: "lavender" },
      ],
    },
    {
      id: "ctp-macchiato",
      name: "Macchiato",
      emoji: "🌺",
      color: {
        text: "text",
        subtext: "overlay2",
        success: "green",
        warning: "yellow",
        danger: "red",
        accent: "mauve",
        border: "surface0",
        background2: "base",
        background1: "mantle",
        background0: "crust",
        yellow: "yellow",
        mauve: "mauve",
      },
      accents: [
        { name: "Default", id: "mauve" },
        { name: "Rosewater", id: "rosewater" },
        { name: "Flamingo", id: "flamingo" },
        { name: "Pink", id: "pink" },
        { name: "Mauve", id: "mauve" },
        { name: "Red", id: "red" },
        { name: "Maroon", id: "maroon" },
        { name: "Peach", id: "peach" },
        { name: "Yellow", id: "yellow" },
        { name: "Green", id: "green" },
        { name: "Teal", id: "teal" },
        { name: "Sky", id: "sky" },
        { name: "Sapphire", id: "sapphire" },
        { name: "Blue", id: "blue" },
        { name: "Lavender", id: "lavender" },
      ],
    },
    {
      id: "ctp-mocha",
      name: "Mocha",
      emoji: "🌿",
      color: {
        text: "text",
        subtext: "overlay2",
        success: "green",
        warning: "yellow",
        danger: "red",
        accent: "mauve",
        border: "surface0",
        background2: "base",
        background1: "mantle",
        background0: "crust",
        yellow: "yellow",
        mauve: "mauve",
      },
      accents: [
        { name: "Default", id: "mauve" },
        { name: "Rosewater", id: "rosewater" },
        { name: "Flamingo", id: "flamingo" },
        { name: "Pink", id: "pink" },
        { name: "Mauve", id: "mauve" },
        { name: "Red", id: "red" },
        { name: "Maroon", id: "maroon" },
        { name: "Peach", id: "peach" },
        { name: "Yellow", id: "yellow" },
        { name: "Green", id: "green" },
        { name: "Teal", id: "teal" },
        { name: "Sky", id: "sky" },
        { name: "Sapphire", id: "sapphire" },
        { name: "Blue", id: "blue" },
        { name: "Lavender", id: "lavender" },
      ],
    },
    {
      id: "rp",
      name: "Rosé Pine",
      emoji: "🌹",
      color: {
        text: "text",
        subtext: "subtle",
        success: "pine",
        warning: "gold",
        danger: "love",
        accent: "iris",
        border: "highlight-high",
        background2: "overlay",
        background1: "surface",
        background0: "base",
        yellow: "gold",
        mauve: "iris",
      },
      accents: [
        { name: "Default", id: "iris" },
        { name: "Love", id: "love" },
        { name: "Gold", id: "gold" },
        { name: "Rose", id: "rose" },
        { name: "Pine", id: "pine" },
        { name: "Foam", id: "foam" },
        { name: "Iris", id: "iris" },
      ],
    },
    {
      id: "rp-moon",
      name: "Rosé Pine Moon",
      emoji: "🌙",
      color: {
        text: "text",
        subtext: "subtle",
        success: "pine",
        warning: "gold",
        danger: "love",
        accent: "iris",
        border: "highlight-high",
        background2: "overlay",
        background1: "surface",
        background0: "base",
        yellow: "gold",
        mauve: "iris",
      },
      accents: [
        { name: "Default", id: "iris" },
        { name: "Love", id: "love" },
        { name: "Gold", id: "gold" },
        { name: "Rose", id: "rose" },
        { name: "Pine", id: "pine" },
        { name: "Foam", id: "foam" },
        { name: "Iris", id: "iris" },
      ],
    },
    {
      id: "rp-dawn",
      name: "Rosé Pine Dawn",
      emoji: "🌄",
      color: {
        text: "text",
        subtext: "subtle",
        success: "pine",
        warning: "gold",
        danger: "love",
        accent: "iris",
        border: "highlight-high",
        background2: "overlay",
        background1: "surface",
        background0: "base",
        yellow: "gold",
        mauve: "iris",
      },
      accents: [
        { name: "Default", id: "iris" },
        { name: "Love", id: "love" },
        { name: "Gold", id: "gold" },
        { name: "Rose", id: "rose" },
        { name: "Pine", id: "pine" },
        { name: "Foam", id: "foam" },
        { name: "Iris", id: "iris" },
      ],
    },
  ];
  const [themeIndex, setThemeIndex] = useState(
    JSON.parse(localStorage.getItem("theme-index")) || 0,
  );
  const [accentIndex, setAccentIndex] = useState(
    JSON.parse(localStorage.getItem("accent-index")) || 0,
  );
  const [listAccents, setListAccents] = useState(
    generateAccentList(themeIndex),
  );

  const listThemes = themes.map((theme, index) => (
    <option key={index} value={index}>
      {theme.emoji} {theme.name}
    </option>
  ));

  function assembleTheme(index) {
    var theme = themes[index].color;
    var completedTheme = ":root { ";
    for (const color in theme) {
      if (color == "yellow" || color == "mauve") {
        completedTheme =
          completedTheme +
          "--logo-" +
          `${color}` +
          ": var(--" +
          themes[index].id +
          "-" +
          `${theme[color]}` +
          "); ";
      } else {
        completedTheme =
          completedTheme +
          "--" +
          `${color}` +
          ": var(--" +
          themes[index].id +
          "-" +
          `${theme[color]}` +
          "); ";
      }
    }
    completedTheme = completedTheme + "}";
    return completedTheme;
  }

  function setTheme(index) {
    if (themes[index].id == "system") {
      document.getElementById("themeStyle").textContent = themes[index].color;
    } else {
      document.getElementById("themeStyle").textContent = assembleTheme(index);
    }
  }

  function updateTheme(event) {
    // Figure out what index was picked
    const index = event.target.value;
    // Update state for accent function
    localStorage.setItem("theme-index", JSON.stringify(index));
    setThemeIndex(index);
    // Construct and apply theme
    setTheme(index)
    // Updates accent list
    setListAccents(generateAccentList(index));
    // Apply default accent colour, and update state of selector
    localStorage.setItem("accent-index", JSON.stringify(0));
    setAccentIndex(0);
    setAccent(index, 0);
  }

  function generateAccentList(index) {
    return themes[index].accents.map((accent, index) => (
      <option key={index} value={index}>
        {accent.name}
      </option>
    ));
  }

  function setAccent(theme, accent) {
    if (themes[theme].id == "system") {
      document.getElementById("accentStyle").textContent = "";
    } else {
      document.getElementById("accentStyle").textContent =
        ":root { --accent-color: var(--" +
        themes[theme].id +
        "-" +
        themes[theme].accents[accent].id +
        "); }";
    }
  }

  function updateAccent(event) {
    // var accentIndex = themes[themeIndex].accents.findIndex(({ id }) => id === event.target.value);
    var index = event.target.value;
    localStorage.setItem("accent-index", JSON.stringify(index));
    setAccentIndex(index);
    setAccent(themeIndex, index)
  }

  return (
    <>
      <div style={{ display: "flex", alignItems: "stretch" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingBottom: "2px",
            paddingTop: "2px",
          }}
        >
          <label style={{ display: "block" }} htmlFor="themeSelector">
            Theme
          </label>
          <label style={{ display: "block" }} htmlFor="accentSelector">
            Accent
          </label>
        </div>
        <div>
          <select
            style={{ display: "block" }}
            name="Change theme"
            id="themeSelector"
            className=""
            value={themeIndex}
            onChange={updateTheme}
          >
            {listThemes}
          </select>
          <select
            style={{ display: "block" }}
            name="Change accent"
            id="accentSelector"
            className=""
            value={accentIndex}
            onChange={updateAccent}
          >
            {listAccents}
          </select>
        </div>
      </div>
    </>
  );
}
export default ThemeSwitcher;
