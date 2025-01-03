/* eslint-disable max-lines */
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Fade from 'react-reveal/Fade';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { keyframes } from 'styled-components';

import activisionLogo from '../../assets/images/activision_logo.png';
import BlogList from '../components/BlogList';
import { Button, Divider, PageWrapper } from '../components/Common';
import FloatingMenu from '../components/FloatingMenu';
import {
    AirflowIcon,
    ConfluenceIcon,
    CppIcon,
    DatabricksIcon,
    Django,
    DockerIcon,
    ElasticIcon,
    Github,
    JavaIcon,
    JiraIcon,
    KubernetesIcon,
    LaTeXIcon,
    Linkedin,
    MySQLIcon,
    NodeIcon,
    PHPIcon,
    PostgreSQLIcon,
    PythonIcon,
    ReactIcon,
    TypeScriptIcon
} from '../components/icons';
// import Wechat from '../components/icons/Wechat';
import Layout from '../components/Layout';
import Link from '../components/Link';
import SkillCarousel from '../components/SkillCarousel';
import Typewriter from '../components/Typewritter';
import { Title } from '../components/Typography';
import styled from '../lib/styled-components';
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
    padding: 0px 50px;
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
    const theme = useTheme();
    const iconFill =
        theme.theme === 'light' ? colors.textTitleLight : colors.textTitleDark;
    const isLightTheme = theme.theme === 'light';
    const FloatingMenuSections = [
        { id: 'posts', label: 'Recent Posts' },
        { id: 'projects', label: 'Recent Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'work-experience', label: 'Work Experience' },
        { id: 'profile', label: 'Back To Top' }
    ];
    const skills = [
        {
            title: 'Django',
            image: <Django iconFill={iconFill} />,
            description:
                'A high-level Python Web framework that encourages rapid development.'
        },
        {
            title: 'React',
            image: <ReactIcon iconFill={iconFill} />,
            description: 'A JavaScript library for building user interfaces.'
        },
        {
            title: 'Node.js',
            image: <NodeIcon iconFill={iconFill} />,
            description:
                "A JavaScript runtime built on Chrome's V8 JavaScript engine."
        },
        {
            title: 'Python',
            image: <PythonIcon iconFill={iconFill} />,
            description:
                'A versatile programming language that is widely used for web development, data science, etc.'
        },
        {
            title: 'Java',
            image: <JavaIcon iconFill={iconFill} />,
            description:
                'A high-level programming language used for building cross-platform applications.'
        },
        {
            title: 'TypeScript',
            image: <TypeScriptIcon iconFill={iconFill} />,
            description:
                'A typed superset of JavaScript that compiles to plain JavaScript.'
        },
        {
            title: 'C++',
            image: <CppIcon iconFill={iconFill} />,
            description:
                'A general-purpose programming language created as an extension of the C programming language.'
        },
        {
            title: 'PHP',
            image: <PHPIcon iconFill={iconFill} />,
            description:
                'A popular general-purpose scripting language that is especially suited to web development.'
        },
        {
            title: 'MySQL',
            image: <MySQLIcon iconFill={iconFill} />,
            description: 'An open-source relational database management system.'
        },
        {
            title: 'PostgreSQL',
            image: <PostgreSQLIcon iconFill={iconFill} />,
            description:
                'An advanced, enterprise-class open-source relational database system.'
        },
        {
            title: 'Databricks',
            image: <DatabricksIcon iconFill={iconFill} />,
            description:
                'A cloud-based platform for big data processing and machine learning.'
        },
        {
            title: 'ElasticSearch',
            image: <ElasticIcon iconFill={iconFill} />,
            description: 'A distributed, RESTful search and analytics engine.'
        },
        {
            title: 'GitHub',
            image: <Github iconFill={iconFill} />,
            description:
                'A code hosting platform for version control and collaboration.'
        },
        {
            title: 'Docker',
            image: <DockerIcon iconFill={iconFill} />,
            description:
                'A platform for developing, shipping, and running applications using containerization.'
        },
        {
            title: 'Kubernetes',
            image: <KubernetesIcon iconFill={iconFill} />,
            description:
                'An open-source system for automating the deployment, scaling, and management of containerized applications.'
        },
        {
            title: 'Airflow',
            image: <AirflowIcon iconFill={iconFill} />,
            description:
                'A platform to programmatically author, schedule, and monitor workflows.'
        },
        {
            title: 'LaTeX',
            image: <LaTeXIcon iconFill={iconFill} />,
            description:
                'A document preparation system for high-quality typesetting.'
        },
        {
            title: 'JIRA',
            image: <JiraIcon iconFill={iconFill} />,
            description:
                'A tool developed by Atlassian for bug tracking, issue tracking, and project management.'
        },
        {
            title: 'Confluence',
            image: <ConfluenceIcon iconFill={iconFill} />,
            description:
                'A collaboration tool used to help teams collaborate and share knowledge efficiently.'
        }
        // more skills here...
    ];

    return (
        <Layout>
            <FloatingMenu
                sections={FloatingMenuSections}
                isLightTheme={isLightTheme}
            />
            <Header id="profile">
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
                            <br />I am <strong>Ruiyuan Xia</strong>
                            <br />a <strong>UBC</strong> student major in{' '}
                            <strong>CS</strong>
                            <br />a <strong>full stack </strong>{' '}
                            <strong>
                                <Typewriter
                                    words={[
                                        'software developer...',
                                        'data engineer...'
                                    ]}
                                    delay={170}
                                />
                            </strong>
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
            <WorkExperience id="work-experience">
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
                            <br /> Vancouver, BC, Canada
                        </WorkSubTitle>
                    </WorkHeader>
                    <WorkDescription>
                    • Designed and implemented a <b>permanent ban feature</b> for an <b>anti-cheat 
                    application</b> used by teams to identify cheaters in <b>Call of Duty</b>, overcoming 
                    <b> API documentation gaps</b> and introducing a <b>retry mechanism</b> to ensure reliability,
                    significantly bolstering platform security. <br />
                    • Led the development of a <b>client crash reporting analytics system</b> during a PM’s
                    absence, collaborating with stakeholders to define <b>critical metrics and visualizations</b>. 
                    Utilized <b>SQL</b> to deliver actionable insights that enhanced game stability. <br />
                    • Maintained and enhanced a <b>company-wide data visualization tool</b> with <b>4.2K+ 
                    internal users</b>, assisting customers in building dashboards for diverse analytical needs.
                    Collaborated with a business manager to <b>deliver a tailored dashboard in just two days</b>,
                    earning <b>recognition</b> in the <b>studio's year-end review</b>. <br />
                    • Collaborated with the team to <b>optimize query performance</b> by creating a <b>SQL-driven analysis 
                    system</b>. <b>Identified poorly performing queries</b> and <b>implemented GCP Cloud Scheduler jobs</b> with 
                    daily and weekly schedules using <b>Python scripts</b> to prevent their repeated execution, contributing 
                    to a <b>50% reduction</b> in query runner <b>costs</b>. <br />
                    • Enhanced <b>ElasticSearch functionality</b> for the Data QA automation tool, improving <b>search 
                    precision</b> and <b>efficiency</b>.<br />
                    </WorkDescription>
                    <WorkHeader>
                        <WorkLogo src={activisionLogo} alt="Activision Logo" />
                        <WorkTitle>
                            <strong>Computer Animation Tutor</strong>
                            <br /> @ Look4 Education Group • Part-time
                        </WorkTitle>
                        <WorkSubTitle>
                            <strong>Sep 2022 - Aug 2024 • 2 yr</strong>
                            <br /> Vancouver, BC, Canada
                        </WorkSubTitle>
                    </WorkHeader>
                    <WorkDescription>
                    • Led <b>group tutoring sessions</b> on <b>computer animation</b> and <b>OpenGL pipeline</b>, modeled 
                    after <b>CPSC 314</b>, a <b>university level (300-level)</b> computer graphics course. Topics 
                    included <b>real-time rendering</b>, <b>transformation matrices</b>, <b>shader programming</b>, and  
                    <b> 3D graphics</b>. <br />
                    • Developed and implemented a <b>customized curriculum</b> that balanced <b>theory</b> with 
                    <b> hands-on projects</b>, enabling students to design and build functional <b>3D animation 
                    systems</b>. <br />
                    • Mentored <b>more than 50 students</b>, with <b>over 90% achieving grades of A or higher</b>, 
                    reflecting the program’s academic rigor and effective teaching methods. <br />
                    • Received consistent <b>high ratings</b> for teaching effectiveness, curriculum clarity, 
                    and fostering student engagement. <br />
                    </WorkDescription>
                </Fade>
            </WorkSection>
            <Fade>
                <Divider />
            </Fade>
            <Fade top>
                <StyledTitle as="h2" id="skills">
                    Skills
                </StyledTitle>
            </Fade>
            <Fade bottom>
                <SkillCarousel skills={skills} isLightTheme={isLightTheme} />
            </Fade>
            <Fade>
                <Divider />
            </Fade>
            <StyledPageWrapper>
                <Section>
                    <Fade top>
                        <StyledTitle as="h2" id="projects">
                            Recent Projects
                        </StyledTitle>
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
                    <StyledTitle as="h2" id="posts">
                        Recent Posts
                    </StyledTitle>
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
