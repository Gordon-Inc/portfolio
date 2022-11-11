/* eslint-disable no-undef */
db.homePage.drop();
db.projects.drop();
db.accomplishments.drop();
db.myJourney.drop();
db.techStack.drop();

db.createCollection("homePage", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                name: {
                    bsonType: "string",
                    description: "First and Last name"
                },
                myJob: {
                    bsonType: "string"
                },
                whoIAm: {
                    bsonType: "string"
                },
                whatICanDo: {
                    bsonType: "array"
                },
                recentWork: {
                    bsonType: "string"
                },
                interests: {
                    bsonType: "object",
                    description: "3 properties: roles, companies, technologies"
                }
            }
        }
    }
});

db.createCollection("projects", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                typeOf: {
                    bsonType: "string",
                },
                name: {
                    bsonType: "string",
                },
                img: {
                    bsonType: "string",
                },
                techStack: {
                    bsonType: "array",
                },
                url: {
                    bsonType: "string",
                },
                gitHub: {
                    bsonType: "string",
                },
                description: {
                    bsonType: "string",
                },
                likes: {
                    bsonType: "number",
                    description: "accumulate the number of likes"
                },
                comments: {
                    bsonType: "object",
                    description: "object will have a name, comment, likes"
                }
            }
        }
    }
});

db.createCollection("accomplishments", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                type: {
                    bsonType: "string",
                    description: "Certificate Course, Learning Course"
                },
                status: {
                    bsonType: "string",
                    description: "Complete, In Progress, or Backlog",
                },
                title: {
                    bsonType: "string",
                },
                img: {
                    bsonType: "string",
                },
                topics: {
                    bsonType: "array",
                },
                description: {
                    bsonType: "string",
                }
            }
        }
    }
});

db.createCollection("myJourney", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                year: {
                    bsonType: "number",
                },
                event: {
                    bsonType: "string",
                },
                location: {
                    bsonType: "string",
                },
                jobTitle: {
                    bsonType: "string",
                },
                description: {
                    bsonType: "string",
                    description: "what happened during this event"
                }
            }
        }
    }
});

db.createCollection("techStack", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                type: {
                    bsonType: "string",
                    description: "Front-End, Back-End or Developer Tools",
                },
                name: {
                    bsonType: "string",
                },
                startDate: {
                    bsonType: "string",
                    description: "Should be a date string (YYYY-MM-DD)"
                },
                logo: {
                    bsonType: "string"
                }
            }
        }
    }
});