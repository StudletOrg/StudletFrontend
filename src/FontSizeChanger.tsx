import { Button, ButtonGroup } from "react-bootstrap";
import { useCookies } from "react-cookie";

/**
 * Represents the available font size options.
 * 
 * @typedef {("normal" | "large" | "extralarge")} FontSizeType
 * 
 * @property {string} normal - Represents the normal font size.
 * @property {string} large - Represents a larger font size.
 * @property {string} extralarge - Represents an extra-large font size.
 */
export type FontSizeType = "normal" | "large" | "extralarge";

/**
 * Props for the FontSizeChanger component.
 * 
 * @interface FontSizeChangerProps
 * @property {React.CSSProperties} [style] - An optional inline style object to apply to the component.
 * @property {string} [className] - An optional CSS class name to apply to the component for styling.
 */
interface FontSizeChangerProps {
  style?: React.CSSProperties;
  className?: string;
}

/**
 * A React component for changing the font size of the application.
 * 
 * This component allows users to select a font size from three options: normal, large, and extra-large.
 * The selected font size is stored in a cookie, which persists across sessions.
 * 
 * @component
 * @param {FontSizeChangerProps} props - The properties for the FontSizeChanger component.
 * @returns {JSX.Element} The rendered font size changer component.
 */
export default function FontSizeChanger(props: FontSizeChangerProps) {
  const [fontSizeCookie, setFontSizeCookie, removeFontSizeCookie] = useCookies(['fontSize']);
  if (fontSizeCookie === undefined) {
    setFontSizeCookie("fontSize", "normal", { path: '/', expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) });
  }

  const setFont = (size: FontSizeType) => {
    return () => {
      setFontSizeCookie("fontSize", size, { path: '/', expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365) });
    };
  };

  const selectedFontSize = fontSizeCookie.fontSize as FontSizeType || "normal";

  return (
    <ButtonGroup style={props.style} className={props.className}>
      <Button variant={`${selectedFontSize === "normal" ? "primary" : "outline-primary"}`} onClick={setFont("normal")} className="font-changer text-normal p-0 ps-1 pe-1">A</Button>
      <Button variant={`${selectedFontSize === "large" ? "primary" : "outline-primary"}`} onClick={setFont("large")} className="font-changer text-large p-0 ps-1 pe-1">A</Button>
      <Button variant={`${selectedFontSize === "extralarge" ? "primary" : "outline-primary"}`} onClick={setFont("extralarge")} className="font-changer text-extralarge p-0 ps-1 pe-1">A</Button>
    </ButtonGroup>
  );
}
