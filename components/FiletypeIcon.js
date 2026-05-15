function FiletypeIcon({ icon }) {
  switch (icon) {
    case "markdown":
      return (
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.25 8.25 2.25 2.25 2.25-2.25M3.5 11V5.5l2.04 3 1.96-3V11m4-.5V5M1.65 2.5h12.7c.59 0 1.15.49 1.15 1v9c0 .51-.56 1-1.15 1H1.65c-.59 0-1.15-.49-1.15-1V3.58c0-.5.56-1.08 1.15-1.08"
          />
        </svg>
      );
    case "typst":
      return (
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            fill="None"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m 8.343437,11.166576 q 0,0.904586 0.2515369,1.21442 0.2520611,0.309833 0.9152992,0.309833 0.6868689,0 1.7623329,-0.714459 l 0.457387,0.785418 Q 9.7161248,14.500542 8.412229,14.5 7.1072838,14.5 6.3526737,13.857041 5.5975376,13.190789 5.5975376,11.524076 V 5.2856881 H 4.4532815 L 4.2700125,4.4049361 5.5975376,3.976477 V 2.809724 L 8.343437,1.4999709 V 4.118935 l 2.700213,-0.213958 -0.252063,1.5475442 -2.44815,-0.09533 z"
          />
        </svg>
      );
    default:
      return <p>missing</p>;
  }
}
export default FiletypeIcon;
