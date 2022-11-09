/* eslint-disable no-undef */
db.homePage.insertOne({
    name: "Robert Gordon",
    job: "Full Stack Software Developer",
    who: "I am a Full Stack Software Developer with a passion for technology, solving problems and helping others",
    what: [
        "Track record of delivering high quality project results to various employers and managers",
        "Detail-oriented professional with advanced technical and leadership training, skilled at motivating teams to perform at their best to accomplish organizational goals and vision",
        "Proven ability to manage and supervise teams and direct day-to-day work activity.",
        "Passion for learning and collaborating with cross-functional teams to deliver high quality products."
    ],
    work: "These projects show below are my proudest moments so far as a Software Developer where I worked either on a team or solo to create a polished project.",
    looking: {
        lookingFor: [
            "FullStack Software Engineer",
            "FullStack Web Developer",
            "Frontend Software Engineer",
            "React.js Developer",
            "JavaScript Developer"
        ],
        technologies: [
            "Game Development",
            "Mobile App Development",
            "Web Development",
            "Machine Learning / A.I.",
            "AR/VR"
        ],
        companies: [
            "Amazon",
            "Google",
            "Meta",
            "Netflix",
            "Visa",
            "Square",
            "Adobe",
            "IBM",
            "MongoDB",
            "Airtable",
            "Disney",
            "Forbes",
            "TikTok",
            "Epic Games",
            "and many more..."
        ]
    }
});

db.projects.insert({
    typeOf: "Team",
    name: "Tech Port",
    img: "https://camo.githubusercontent.com/5a0b6cde1438105af2f5247ac001977d40c18ff0c0392012ab7b2d2eeae7fa44/68747470733a2f2f64377674653276396c346471642e636c6f756466726f6e742e6e65742f74656368706f72745f6c6f67696e706167652e6a7067",
    techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
    ],
    url: "https://techport-m8h0.onrender.com",
    gitHub: "https://github.com/Team-Cache-Out/tech-port",
    description: "Tech Port is a ticket management system that provides the ability to serve multiple universities and keep track of their maintenance needs. This technology gives the admin team the oversight to control each campus and to track their progress through maintenance issues. It also gives each technician a portal in which they can see the campus tickets that have been opened by the admin team. They can track their progress through the tickets they are assigned, as well as provide feeback throughout the process.",
    likes: 0,
    comments: {}
},
    {
        typeOf: "Team Project",
        name: "FindLuv",
        img: "https://user-images.githubusercontent.com/96712943/192342337-f6804935-a2eb-4be4-8791-b88fdbbfe0de.jpg",
        techStack: [
            "React.js",
            "BootstrapCSS",
            "Node.js",
            "Express.js",
            "PostgreSQL"
        ],
        url: "https://find-luv.onrender.com",
        gitHub: "https://github.com/bobbygrdn/dating-app",
        description: "A Full-Stack Dating Application built using React. Full matching system, messaging system and user authentication system.",
        likes: 0,
        comments: {}
    },
    {
        typeOf: "Personal Project",
        name: "For-The-Love-of-Film",
        img: "https://user-images.githubusercontent.com/96712943/192338743-fa446254-f482-4b6f-9651-38efa7be5cf1.jpg",
        techStack: [
            "JavaScript",
            "HTML5",
            "CSS",
            "jQuery.js",
            "express.js"
        ],
        url: "https://bobbygrdn.github.io/For-The-Love-of-Film/",
        gitHub: "https://github.com/bobbygrdn/For-The-Love-of-Film",
        description: "A Front-End app that helps locate new and interesting movies and T.V. shows to watch. Simple design that takes in user input and searches the TV Maze API for related shows.",
        likes: 0,
        comments: {}
    });
db.accomplishments.insert({
    type: "Certificate Course",
    status: "Complete",
    title: "Galvanize Fort Hood Web Development Immersive",
    img: "https://github.com/bobbygrdn/dating-app/files/9955271/Galvanize.Graduation.Certificate.pdf",
    topics: [
        "Full-Stack Development",
        "JavaScript",
        "HTML",
        "CSS",
        "React.js",
        "Node.js",
        "Express.js",
        "Git",
        "PostgreSQL",
        "Agile Methodologies"
    ],
    description: "A 19 week software engineering immersive program with over 1000+ hours of coding."
},
    {
        type: "Certificate Course",
        status: "Complete",
        title: "Fortinet NSE 1 Network Security Associate",
        img: "",
        topics: [
            "Bad Actors",
            "Data Security Perspectives",
            "Password Perspectives",
            "Internet Security Perspectives",
            "Insider Threat Perspectives"
        ],
        description: "The Information Security Awareness course explores real cyber threats that pose a danger to you and me. The course offers measures that you can take to protect yourself and others from harm. It also explains basic terms and concepts that will help you in your journey to better understand cybersecurity."
    },
    {
        type: "Certificate Course",
        status: "Complete",
        title: "Fortinet NSE 2 Network Security Associate",
        img: "https://github.com/bobbygrdn/dating-app/files/9955502/Fortinet.NSE.2.pdf",
        topics: [
            "Cloud Security",
            "Endpoint Security",
            "Firewall",
            "Network Access Control",
            "Sandbox",
            "SASE",
            "SD-WAN",
            "Secure Email Gateway",
            "Security Information & Event Management",
            "SOAR",
            "Threat Intelligence Services",
            "Web Application Firewall",
            "Web Filter",
            "Wi-Fi",
            "ZTNA"
        ],
        description: "In this course, The Evolution of Cybersecurity, you will learn about the types of security products that have been created by security vendors to address those problems."
    },
    {
        type: "Certificate Course",
        status: "Complete",
        title: "Fortinet NSE 3 Network Security Associate",
        img: "https://github.com/bobbygrdn/dating-app/files/9955504/Fortinet.NSE.3.pdf",
        topics: [
            "Security Fabric",
            "Security-Driven Networking",
            "Zero Trust Access",
            "Adaptive Cloud Security",
            "Security Operations"
        ],
        description: "This training course helps you learn about Fortinet products and understand the problems they solve."
    },
    {
        type: "Certificate Course",
        status: "Complete",
        title: "Google Technical Support Fundamentals",
        img: "https://github.com/bobbygrdn/bobbygrdn/files/9955563/Google.Technical.Support.Fundamentals.pdf",
        topics: [
            "Introduction to IT",
            "Hardware",
            "Operating Systems",
            "Networking",
            "Software",
            "Troubleshooting"
        ],
        description: "This course is the first of a series that aims to prepare you for a role as an entry-level IT Support Specialist. In this course, you will be introduced to the world of Information Technology, or IT. You will learn about the different facets of Information Technology, like computer hardware, the Internet, computer software, troubleshooting, and customer service."
    },
    {
        type: "Certificate Course",
        status: "In Progress",
        title: "Google Bits and Bytes of Computer Networking",
        img: "",
        topics: [
            "Introduction to Networking",
            "The Network Layer",
            "The Transport and Application Layers",
            "Networking Services",
            "Connecting to the Internet",
            "Troubleshooting and the Future of Networking"
        ],
        description: "This course is designed to provide a full overview of computer networking. We will cover everything from the fundamentals of modern networking technologies and protocols to an overview of the cloud to practical applications and network troubleshooting."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google Operating Systems and You: Becoming a Power User",
        img: "",
        topics: [
            "Navigating the System",
            "Users and Permissions",
            "Package and Software Management",
            "Filesystems",
            "Process Management",
            "Operating Systems in Practice"
        ],
        description: "In this course, through a combination of video lectures, demonstrations, and hands-on practice, you will learn about the main components of an operating system and how to perform critical tasks like managing software and users, and configuring hardware."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google System Administration and IT Infrastructure Services",
        img: "",
        topics: [
            ""
        ],
        description: "This course will transition you from working on a single computer to an entire fleet. Systems administration is the field of IT that is responsible for maintaining reliable computers systems in a multi-user environment. In this course, you will learn about the infrastructure services that keep all organizations, big and small, up and running. We will deep dive on cloud so that you will understand everything from typical cloud infrastructure setups to how to manage cloud resources. You'll also learn how to manage and configure servers and how to use industry tools to manage computers, user information, and user productivity. Finally, you will learn how to recover your organizations IT infrastructure in the event of a disaster."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google IT Security: Defense against the Digital Dark Arts",
        img: "",
        topics: [
            "What is System Administration?",
            "Network and Infrastructure Services",
            "Software and Platform Services",
            "Directory Services",
            "Data Recovery & Backups",
            "Final Project"
        ],
        description: "This course covers a wide variety of IT security concepts, tools, and best practices. It introduces threats and attacks and the many ways they can show up. Wewill give you some background of encryption algorithms and how they are used to safeguard data. Then, we will dive into the three As of information security: authentication, authorization, and accounting. We will also cover network security solutions, ranging from firewalls to Wifi encryption options. The course is rounded out by putting all these elements together into a multi-layered, in-depth security architecture, followed by recommendations on how to integrate a culture of security into your organization or team."
    },
    {
        type: "Certificate Course",
        status: "Complete",
        title: "Meta Introduction to Front-End Development",
        img: "https://github.com/bobbygrdn/bobbygrdn/files/9955565/Meta.Introduction.to.Front-End.Development.pdf",
        topics: [
            "Basic Web Development",
            "HTML & CSS",
            "UI Frameworks"
        ],
        description: "This course is a good place to start if you want to become a web developer. You will learn about the day-to-day responsibilities of a web developer and get a general understanding of the core and underlying technologies that power the internet. You will learn how front-end developers create websites and applications that work well and are easy to maintain. You’ll be introduced to the core web development technologies like HTML and CSS and get opportunities to practice using them. You will also be introduced to modern UI frameworks such as Bootstrap and React that make it easy to create interactive user experiences. "
    },
    {
        type: "Certificate Course",
        status: "Complete",
        title: "Meta Programming with JavaScript",
        img: "https://github.com/bobbygrdn/bobbygrdn/files/9955566/Meta.Programming.with.JavaScript.pdf",
        topics: [
            "Introduction to JavaScript",
            "The Building Blocks of a Program",
            "Programming Paradigms",
            "Testing"
        ],
        description: "You will learn the basic concepts of web development with JavaScript. You will work with functions, objects, arrays, variables, data types, the HTML DOM, and much more. You will learn how to use JavaScript and discover interactive possibilities with modern JavaScript technologies. Finally, you will learn about the practice of testing code and how to write a unit test using Jest."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Meta Version Control",
        img: "",
        topics: [
            "Software Collaboration",
            "Command Line",
            "Working with Git",
            "Graded Assessment"
        ],
        description: "Learn how modern software developers collaborate across the world without messing up each other's code. You will look at the different version control systems and how to create an effective software development workflow. You will be introduced to some of the most commonly used Linux commands that you can use to work with files on your hard drive and create powerful workflows that will automate your work, saving you time and effort."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Meta HTML and CSS in depth",
        img: "",
        topics: [
            "HTML in depth",
            "Interactive CSS",
            "Graded Assessment"
        ],
        description: "In this course, you will use software development tools like HTML to build attractive web pages that work well—and you will use structured semantic data to control how websites appear to the end user. You will then dive deeper into CSS by applying increasingly specific styling to various elements. You will learn to use Bootstraps grid system to create layouts and work with components and themes. Finally, you will explore debugging and learn how it can be utilized to banish common front-end errors."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Meta React Basics",
        img: "",
        topics: [
            "React Components",
            "Data and State",
            "Navigation, Updating and Assets in React.js",
            "Your first React App"
        ],
        description: "React is a powerful JavaScript library that you can use to build user interfaces for web and mobile applications (apps). In this course, you will explore the fundamental concepts that underpin the React library and learn the basic skills required to build a simple, fast, and scalable app."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Meta Advanced React",
        img: "",
        topics: [
            "Components",
            "React Hooks and Custom Hooks",
            "JSX and testing",
            "Graded Assessment"
        ],
        description: "Learn how to use more advanced React concepts and features, optimize and debug your React applications, and become proficient in using React Bootstrap and JSX. You will examine different types of React components, learn various characteristics and when to use them. You will start working with hooks, effects and other functional components. You will find out how routing is used in React to customize the users' experience, you will create a web application that consumes API data, and you'll get familiar with the most commonly used React framework integrations, tools, and debugging approaches."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Meta Principles of UX/UI Design",
        img: "",
        topics: [
            "Introduction to UX/UI Design",
            "Evaluating Interactive Design",
            "Applied Design Fundamentals",
            "Designing your UI",
            "Course Summary and Final Assessment"
        ],
        description: "Learn the fundamentals of User Experience (UX) research and design. Become immersed in the UX process of identifying problems and iterating and testing designs to find appropriate solutions. You will learn how to empathize with users through best-practice research approaches, and create common UX artifacts such as user personas. And you will use UX insights to make appropriate design decisions. By utilizing the User Interface (UI) design process, you will be able to create wireframes for features in Figma, and turn them into Minimum Viable Product (MVP) style prototypes from your mockups. You will also learn the core principles of design such as hierarchy and the use of grids."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Meta Front-End Developer Capstone",
        img: "",
        topics: [
            "Capstone Project"
        ],
        description: "The Capstone project enables you to demonstrate multiple skills from the Certificate by solving an authentic real-world problems. This course will test your knowledge and understanding, and provide you with a platform to show off your new abilities in front-end web development using React.  On completion of the Capstone project, you will have a job-ready portfolio that you can show to recruiters, demonstrate during interviews and impress potential future employers."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Meta Coding Interview Preparation",
        img: "",
        topics: [
            "Coding Interviews"
        ],
        description: "The final course in this program will help prepare you for the unique aspects of a coding job interview, with approaches to problem solving, computer science foundations and soft skills needed to land the job. You will gain strategic insights and tips for successful interviewing. And, you will have the opportunity to openly discuss the emotional components of the interview process with other learners taking this course."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google Foundations of Project Management",
        img: "",
        topics: [
            "Embarking on a career in Project Management",
            "Becoming an effective Project Manager",
            "The Project Management Life Cycle and Methodologies",
            "Organizational Structure and Culture"
        ],
        description: "This course is the first in a series of six to equip you with the skills you need to apply to introductory-level roles in project management. Project managers play a key role in leading, planning and implementing critical projects to help their organizations succeed. In this course, you will discover foundational project management terminology and gain a deeper understanding of  the role and responsibilities of a project manager. We will also introduce you to the kinds of jobs you might pursue after completing this program. Throughout the program, you will learn from current Google project managers, who can provide you with a multi-dimensional educational experience that will help you build your skills  for on-the-job application. "
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google Project Initiation: Starting a Successful Project",
        img: "",
        topics: [
            "Fundamentals of Project Initiation",
            "Defining Project goals, scope and success criteria",
            "Working effectively with stakeholders",
            "Utilizing resources and tools for project success"
        ],
        description: "This is the second course in the Google Project Management Certificate program. This course will show you how to set a project up for success in the first phase of the project life cycle: the project initiation phase. In exploring the key components of this phase, you will learn how to define and manage project goals, deliverables, scope, and success criteria. You will discover how to use tools and templates like stakeholder analysis grids and project charters to help you set project expectations and communicate roles and responsibilities. Current Google project managers will continue to instruct and provide you with hands-on approaches for accomplishing these tasks while showing you the best project management tools and resources for the job at hand."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google Project Planning: Putting It All Together",
        img: "",
        topics: [
            "Beginning the planning phase",
            "Building a project plan",
            "Managing budgeting and procurement",
            "Managing risks effectively",
            "Organizing communication and documentation"
        ],
        description: "This is the third course in the Google Project Management Certificate program. This course will explore how to map out a project in the second phase of the project life cycle: the project planning phase. You will examine the key components of a project plan, how to make accurate time estimates, and how to set milestones. Next, you will learn how to build and manage a budget and how the procurement processes work. Then, you will discover tools that can help you identify and manage different types of risk and how to use a risk management plan to communicate and resolve risks. Finally, you will explore how to draft and manage a communication plan and how to organize project documentation. Current Google project managers will continue to instruct and provide you with hands-on approaches for accomplishing these tasks while showing you the best project management tools and resources for the job at hand."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google Project Execution: Running the Project",
        img: "",
        topics: [
            "Introduction to project execution",
            "Quality management and continuous improvement",
            "Data-informed decision-making",
            "Leadership and influencing skills",
            "Effective project communication",
            "Closing a project"
        ],
        description: "This is the fourth course in the Google Project Management Certificate program. This course will delve into the execution and closing phases of the project life cycle. You will learn what aspects of a project to track and how to track them. You will also learn how to effectively manage and communicate changes, dependencies, and risks. As you explore quality management, you will learn how to measure customer satisfaction and implement continuous improvement and process improvement techniques. Next, you will examine how to prioritize data, how to use data to inform your decision making, and how to effectively present that data. Then, you will strengthen your leadership skills as you study the stages of team development and how to manage team dynamics. After that, you will discover tools that provide effective project team communication, how to organize and facilitate meetings, and how to effectively communicate project status updates. Finally, you will examine the steps of the project closing process and how to create and share project closing documentation. Current Google project managers will continue to instruct and provide you with hands-on approaches for accomplishing these tasks while showing you the best project management tools and resources for the job at hand."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google Agile Project Management",
        img: "",
        topics: [
            "The fundamentals of Agile",
            "Scrum 101",
            "Implementing Scrum",
            "Applying Agile in the organization"
        ],
        description: "This is the fifth course in the Google Project Management Certificate program. This course will explore the history, approach, and philosophy of Agile project management, including the Scrum framework. You will learn how to differentiate and blend Agile and other project management approaches. As you progress through the course, you will learn more about Scrum, exploring its pillars and values and comparing essential Scrum team roles. You will discover how to build, manage, and refine a product backlog, implement Agiles value-driven delivery strategies, and define a value roadmap. You will also learn strategies to effectively organize the five important Scrum events for a Scrum team, introduce an Agile or Scrum approach to an organization, and coach an Agile team. Finally, you will learn how to search for and land opportunities in Agile roles. Current Google project managers will continue to instruct and provide you with the hands-on approaches, tools, and resources to meet your goals."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google Capstone: Applying Project Management in the Real World",
        img: "",
        topics: [
            "Initiating a project",
            "Building out a project plan",
            "Maintaining quality",
            "Effective stakeholder communication"
        ],
        description: "In this final, capstone course of the Google Project Management Certificate, you will practice applying the project management knowledge and skills you have learned so far. We encourage learners to complete Courses 1-5 before beginning the final course, as they provide the foundation necessary to complete the activities in this course."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google Foundations of User Experience (UX) Design",
        img: "",
        topics: [
            "Introducing User Expreience Design",
            "Thinking like a UX designer",
            "Joining design sprints",
            "Integrating reserach into the design process"
        ],
        description: "Foundations of User Experience (UX) Design is the first of a series of seven courses that will equip you with the skills needed to apply to entry-level jobs in user experience design. UX designers focus on the interactions that people have with products like websites, mobile apps, and physical objects. UX designers make those everyday interactions usable, enjoyable, and accessible. The role of an entry-level UX designer might include empathizing with users, defining their pain points, coming up with ideas for design solutions, creating wireframes, prototypes, and mockups, and testing designs to get feedback."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google Start the UX Design Process: Empathize, Define, and Ideate",
        img: "",
        topics: [
            "Empathizing with users and defining pain points",
            "Creating user stories and user journey maps",
            "Defining user problems",
            "Ideating design solutions"
        ],
        description: "Start the UX design process: Empathize, Define, Ideate is the second course in a certificate program that will equip you with the skills needed to apply to entry-level jobs in user experience (UX) design. In this course, you will complete the first phases of the design process for a project that you will be able to include in your portfolio. You will learn how to empathize with users and understand their pain points, define user needs using problem statements, and come up with lots of ideas for solutions to those user problems. "
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google Build Wireframes and Low-Fidelity Prototypes",
        img: "",
        topics: [
            "Storyboarding and wireframing",
            "Creating paper and digital wireframes",
            "Building low-fidelity prototypes"
        ],
        description: "Build Wireframes and Low-Fidelity Prototypes is the third course in a certificate program that will equip you with the skills you need to apply to entry-level jobs in user experience (UX) design. In this course, you will continue to design a mobile app for your professional UX portfolio. You will start by creating storyboards and getting familiar with the basics of drawing. Then, you'll create paper wireframes and digital wireframes using the design tool Figma. You will also create a paper prototype and a digital low-fidelity prototype in Figma. "
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google Conduct UX Research and Test Early Concepts",
        img: "",
        topics: [
            "Planning UX research studies",
            "Conducting research with usability studies",
            "Analyzing and synthesizing research results",
            "Sharing research insights for better designs"
        ],
        description: "Conduct UX Research and Test Early Concepts is the fourth course in a certificate program that will equip you with the skills you need to apply to entry-level jobs in user experience (UX) design. In this course, you will learn how to plan and conduct a usability study to gather feedback about designs. Then, you will modify your low-fidelity designs based on insights from your research."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google Create High-Fidelity Designs and Prototypes in Figma",
        img: "",
        topics: [
            "Starting to create mockups",
            "Applying visual design principles to mockups",
            "Exploring design systems",
            "Participating in design critique sessions",
            "Creating high-fidelity prototypes",
            "Testing and iterating on designs"
        ],
        description: "Create High-Fidelity Designs and Prototypes in Figma is the fifth course in a certificate program that will equip you with the skills you need to apply to entry-level jobs in user experience (UX) design. In this course, you will follow step-by-step tutorials to learn how to create high-fidelity designs, called mockups, in Figma, a popular design tool. Then, you will turn those designs into an interactive prototype that works like a finished product. You will conduct research to collect feedback about your designs and make improvements. Finally, you will learn how to share your designs with development teams and highlight your work in your professional UX portfolio."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google Responsive Web Design in Adobe XD",
        img: "",
        topics: [
            "Empathize with the user and define the user problem",
            "Ideate solutions to the users problem",
            "Create wireframes",
            "Create and test a low-fidelity prototype",
            "Create and test a high-fidelity prototype",
            "Document design work and search for jobs"
        ],
        description: "Responsive Web Design in Adobe XD is the sixth course in a program that will equip you with the skills you need to apply to entry-level jobs in user experience (UX) design. In this course, you will design a responsive website using Adobe XD, a popular design tool. You will complete the design process from beginning to end: empathizing with users, defining their pain points, coming up with ideas for design solutions, creating wireframes and prototypes, and testing designs to get feedback. By the end of this course, you will have a new design project to include in your professional UX portfolio."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Google Design a User Experience for Social Good & Prepare for Jobs",
        img: "",
        topics: [
            "Starting the UX design process: empathize, define, ideate",
            "Creaing wireframes and low-fidelity prototypes",
            "Creating mockups and high-fidelity prototypes",
            "Designing a complementary responsive website",
            "Building a professional presence",
            "Finding a UX job"
        ],
        description: "Design a User Experience for Social Good and Prepare for Jobs is the seventh and final course in a program that will equip you with the skills you need to become an entry-level UX designer. In this course, you will design a dedicated mobile app and a responsive website focused on social good. You will showcase all that you have learned during the certificate program to complete the design process from beginning to end: empathizing with users, defining their pain points, coming up with ideas for design solutions, creating wireframes and prototypes, and testing designs to get feedback. By the end of this course, you will have a new cross-platform design project to include in your professional UX portfolio. "
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Meta Introduction to Mobile Development",
        img: "",
        topics: [
            "Mobile Applications",
            "Introduction to HTML and CSS",
            "React and React Native",
            "Course Summary and Graded Assessment"
        ],
        description: "If you want to become a mobile developer, this course is a good place to start. You will learn about the day-to-day responsibilities of web and mobile developers and get a general understanding of the core and underlying technologies that power the internet. You will be introduced to core technologies like HTML and CSS, and get opportunities to practice using them."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Meta React Native",
        img: "",
        topics: [
            "Introduction to React Native",
            "Lists and Text Input in React Native",
            "Pressable, Images and Hooks in React Native",
            "React Navigation",
            "Final Project Assessment"
        ],
        description: "React Native is an open-source framework for building cross-platform applications (apps) using React and the platforms native capabilities. In this course, you will move from the basics of React to a more advanced implementation using React Native. You will review a wide range of different React components and ways of styling them. And you will get to practice using different mobile methods of interactivity with React Native."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Meta Mobile Architecture",
        img: "",
        topics: [
            "Mobile Architecture"
        ],
        description: "Explore the fundamental concepts behind mobile architecture such as layers, data flows, performance and components versus containers. Mobile architecture is a group of patterns and techniques that developers use to build a fully structured mobile application (app). Get a deeper understanding of how mobile devices handle the data from React Native. Soon, you will build your own data rich components."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Meta Working with Data",
        img: "",
        topics: [
            "Working with Data"
        ],
        description: "Start building applications (apps) that connect to data sources. Learn how client-server communications work and practice reaching out to external data sources with requests for data. You will apply techniques for working with APIs by building simple apps that use data."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Meta Software Development Practices",
        img: "",
        topics: [
            "Software Development Practices"
        ],
        description: "As you prepare to become a professional mobile developer, you need to have a basic understanding of other industry standard software development practices. In this course, you will explore some of those processes and best practices in software development such as application lifecycle, infrastructure, testing, Agile/scrum development, how projects are estimated and tracked, as well as specialized tools."
    },
    {
        type: "Certificate Course",
        status: "Backlog",
        title: "Meta Capstone (React App)",
        img: "",
        topics: [
            "Capstone Project"
        ],
        description: "Welcome to the Capstone project! This project enables you to demonstrate multiple skills from this Certificate by solving an authentic real-world problem. This course will test your knowledge and understanding in mobile development using React Native. On completion of the Capstone project, you will have a job-ready portfolio that you can show to recruiters, demonstrate during interviews and impress potential employers."
    });
db.myJourney.insert({
    year: 2009,
    event: "Enlisted in the United States Marine Corps",
    location: "San Diego, California",
    jobTitle: "Marine",
    description: "Attended Marine Corps boot camp at the Marine Corps Recruit Depot, attended Marine Combat Training at Camp Pendleton and attended Field Artillery Radar Operators Course in Fort Sill, Oklahoma."
},
    {
        year: 2010,
        event: "12th Marine Regiment",
        location: "Okinawa, Japan",
        jobTitle: "Field Artillery Radar Operator",
        description: "Arrived at my first duty station in the middle of 2010. Promoted to the rank of Lance Corporal. Participated in training events across Asia in Seoul, South Korea, Fuji, Japan, Ojojihara, Japan."
    },
    {
        year: 2012,
        event: "11th Marine Regiment",
        location: "Camp Pendleton, California",
        jobTitle: "Field Artillery Radar Operator",
        description: "Arrived at my second duty station at the end of 2012. Promoted to the rank of Corporal. Given the new billet of Radar Team Leader."
    },
    {
        year: 2013,
        event: "Combat Deployment Operation Enduring Freedom",
        location: "Helman Province, Afghanistan",
        jobTitle: "Lightweight Counter Mortar Radar Operator/Security Specialist",
        description: "Arrived in Afghanistan in the middle of 2013. Promoted to the rank of Sergeant. Lead the fight in Forward Operating Base Shukvani as the security specialist."
    },
    {
        year: 2014,
        event: "11th Marine Regiment",
        location: "Camp Pendleton, California",
        jobTitle: "Target Processing Team Chief",
        description: "Arrived back in Camp Pendleton in the beginning of 2014. Led the Target Processing Center for the Regiment that coordinates artillery fire to support the regiments movements and its friendly units during live fire exercises."
    },
    {
        year: 2014,
        event: "Deployment Military Liason",
        location: "Wellington, New Zealand",
        jobTitle: "LCMR Specialist/Military Liason",
        description: "Participated in the multi-national military exercise as the Marine Corps military liason to the New Zealand Army."
    },
    {
        year: 2015,
        event: "Marine Security Guard School",
        location: "Quantico, Virginia",
        jobTitle: "Marine Security Guard Student",
        description: "Learned the security measures, technology and equipment used in embassies and consulates worldwide by Marine Security Guards. Learned the Department of State Defensive Tactics and security training to properly defend embassies, consulates and dignitaries from attack or harm."
    },
    {
        year: 2016,
        event: "United States Embassy Bamako",
        location: "Bamako, Mali, Africa",
        jobTitle: "Marine Security Guard",
        description: "Arrived at the U.S. Embassy in Bamako, Mali and assumed the billet of Operations NCO. Promoted to the rank of Staff Sergeant. Given the billet of Assistant Senior Manager. Worked side by side with the Department of State Regional Security Office, the Central Intelligence Agency, the Federal Bureau of Investigation, the Special Program for Embassy Augmentation and Response (S.P.E.A.R.) Team and the Malian National Guard."
    },
    {
        year: 2017,
        event: "United States Embassy Gaborone",
        location: "Gaborone, Botswana, Africa",
        jobTitle: "Assistant Senior Manager",
        description: "Worked side by side with the Department of State Regional Security Office to protect the embassy and enhance the security posture for U.S. dignitaries."
    },
    {
        year: 2018,
        event: "United States Consulate General Frankfurt",
        location: "Frankfurt, Germany",
        jobTitle: "Assistant Senior Manager",
        description: "Worked side by side with the Department of State Regional Security Office to protect the embassy and enhance the security posture for U.S. dignitaries. Orchastrated the annual Marine Corps Birthday Ball celebration."
    },
    {
        year: 2019,
        event: "11th Marine Regiment",
        location: "Camp Pendleton, California",
        jobTitle: "Radar Platoon Senior Manager",
        description: "Led the Radar Platoon and provided technical oversight for programs associated with business processes, resource management, organizational analysis, systems management, strategic planning, and leadership; initiated appropriate courses of action, priorities, resource requirements, and equipment and personnel allocations necessary to accomplish organizational objectives "
    },
    {
        year: 2019,
        event: "Operations Manager Course",
        location: "Fort Sill, Oklahoma",
        jobTitle: "Operations Manager Course Student",
        description: "Attended the Operations Manager Course and was given the certification of Operations Manager."
    },
    {
        year: 2019,
        event: "1st Battalion, 11th Marine Regiment",
        location: "Camp Pendleton, California",
        jobTitle: "Bravo Battery Operations Manager",
        description: "Maintained and supervised the accountability, training, mentoring, and holistic professional development of over 60 Marines with different Marine Occupation Specialties to ensure a heightened state of readiness of the company personnel. Supervised and instructed over 90 hours of training for the Fire Direction Control Center to enhance the capabilities of the company for live fire exercises."
    },
    {
        year: 2020,
        event: "1st Battalion, 11th Marine Regiment",
        location: "Camp Pendleton, California",
        jobTitle: "Assistant Battalion Operations Manager",
        description: "Hand selected to become the Assistant Battalion Operations Manager for 1st Battalion, 11th Marine Regiment. Coordinated and supervised technical, administrative, and training requirements for the Battalion ensuring a 100% compliance rating. Provided technical oversight for programs associated with business processes, resource management, organizational analysis, systems management, strategic planning, and leadership"
    },
    {
        year: 2021,
        event: "1st Battalion, 11th Marine Regiment",
        location: "Camp Pendleton, California",
        jobTitle: "Charlie Battery Operations Manager",
        description: "Hand selected to become the Charlie Battery Operations Manager. Maintained and supervised the accountability, training, mentoring, and holistic professional development of over 60 Marines with different Marine Occupation Specialties to ensure a heightened state of readiness of the company personnel. Supervised and instructed over 90 hours of training for the Fire Direction Control Center to enhance the capabilities of the company for live fire exercises."
    },
    {
        year: 2021,
        event: "11th Marine Regiment Target Acquisition Platoon",
        location: "Camp Pendleton, California",
        jobTitle: "Radar Platoon Operations Manager",
        description: "Hand selected to become the Radar Platoon Operations Manager for Target Acquisition Platoon. Provided technical oversight for programs associated with business processes, resource management, organizational analysis, systems management, strategic planning, and leadership; initiated appropriate courses of action, priorities, resource requirements, and equipment and personnel allocations necessary to accomplish organizational objectives. Provided oversight and aggressive guidance on all aspects of the Radar section training schedule; enhancing the overall readiness of the platoon. Instituted the Target Acquisition Platoon information infrastructure on Microsoft Teams to enhance the platoon leadership's productivity, communication, and efficiency."
    },
    {
        year: 2021,
        event: "Start of Development Career",
        location: "San Diego, California",
        jobTitle: "Self Taught Development Student",
        description: "Learned basic Front-End Web Development through various courses on Udemy, Coursera, Code Academy, and Odin."
    },
    {
        year: 2022,
        event: "Galvanize Operation Level Up",
        location: "Remote",
        jobTitle: "Advanced Software Development Immersive Student",
        description: "Attended Operation Level Up which is a 19 week software engineering immersive program with over 1000+ hours of coding where students learn Full-Stack Development with JavaScript, HTML, CSS, React, Express, Git and PostgeSQL in an Agile environment."
    },
    {
        year: 2022,
        event: "Galvanize Operation Level Up Graduation",
        location: "Remote",
        jobTitle: "Full Stack Software Developer",
        description: "Graduated from Operation Level Up as a certified Full Stack Software Developer."
    },
    {
        year: 2022,
        event: "Marine Corps Seperation",
        location: "San Diego, California",
        jobTitle: "Full Stack Software Developer",
        description: "Seperated from the Marine Corps after a 13 year career as an Operations Manager."
    },
    {
        year: 2022,
        event: "Galvanize",
        location: "Remote",
        jobTitle: "Software Engineer Immersive Resident",
        description: "Landed a job with Galvanize as a Software Engineer Immersive Resident. Instructed Software Development fundamentals to 60 transitioning service members to prepare them for a role as a Software Engineer in the technical community. Mentored students on a one-on-one basis to build on skills and understanding to help them in their future growth as Full Stack Software Engineers. Championed the new Onboarding module for the Learn Software that streamlines the onboarding of oncoming Software Engineer Immersive Residence personnel so they will be prepared to hit the ground running."
    });
db.techStack.insert({
    type: "Front-End",
    name: "HTML",
    StartDate: "2021-09-13",
    logo: "https://user-images.githubusercontent.com/96712943/200899802-b55aed17-aa5e-4053-85fa-d02e7a133519.png"
},
    {
        type: "Front-End",
        name: "CSS",
        StartDate: "2021-09-13",
        logo: "https://user-images.githubusercontent.com/96712943/200899798-dbef6aa8-f045-4004-8e1d-cbac99f09e17.png"
    },
    {
        type: "Front-End",
        name: "JavaScript",
        StartDate: "2021-09-13",
        logo: "https://user-images.githubusercontent.com/96712943/200899804-9b17f0fa-fbd7-4d42-b707-689c6dfa2a93.png"
    },
    {
        type: "Front-End",
        name: "React.js",
        StartDate: "2022-06-03",
        logo: "https://user-images.githubusercontent.com/96712943/200899783-3f48dea9-e345-4fa5-98fd-a1c66999546d.png"
    },
    {
        type: "Front-End",
        name: "A-Frame.js",
        StartDate: "2022-04-26",
        logo: "https://user-images.githubusercontent.com/96712943/200899801-fca49c71-4280-4cd3-8901-ff14bc6a9943.png"
    },
    {
        type: "Front-End",
        name: "jQuery.js",
        startDate: "2021-04-22",
        logo: "https://user-images.githubusercontent.com/96712943/200899787-0fb5251e-cf5b-4657-8226-6e41de33522f.png"
    },
    {
        type: "Front-End",
        name: "Python",
        StartDate: "2022-08-22",
        logo: "https://user-images.githubusercontent.com/96712943/200899781-65bb358f-1371-4c6f-b869-61ce2cbed6a2.png"
    },
    {
        type: "Back-end",
        name: "Node.js",
        StartDate: "2022-05-04",
        logo: "https://user-images.githubusercontent.com/96712943/200899773-5fe4f82b-9eaf-4d18-9aaf-9b2e12749da8.png"
    },
    {
        type: "Back-end",
        name: "Express.js",
        StartDate: "2022-05-05",
        logo: "https://user-images.githubusercontent.com/96712943/200899791-510919b2-6e9d-416a-a862-be7b877ee6a1.png"
    },
    {
        type: "Back-end",
        name: "PostgreSQL",
        StartDate: "2022-05-12",
        logo: "https://user-images.githubusercontent.com/96712943/200899776-d94bf1b4-498d-4d6b-a607-d33f26bc0d28.png"
    },
    {
        type: "Back-end",
        name: "Chai.js",
        StartDate: "2022-04-14",
        logo: "https://user-images.githubusercontent.com/96712943/200899794-effe0b45-d7ff-4413-a39f-d594855c4019.png"
    },
    {
        type: "Back-end",
        name: "Mocha.js",
        StartDate: "2022-04-14",
        logo: "https://user-images.githubusercontent.com/96712943/200899808-e8e139e6-f893-4efc-8868-35cc4d4f2c47.png"
    },
    {
        type: "Back-end",
        name: "Jest.js",
        StartDate: "2022-06-03",
        logo: "https://user-images.githubusercontent.com/96712943/200899806-14d85d30-0193-4689-820c-644945d495bb.png"
    },
    {
        type: "Back-end",
        name: "MongoDB",
        StartDate: "2022-08-15",
        logo: "https://user-images.githubusercontent.com/96712943/200899813-77896c3e-bfa0-4cd7-a960-c39d0663b0bf.png"
    },
    {
        type: "Developer Tools",
        name: "Git",
        StartDate: "2021-12-26",
        logo: "https://user-images.githubusercontent.com/96712943/200899789-50f55500-467c-49ee-ae74-dd32eee0dd9c.png"
    },
    {
        type: "Developer Tools",
        name: "GitHub",
        StartDate: "2021-12-26",
        logo: "https://user-images.githubusercontent.com/96712943/200901536-13805239-edb4-4154-9542-d86eff3a3612.png"
    },
    {
        type: "Developer Tools",
        name: "NPM",
        StartDate: "2022-05-04",
        logo: "https://user-images.githubusercontent.com/96712943/200899772-ee7ff3b6-cdf5-4675-9990-a38301e2ce17.png"
    },
    {
        type: "Developer Tools",
        name: "VS Code",
        StartDate: "2022-05-04",
        logo: "https://user-images.githubusercontent.com/96712943/200899786-8a39f59f-e703-4fba-91b8-af5083c8e97e.png"
    },
    {
        type: "Developer Tools",
        name: "Postman",
        StartDate: "2022-05-06",
        logo: "https://user-images.githubusercontent.com/96712943/200899779-0463e2f3-57ac-4941-aaf1-78e165f31827.png"
    },
    {
        type: "Developer Tools",
        name: "Docker",
        startDate: "2022-08-28",
        logo: "https://user-images.githubusercontent.com/96712943/200899792-c480c417-fbe4-4672-b6e3-d4d97fd24282.png"
    },
    {
        type: "Developer Tools",
        name: "Trello",
        StartDate: "2022-06-20",
        logo: "https://user-images.githubusercontent.com/96712943/200899784-cd686cb4-3134-4504-af39-57d5c4eca3d4.png"
    },
    {
        type: "Developer Tools",
        name: "Asana",
        StartDate: "2022-04-11",
        logo: "https://user-images.githubusercontent.com/96712943/200899799-fec59ccd-c0c6-410e-a488-d45319fb5c33.png"
    });