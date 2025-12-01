import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function EducationCard() {
  return (
    <Card title="My Education">
      <Timeline>
        {EducationsData.map((ed, i) => (
          <TimelineItem
            key={i}
            date={ed.date}
            title={ed.title}
            subTitle={ed.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}
const EducationsData = [
  {
    date: "2024 - Ongoing",
    title: "BSGIS(Geographical Information System",
    subTitle: "University of the Punjab",
  },
];
