import React from "react";
import Paper from "@material-ui/core/Paper";
import "./Timer.css";

export default function Timer({ Time, ...props }: { Time: any }) {
  return <div className="rest-time">{Time}</div>;
}
