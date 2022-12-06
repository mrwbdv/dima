import React from 'react';
import { CommonTemplate } from '@ui';
import { WelcomeTemplate } from './templates/welcome/welcome';
import { ExperienceTemplate } from './templates/experience/experience';
import { SuccessfulProjectTemplate } from './templates/successful-project/successful-project';
import { AboutTemplate } from './templates/about/about';
import { SkillsTemplate } from './templates/skills/skills';
import { ProjectsTemplate } from './templates/projects/projects';

export const HomePage = () => {
    return (
        <CommonTemplate>
            <WelcomeTemplate />
            <ExperienceTemplate />
            <ProjectsTemplate />
            <SuccessfulProjectTemplate />
            <AboutTemplate />
            <SkillsTemplate />
            {/* <SkillsTemplate /> */}
            {/* <ProjectsTemplate />
            <AboutTemplate /> */}
        </CommonTemplate>
    );
};
