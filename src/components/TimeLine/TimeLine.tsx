import React from 'react'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot, { TimelineDotProps } from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';



type TimeLineProps = {
    title: string;
    color?: TimelineDotProps["color"];
    location: string;
    date: string;
    degree?: string; 
    desc: string;
    variant?: TimelineDotProps["variant"]; 
};
import "./TimeLine.css";

const TimeLine = ({ title, color, location, date, degree, desc , variant }: TimeLineProps) => {
    return (
        <div>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color={color} variant={variant}/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography sx={{ pb: "8px", fontWeight: "bold" }}>
                            {title}
                        </Typography>
                        <Typography sx={{ px: "10px", fontWeight: "600" }} >
                            {location}
                        </Typography>
                        <Typography sx={{ px: "10px", fontWeight: "600" }} className='date'>
                            {date}
                        </Typography>
                        <Typography sx={{ px: "10px", fontWeight: "600" }}>
                            {degree}
                        </Typography>
                        <Typography  className='Desc'>
                            {desc}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>


        </div>
    )
}

export default TimeLine