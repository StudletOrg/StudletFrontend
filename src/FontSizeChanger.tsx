import { Button, ButtonGroup } from "react-bootstrap";
import { useCookies } from "react-cookie";

export type FontSizeType = "normal" | "large" | "extralarge";

interface FontSizeChangerProps {
  style?: React.CSSProperties;
  className?: string;
}

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
      <Button variant={`${selectedFontSize === "normal" ? "primary" : "outline-primary"}`} onClick={setFont("normal")} className="text-normal p-0 ps-1 pe-1">A</Button>
      <Button variant={`${selectedFontSize === "large" ? "primary" : "outline-primary"}`} onClick={setFont("large")} className="text-large p-0 ps-1 pe-1">A</Button>
      <Button variant={`${selectedFontSize === "extralarge" ? "primary" : "outline-primary"}`} onClick={setFont("extralarge")} className="text-extralarge p-0 ps-1 pe-1">A</Button>
    </ButtonGroup>
  );
}
