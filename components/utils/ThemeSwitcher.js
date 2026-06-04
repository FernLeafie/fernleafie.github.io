import { useState } from "react";

function ThemeSwitcher(props) {
  const [listAccents, setListAccents] = useState("");
  const [themeIndex, setThemeIndex] = useState(0);
  const [accentIndex, setAccentIndex] = useState(0);
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

  const listThemes = themes.map((theme, index) => (
    <option key={index} value={theme.id}>
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

  function setTheme(event) {
    // Figure out what index was picked
    const index = themes.findIndex(({ id }) => id === event.target.value);
    // Update state for accent function
    setThemeIndex(index);
    // Construct and apply theme
    if (themes[index].id == "system") {
      document.getElementById("themeStyle").textContent = themes[index].color;
    } else {
      document.getElementById("themeStyle").textContent = assembleTheme(index);
    }
    // Updates accent list
    setListAccents(
      themes[index].accents.map((accent, index) => (
        <option key={index} value={index}>
          {accent.name}
        </option>
      )),
    );
    // Apply default accent colour, and update state of selector
    setAccentIndex(0);
    if (themes[index].id == "system") {
      document.getElementById("accentStyle").textContent = "";
    } else {
      document.getElementById("accentStyle").textContent =
        ":root { --accent-color: var(--" +
        themes[index].id +
        "-" +
        themes[index].accents[0].id +
        "); }";
    }
  }

  function setAccent(event) {
    // var accentIndex = themes[themeIndex].accents.findIndex(({ id }) => id === event.target.value);
    var index = event.target.value;
    setAccentIndex(index)
    console.log(themes[themeIndex].id);
    document.getElementById("accentStyle").textContent =
      ":root { --accent-color: var(--" +
      themes[themeIndex].id +
      "-" +
      themes[themeIndex].accents[index].id +
      "); }";
  }

  return (
    <>
      <label style={{ display: "block" }}>
        Theme
        <select
          name="Change theme"
          id="themeSelector"
          className=""
          onChange={setTheme}
        >
          {listThemes}
        </select>
      </label>
      <label style={{ display: "block" }}>
        Accent
        <select
          name="Change accent"
          id="accentSelector"
          className=""
          value={accentIndex}
          onChange={setAccent}
        >
          {listAccents}
        </select>
      </label>
    </>
  );
}
export default ThemeSwitcher;
