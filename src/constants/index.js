import siren_script from "../assets/siren_script.png";
import forex from "../assets/Forex.png";
import peckish from "../assets/peckish.png";

export const ABOUT = `Hello! I’m Abhinav, a Perth based software engineer with a dual degree 
in Software Engineering and Data Science from the University of Western Australia. I excel in Python, R, and have a 
deep passion for machine learning and data engineering. My professional experience includes impactful roles at Gold Fields and Fortescue Metals Group,
where I enhanced my skills in data analysis and predictive modeling. Beyond work, I'm a relentless problem solver and eager learner. Projects like SirenScript
and Facial ID and Document Scanner showcase my commitment to leveraging technology for real-world solutions. Take a look at my portfolio to see my work, and feel 
free to reach out if you’re interested in a collaboration or just want to connect!

`
export const HERO = `Studying software engineering by chance but making it my passion by choice. I am a software engineer who has worked on a variety of projects, from machine learning to UI/UX design. I am passionate about using technology to solve real-world problems and am always looking for new opportunities to learn and grow.`


export const PROJECTS = [

    {
        title: "Peckish",
        image: peckish,
        description: "A food recommendation app that uses machine learning to suggest recipes based on user preferences. Developed the backend with Flask and the frontend with React. Click on image for live demo",
        technologies: ["Python", "React", "Flask", "SupaBase"],
        link: "https://peckish-ai.vercel.app/",
    },
    {
        title: "SirenScript",
        image: siren_script,
        description: `A machine learning and UI/UX project revolved around transcribing and summarizing 
        emergency calls for first responders. Achieved 93% accuracy on detecting critical information.`,
        technologies: ["Python", "Machine Learning", "UI/UX Design"],

    },
    {
        title: "Facial ID and Document Scanner",
        image: forex,
        description: "A Know Your Customer program that helped the client verify user identity with 99% accuracy using facial recognition. Used Python in the backend and integrated with the client’s frontend.",
        technologies: ["Python", "Facial Recognition", "Document Scanning"],
    },

];

export const EXPERIENCES = [
    {
        year: "May 2024 - Present",
        role: "Prompt Engineer, Data Annotation",
        company: "DataAnnotation.tech",
        description: "Specialized in enhancing the performance of AI models by optimizing code and comparing different model structures. Contributed to AI technology advancement in a remote work environment.",
        technologies: ["Python", "React", "C++"],
    },
    {
        year: "Jul 2023 - Feb 2024",
        role: "Software Data Analyst",
        company: "Gold Fields",
        description: "Developed and implemented a sophisticated flight schedule modeling system using tools such as NumPy, Pandas, and Matplotlib. Achieved a 33% reduction in labor-hours lost through optimized flight selection.",
        technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Simulations"],
    },
    {
        year: "Nov 2022 - Mar 2023",
        role: "Data Engineer",
        company: "Fortescue Metals Group",
        description: "Developed a machine learning model to predict pulley failures with 93% accuracy using Python Scikit. Conducted data preprocessing and feature engineering to optimize model performance.",
        technologies: ["Python", "Scikit", "Matplotlib", "SQL"],
    },
    {
        year: "Jan 2021 - Jan 2023",
        role: "Head Teacher",
        company: "Code Camp",
        description: "Taught coding fundamentals to students, fostering problem-solving and logical thinking. Managed classes of 15-20 students, tracking progress and providing actionable feedback.",
        technologies: ["JavaScript", "Python"],
    }

];

export const PROMPT = ` Name = Abhinav Rajaram

DOB = 22/10/2002
Age = 21

Resume = Software engineer with excellent communication and people skills seeking internship opportunities
 
EDUCATION
Master of Professional Engineering, specializing in software	Jan 2024 – Nov 2025
University of Western Australia, Current Weighted Average Mark: 77
Bachelor of Software Engineering & Bachelor of Data Science	Jan 2021 – Nov 2023
University of Western Australia, Weighted Average Mark: 75

Highshcool: Perth Modern School	Jan 2015 – Nov 2020
 
SKILLS AND STRENGTHS
Programming Languages Python, C++, R, SQL, Flask
Software Development Data structures and algorithms, Object-Oriented Programming, Docker
Machine learning Neural Networks, Libraries (SciKit and TensorFlow), Transformers, Hugging Face
Database Neo4j (graph databases) SQL (relational databases) Snowflake and Databricks (data analytics and processing)
 
PROJECTS
SirenScript
A machine learning and UI/UX project revolved around transcribing and summarizing emergency calls for first responders. 93% accuracy on detecting critical information.
Facial ID and Document Scanner
A Know Your Customer program that helped the client verify user identity with 99% accuracy using facial recognition. Used python in the backend and integrated with the client’s frontend.
Uni Assists
Designed and executed a user-centric frontend with seamless usability and rich features using Python for the backend and JavaScript for the frontend. Led the team of designers and developers and ensured seamless integration.
 
WORK EXPERIENCE
Software Data Analyst, Gold Fields	Jul 2023 – Feb 2024
Developed and implemented a sophisticated flight schedule modeling system that integrates diverse flight schedules and employee needs using tools such as NumPy, Pandas, and Matplotlib. The system achieved 33% reduction in labor-hours lost through optimized flight selection.
Data Engineer, Fortescue Metals Group	Nov 2022 – Mar 2023
Developed a machine learning model using Python Scikit and trained it on vibration data to predict pulley failures with 93% accuracy. Implemented neural networks, ridge regression, linear regression, and other algorithms to analyze data and conducted data preprocessing and feature engineering to optimize model performance.
Head Teacher, Code Camp	Jan 2021 – Jan 2023
Taught coding fundamentals using block coding and JavaScript and helped develop problem solving and logical thinking. Fostered a learning environmental and encouraged collaborative learning by scholastically managing classes of 15-20 students. Tracked progress and provided actionable feedback for development.
Prompt Engineer, Data Annotation	May 2024 – Present
As an AI Model Improvement Specialist and Prompt Engineer at DataAnnotation.tech, I specialize in enhancing the performance of AI models by comparing and optimizing code. My role involves applying advanced technical skills in addition to my knowledge about different AI models to develop and implement improvements, ensuring the models operate efficiently. Working in a flexible, remote environment, I contribute to the continuous advancement of AI technology, driving innovation and excellence in the field.

HOBBIES
Basketball, Gym, Video Games


You are an information KIOSK that only answers questions about Abhinav. 

If you are asked something you can not answer respond with "Unfortunately, I do not have that information. Please feel free to message Abhinav he has the time"

If you are asked something thats not related to Abhinav respond with "I am sorry, I can only answer questions about Abhinav"

Do not preface you're response with "I am happy to help you with that" or "I am sorry" or "I am sorry, I can only answer questions about Abhinav" or "Unfortunately, I do not have that information. Please feel free to message Abhinav he has the time"

Here is the prompt for the chatbot:
`
