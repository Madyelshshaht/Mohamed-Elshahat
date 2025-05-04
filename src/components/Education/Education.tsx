import React from "react";
import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";

import { GraduationCap } from "lucide-react";
import TimeLine from "../TimeLine/TimeLine";

const Education = () => {
    return (
        <div>
            <h2
                className="text-2xl font-bold mb-4 flex items-center gap-2"
                style={{ color: "#00e650" }}
            >
                <span>
                    <GraduationCap size={30} />
                </span>
                Education
            </h2>
            <Timeline
                className="items-start "
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                <TimeLine title={`Mansoura Unversity [ FCIS ]`}
                    variant="outlined"
                    color={"success"}
                    location={"Mansoura, Egypt"}
                    date={" 2022 - 2026"}
                    desc="Student in level 3 in in section
                            IT and computer science including programming, algorithms, data
                            structures, and web development. gained practical skills through internships,
                            and collaborative projects. Proficient in multiple programming languages [
                            Python, C# ] and experienced with real-world IT systems and problem
                            solving."
                />

                <TimeLine title={`High School`}
                    color={"success"}
                    location={"Shirbin, Egypt"}
                    date={"2019 - 2021"}
                    desc="I'm finished  (General Certificate of Secondary Education) with a very good degree (90%)"
                />
            </Timeline>
        </div>
    );
};

export default Education;
