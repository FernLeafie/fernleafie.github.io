function ThemeSwitcher(props) {
  const themes = [
    { id: "system", name: "System", emoji: "🖥️", color: "" },
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
    },
    {
      id: "rp",
      name: "Rose Pine",
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
    },
    {
      id: "rp-moon",
      name: "Rose Pine Moon",
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
    },
    {
      id: "rp-dawn",
      name: "Rose Pine Dawn",
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
    var themeIndex = themes.findIndex(({ id }) => id === event.target.value);
    if (themes[themeIndex].id == "system") {
      document.getElementById("themeStyle").textContent =
        themes[themeIndex].color;
    } else {
      document.getElementById("themeStyle").textContent =
        assembleTheme(themeIndex);
    }
  }

  return (
    <>
      <lable htmlFor="themeSelector">Theme</lable>
      <select
        name="Change theme"
        id="themeSelector"
        className=""
        onChange={setTheme}
      >
        {listThemes}
      </select>
    </>
  );
}
export default ThemeSwitcher;
