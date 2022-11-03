/* eslint-disable no-undef */
db.createCollection("homePage", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                name: {
                    bsonType: "string",
                },
                job: {
                    bsonType: "string"
                },
                who: {
                    bsonType: "string"
                },
                what: {
                    bsonType: "array"
                },
                work: {
                    bsonType: "string"
                },
                looking: {
                    bsonType: "object"
                }
            }
        }
    }
})

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
})