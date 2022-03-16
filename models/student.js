const mongoose = require('mongoose')
const validator = require('validator')

const studentSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: [true, "Please enter first name"],
        maxlength: [40, "Name should be under 40 characters"]
    },
    middlename: {
        type: String,
        maxlength: [40, "Name should be under 40 characters"]
    },
    lastname: {
        type: String,
        required: [true, "Please enter last name"],
        maxlength: [40, "Name should be under 40 characters"]
    },
    email: {
        type: String,
        required: [true, 'Please provide the email'],
        validate: [validator.isEmail, "Please enter email in correct format"],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide the password'],
        minlength: [8, "Password should be atleast 8 char"],
        select: false // not come in any query
    },
    mobilenumber: {
        type: String,
        required: [true, 'Please provide the phone number'],
        minlength: [10, "Number should be atleast 10 char"],
        unique: true
    },
    enrollmentId: {
        type: String,
        required: [true, 'Please provide the enrollment id'],
        unique: true
    },
    profilePicUrl: {
        type: String,
        default: "profilePicDemo.jpg"
    },
    latestResume: {
        type: String,
    },
    githubUrl: {
        type: String,
    },
    linkedUrl: {
        type: String,
    },
    dob: {
        type: Date,
    },
    documents: {
        std10: {
            type: String
        },
        std12: {
            type: String
        },
        diploma: {
            type: String
        },
        firstsem: {
            type: String
        },
        secondsem: {
            type: String
        },
        thirdsem: {
            type: String
        },
        fourthsem: {
            type: String
        },
        fifthsem: {
            type: String
        },
        sixsem: {
            type: String
        },
        sevensem: {
            type: String
        },
        eightsem: {
            type: String
        }

    },
    programmingUrl: [
        {
            name: {
                type: String
            },
            link: {
                type: String
            }
        }
    ],
    averagePercetange: {
        type: Number
    },
    averageCGPA: {
        type: Number
    },
    KT: [{
        semester: {
            type: Number
        },
        details: {
            type: String
        }
    }],
    std10: {
        obtainedMark: {
            type: String
        },
        totalMark: {
            type: String
        }
    },
    std12: {
        obtainedMark: {
            type: String
        },
        totalMark: {
            type: String
        }
    },
    address:
    {
        addressline1: {
            type: String
        },
        addressline2: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        country: {
            type: String
        },
        pincode: {
            type: Number,
            maxlength: [6, "Please enter valid pincode number"]
        }
    },
    admissionYear: {
        type: Number
    },
    passingYear: {
        type: Number
    },
    universityName: {
        type: String
    },
    facultyName: {
        type: String
    },
    departmentName: {
        type: String
    },
    courseType: {
        type: String
    },
    status: {
        type: String,
        default: "pending"
    },
    isDeleted: {
        type: Boolean,
        default: false,
        select: false
    }
}, { versionKey: false })

module.exports = mongoose.model('student', studentSchema)

