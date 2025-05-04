import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

import { BookOpenText } from "lucide-react";
import TimeLine from "../TimeLine/TimeLine";

const Experiences = () => {





    return (
        <div>
            <h2
                className="text-2xl font-bold mb-4 flex items-center gap-2"
                style={{ color: "#00e650" }}
            >
                <span>
                    <BookOpenText size={30} />
                </span>
                Experiences
            </h2>
            <Timeline className='items-start'
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}>

                <TimeLine title={`Internship at [ Azrak Company ]`}
                    color={"success"}
                    location={"Mansoura, Egypt"}
                    date={"2024 from 5 / Nov  to 1 / October"}
                    desc="The internship allow to refine my problem-solving skills and work within a
                    dynamic team environment. Overall, my experience at Azzrk was invaluable in
                    building both my technical and collaborative abilities"
                />
                
            </Timeline>
        </div>
    );
};

export default Experiences;
