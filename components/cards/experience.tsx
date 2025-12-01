import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        {experiencesData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
            link={ex.link}
            tag={ex.tag}
          />
        ))}
      </Timeline>
    </Card>
  );
}
const experiencesData = [
  {
    date: "Oct 2025 - Present",
    title: "MERN Stack Intern",
    subTitle: "Udevs",
    tag: "Remote",
  }
];
