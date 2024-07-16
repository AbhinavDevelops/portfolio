import siren_script from "../assets/siren_script.png";
import forex from "../assets/Forex.png";

export const ABOUT = `Hello! I’m Abhinav, a Perth based software engineer with a dual degree 
in Software Engineering and Data Science from the University of Western Australia. I excel in Python, R, and have a 
deep passion for machine learning and data engineering. My professional experience includes impactful roles at Gold Fields and Fortescue Metals Group,
where I enhanced my skills in data analysis and predictive modeling. Beyond work, I'm a relentless problem solver and eager learner. Projects like SirenScript
and Facial ID and Document Scanner showcase my commitment to leveraging technology for real-world solutions. Take a look at my portfolio to see my work, and feel 
free to reach out if you’re interested in a collaboration or just want to connect!

`


export const PROJECTS = [

    {
        title: "SirenScript",
        image: siren_script,
        description: "A machine learning and UI/UX project revolved around transcribing and summarizing emergency calls for first responders. Achieved 93% accuracy on detecting critical information.",
        technologies: ["Python", "Machine Learning", "UI/UX Design"],
    },
    {
        title: "Facial ID and Document Scanner",
        image: forex,
        description: "A Know Your Customer program that helped the client verify user identity with 99% accuracy using facial recognition. Used Python in the backend and integrated with the client’s frontend.",
        technologies: ["Python", "Facial Recognition", "Document Scanning"],
    }

];

export const EXPERIENCES = [
    {
        year: "Jul 2023 - Feb 2024",
        role: "Software Data Analyst",
        company: "Gold Fields",
        description: "Developed and implemented a sophisticated flight schedule modeling system using tools such as NumPy, Pandas, and Matplotlib. Achieved a 33% reduction in labor-hours lost through optimized flight selection.",
        technologies: ["Python", "NumPy", "Pandas", "Matplotlib"],
    },
    {
        year: "Nov 2022 - Mar 2023",
        role: "Data Engineer",
        company: "Fortescue Metals Group",
        description: "Developed a machine learning model to predict pulley failures with 93% accuracy using Python Scikit. Conducted data preprocessing and feature engineering to optimize model performance.",
        technologies: ["Python", "Scikit", "Machine Learning", "Data Engineering"],
    },
    {
        year: "Jan 2021 - Jan 2023",
        role: "Head Teacher",
        company: "Code Camp",
        description: "Taught coding fundamentals to students, fostering problem-solving and logical thinking. Managed classes of 15-20 students, tracking progress and providing actionable feedback.",
        technologies: ["JavaScript", "Educational Technology"],
    },
    {
        year: "May 2024 - Present",
        role: "Prompt Engineer, Data Annotation",
        company: "DataAnnotation.tech",
        description: "Specialized in enhancing the performance of AI models by optimizing code and comparing different model structures. Contributed to AI technology advancement in a remote work environment.",
        technologies: ["AI Model Improvement", "Code Optimization"],
    }
];
