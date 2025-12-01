import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function CertificationsCard() {
  return (
    <Card title="My Certifications">
      <Timeline>
        {CertificationssData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const CertificationssData = [
  {
    date: "2025",
    title: "Professional React Specialization Course",
    subTitle: "Scrimba (Coursera)",
  },
  {
    date: "2025",
    title: "Full Stack Development",
    subTitle: "Scrimba (Coursera)",
  },
];
