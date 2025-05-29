import React from "react";
import { Card } from "react-bootstrap";
import { Grade } from "./model/Grade";

/**
 * Props for the DashboardCard component.
 * 
 * @interface GradesCardProps
 * @property {string} [title] - An optional title for the card.
 * @property {React.JSX.Element} [body] - An optional JSX element to be displayed as the body of the card.
 * @property {string} [className] - An optional CSS class name to apply to the card for styling.
 * @property {React.CSSProperties} [style] - An optional inline style object to apply to the card.
 */
interface GradesCardProps {
  title?: string
  body?: React.JSX.Element
  className?: string
  style?: React.CSSProperties
}

/**
 * A React component that renders a card for displaying grades or related information.
 * 
 * This component accepts props to customize the title, body content, CSS class, and inline styles.
 * 
 * @component
 * @param {GradesCardProps} props - The properties for the DashboardCard component.
 * @returns {JSX.Element} The rendered card component.
 */
export default function DashboardCard(props: GradesCardProps) {
  return (
    <Card className={props.className} style={props.style}>
      <Card.Header>
        <Card.Title>
          {props.title}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        {props.body}
      </Card.Body>
    </Card>
  )
}
