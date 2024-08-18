/* eslint-disable max-lines */
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Fade from 'react-reveal/Fade';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import activisionLogo from '../../assets/images/activision_logo.png'

import BlogList from '../components/BlogList';
import { Button, Divider, PageWrapper } from '../components/Common';
import Github from '../components/icons/Github';
import Linkedin from '../components/icons/Linkedin';
import SkillCarousel from '../components/SkillCarousel';
import Typewriter from '../components/Typewritter';
// import Wechat from '../components/icons/Wechat';
import Layout from '../components/Layout';
import Link from '../components/Link';
import { Title } from '../components/Typography';
import styled from '../lib/styled-components';
import { keyframes } from 'styled-components';
import {
    colors,
    media,
    textColor,
    textSize,
    transitionDuration
} from '../styles/common';
// eslint-disable-next-line no-unused-vars
import { FluidImage } from '../types/Image';
// eslint-disable-next-line no-unused-vars
import { Post } from '../types/Post';
// eslint-disable-next-line no-unused-vars
import { Project as ProjectType } from '../types/Project';
import { useTheme } from '../utils/context';

const Header = styled.div`
    position: relative;
    height: 560px;
    margin-top: -60px; // height of the menu
    display: flex;
    padding: 0 20px;

    ${media.medium`
        height: unset;
        margin-top: -140px; // height of the menu
        padding-top: calc(140px + 20px);
        padding-bottom: 80px;
    `};
`;

const StyledPageWrapper = styled(PageWrapper)`
    padding: 40px 0;
`;

const HeaderWrapper = styled(PageWrapper)`
    display: flex;
    height: 100%;

    ${media.medium`
        flex-direction: column;
    `};
`;

const HeaderImage = styled(Img)`
    left: 0;
    top: 0;
    width: 100vw;
    height: 560px;

    ${media.medium`
        height: 100%;
    `};

    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${props =>
            props.theme.color === 'light'
                ? colors.backgroundLight
                : colors.backgroundDark};
        opacity: 1;
    }
`;

const HeadshotWrapper = styled.div`
    z-index: 1;
    align-self: flex-end;
    flex-shrink: 0;

    ${media.medium`
        align-self: center;
    `};
`;
const HeadershotAnimation = keyframes`
    0%, 100% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.05) rotate(4deg); }
    50% { transform: scale(1.05) rotate(-4deg); }
    75% { transform: scale(0.95) rotate(-4deg); }
`;

const Headshot = styled(Img)`
    height: 460px;
    width: 460px;
    animation: ${HeadershotAnimation} 10s infinite;

    ${media.medium`
        height: 250px;
        width: 250px;
        margin-bottom: 40px;
    `};
`;

const Intro = styled.div`
    align-self: center;
    margin-top: 20px;
    margin-left: 80px;
    z-index: 1;

    ${media.medium`
        margin-top: 0;
        margin-left: 0;
        text-align: center;
        width: 600px;
        max-width: 100%;
    `};
`;

const skills = [
    {
      title: 'Django',
      image: '/path/to/django-logo.png',
      description: 'A high-level Python Web framework that encourages rapid development.',
    },
    {
      title: 'React',
      image: '/path/to/react-logo.png',
      description: 'A JavaScript library for building user interfaces.',
    },
    {
    title: 'Django',
    image: '/path/to/django-logo.png',
    description: 'A high-level Python Web framework that encourages rapid development.',
    },
    {
    title: 'Django',
    image: '/path/to/django-logo.png',
    description: 'A high-level Python Web framework that encourages rapid development.',
    },
    {
    title: 'Django',
    image: '/path/to/django-logo.png',
    description: 'A high-level Python Web framework that encourages rapid development.',
    },
    {
    title: 'Django',
    image: '/path/to/django-logo.png',
    description: 'A high-level Python Web framework that encourages rapid development.',
    },
    // TODO: more skills
  ];

const IntroDescription: React.FC = styled.p`
    ${textSize.largeThin};
    ${textColor.body};
    margin-bottom: 10px;

    ${media.medium`
        margin-bottom: 30px;
    `};
`;

const WorkExperience = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5px;
    padding-right: 20px;
    padding-left: 20px;
`;

const WorkHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
`;

const WorkLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const WorkSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 0px 30px;
`;


const WorkTitle = styled.p`
    ${textSize.largeThin};
    ${textColor.body};
    margin-bottom: 10px;
    text-align: left;
`;

const WorkSubTitle = styled.p`
    ${textSize.normal};
    ${textColor.body};
    margin-bottom: 10px;
    text-align: right;
    margin-left: auto;

    ${media.medium`
        margin-bottom: 30px;
    `};
`;

const WorkDescription = styled.p`
    ${textSize.normal};
    ${textColor.body};
    margin-bottom: 10px;

    ${media.medium`
        margin-bottom: 30px;
    `};
`;

const SocialMedia = styled.ul`
    display: flex;
    align-items: center;
    margin: 0 -10px;
    padding: 0;

    ${media.medium`
        justify-content: center;
    `};

    svg {
        width: 35px;
    }
`;

const SocialMediaItem = styled.li`
    margin: 0 2rem;
    transform: scale(1.5);

    &:before {
        content: '';
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 20px;
`;

const RecentPosts = styled(Section)`
    align-items: center;
`;

const Projects = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    justify-content: center;
`;

const ProjectWrapper = styled.div`
    flex-basis: 360px;
    max-width: 100%;
`;

const LinkedProject = styled(Link)`
    text-decoration: none;
    color: inherit;
    transition: all ease-in-out ${transitionDuration.slow};
    display: block;

    &:hover {
        transform: scale(1.02);
        color: inherit;
    }
`;

const Project = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-bottom: 60px;
`;

const ProjectTitle = styled.h3`
    ${textColor.title};
    ${textSize.large};
    font-family: 'Poppins';
    margin: 0 0 10px 0;
`;

const ProjectImage = styled(Img)`
    margin-bottom: 20px;
    width: 240px;
    max-width: 100%;
`;

const ProjectDescription = styled.p`
    ${textSize.normal};
    text-align: center;
    margin: 0;
`;

const StyledTitle = styled(Title)`
    margin-bottom: 80px;

    ${media.medium`
        margin-bottom: 60px;
    `};
`;

const SocialMediaGroup = (): JSX.Element => {
    const { theme } = useTheme();
    const iconFill =
        theme === 'light' ? colors.textTitleLight : colors.textTitleDark;
    const items = [
        {
            link: 'https://github.com/RUIYUANXia',
            icon: <Github iconFill={iconFill} />
        },
        {
            link: 'https://www.linkedin.com/in/ryxia2002/',
            icon: <Linkedin iconFill={iconFill} />
        }
    ];

    return (
        <SocialMedia>
            {items.map(item => (
                <SocialMediaItem key={item.link}>
                    <Link to={item.link}>{item.icon}</Link>
                </SocialMediaItem>
            ))}
        </SocialMedia>
    );
};

type HomePageProps = {
    data: {
        homeHeader: FluidImage;
        homeHeadshot: FluidImage;
        posts: {
            edges: Post[];
        };
        projects: {
            edges: ProjectType[];
        };
    };
};

const WrappedProject = ({
    projectPageLink,
    children
}: {
    projectPageLink: string | undefined;
    children: React.ReactNode;
}) => {
    if (projectPageLink) {
        return (
            <LinkedProject to={`${projectPageLink}`}>{children}</LinkedProject>
        ) as any;
    } else {
        return children;
    }
};

export const Home = ({
    data: {
        homeHeader,
        homeHeadshot,
        posts: { edges: posts },
        projects: { edges: projects }
    }
}: HomePageProps) => {
    return (
        <Layout>
            <Header>
                <HeaderWrapper>
                    <HeadshotWrapper>
                        <Headshot
                            fluid={homeHeadshot.childImageSharp.fluid}
                            alt="RY Xia's headshot"
                        />
                    </HeadshotWrapper>
                    <Intro>
                        <IntroDescription>
                           <strong>Hi there!</strong> 
                           <br />
                            I am <strong>Ruiyuan Xia</strong>
                            <br />
                            a <strong>UBC</strong> student major in <strong>CS</strong>
                            <br />
                            a <strong>full stack </strong> <strong><Typewriter words={['software developer...', 'data engineer...']} delay={170} /></strong>
                        </IntroDescription>
                        <SocialMediaGroup />
                    </Intro>
                </HeaderWrapper>
                <HeaderImage
                    fluid={homeHeader.childImageSharp.fluid}
                    alt={'Snowy mountains'}
                    style={{ position: 'absolute' }}
                />
            </Header>
            <Fade>
                <Divider />
            </Fade>
            <WorkExperience>
                <Fade top>
                    <StyledTitle as="h2">Work Experience</StyledTitle>
                </Fade>
            </WorkExperience>
            <WorkSection>
                <Fade bottom>
                    <WorkHeader>
                        <WorkLogo src={activisionLogo} alt="Activision Logo" />
                        <WorkTitle>
                            <strong>Full Stack Engineer - Data</strong>
                            <br /> @ Microsoft | Activision • Internship
                        </WorkTitle>
                        <WorkSubTitle>
                            <strong>Sep 2023 - Aug 2024 • 1 yr</strong>
                            <br /> Vancouver, BC, Canada • Hybrid
                        </WorkSubTitle>
                    </WorkHeader>
                    <WorkDescription>
                        • Responsible for the development of data engineering and self service applications with diverse datastore integrations, primarily leveraging Django. <br />
                        • Involved in the design and implementation of templated SQL systems for metadata tracking and data quality assurance. <br />
                        • Participated in full-stack development activities, including backend services, APIs, and frontends for data analytics tool delivery. <br />
                        • Enhanced the anti-cheat application by integrating a permanent ban feature for player mitigation. <br />
                        • Authored complex SQL queries for diverse reporting, dashboarding and visualization. <br />
                        • Supported KPI data ingress and reporting, including game client failures and backend system health. <br />
                        • Enhanced ElasticSearch functionality for the Data QA automation tool, improving the search results.
                    </WorkDescription>
                </Fade>
            </WorkSection>
            <Fade>
                <Divider />
            </Fade>
            <Fade top>
                    <StyledTitle as="h2">Skills</StyledTitle>
            </Fade>
            <Fade bottom>
                <SkillCarousel skills={skills} />
            </Fade>    
            <Fade>
                <Divider />
            </Fade>
            <StyledPageWrapper>
                <Section>
                    <Fade top>
                        <StyledTitle as="h2">Recent Projects</StyledTitle>
                    </Fade>
                    <Projects>
                        {projects.map(({ node: project }) => (
                            <ProjectWrapper key={project.fields.id}>
                                <WrappedProject
                                    projectPageLink={
                                        project.frontmatter.detailsPageLink
                                    }
                                >
                                    <Fade top>
                                        <Project>
                                            <ProjectImage
                                                fluid={
                                                    project.frontmatter.imageColor
                                                        .childImageSharp.fluid
                                                }
                                            />
                                            <ProjectTitle>
                                                {project.frontmatter.title}
                                            </ProjectTitle>
                                            <ProjectDescription>
                                                {project.frontmatter.description}
                                            </ProjectDescription>
                                        </Project>
                                    </Fade>
                                </WrappedProject>
                            </ProjectWrapper>
                        ))}
                    </Projects>
                    <Fade bottom>
                        <Button to="/projects">See all projects</Button>
                    </Fade>
                </Section>
                </StyledPageWrapper>
                <Fade>
                    <Divider />
                </Fade>
                <RecentPosts>
                    <Fade top>
                        <StyledTitle as="h2">Recent Posts</StyledTitle>
                    </Fade>
                    <BlogList posts={posts} />
                    <Fade bottom>
                        <Button to="/blog">See all posts</Button>
                    </Fade>
                </RecentPosts>
        </Layout>
    );
};

export default Home;

export const pageQuery = graphql`
    query {
        homeHeader: file(name: { eq: "home-header" }) {
            childImageSharp {
                fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        homeHeadshot: file(name: { eq: "home-headshot" }) {
            childImageSharp {
                fluid(maxHeight: 460) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        posts: allMdx(
            limit: 3
            sort: { fields: frontmatter___date, order: DESC }
            filter: { fields: { slug: { ne: null } } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        description
                        formattedDate: date(formatString: "MMMM DD, YYYY")
                        dateTimeString: date(formatString: "YYYY-MM-DD")
                        banner {
                            childImageSharp {
                                fluid(maxHeight: 340, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        slug
                        categories
                    }
                    timeToRead
                }
            }
        }
        projects: allMdx(
            limit: 3
            sort: { fields: frontmatter___date, order: DESC }
            filter: { fields: { slug: { eq: null } } }
        ) {
            edges {
                node {
                    fields {
                        id
                        slug
                    }
                    frontmatter {
                        title
                        subtitle
                        description
                        detailsPageLink
                        imageColor {
                            childImageSharp {
                                fluid(maxWidth: 240) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
