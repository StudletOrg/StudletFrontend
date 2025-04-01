import React from "react";
import { Card } from "react-bootstrap";
import { Grade } from "./model/Grade";

interface GradesCardProps {
  title?: string
  body?: React.JSX.Element
  className?: string
  style?: React.CSSProperties
}

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
