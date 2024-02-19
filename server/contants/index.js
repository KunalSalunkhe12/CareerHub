export const checklist = {
  BOOKMARKED: [
    {
      uuid: "1",
      task: "Check if the job description aligns with your interests and values",
      is_completed: false,
    },
    {
      uuid: "2",
      task: "Review the highlighted skills to see if the role is a good fit",
      is_completed: false,
    },
    {
      uuid: "3",
      task: "Research the company or role and mark your excitement level",
      is_completed: false,
    },
  ],
  APPLYING: [
    {
      uuid: "4",
      task: "Find and research someone who works at the company and add as a contact",
      is_completed: false,
    },
    {
      uuid: "5",
      task: "Set up an informational interview to learn more about the role/company",
      is_completed: false,
    },
    {
      uuid: "6",
      task: "Identify potential referrals to help get your application on the top of the pile",
      is_completed: false,
    },
    {
      uuid: "7",
      task: "Customize your work achievements using the job description keywords",
      is_completed: false,
    },
    {
      uuid: "8",
      task: "Submit your application on the company website if possible",
      is_completed: false,
    },
  ],
  APPLIED: [
    {
      uuid: "9",
      task: "Reach out to the hiring manager or recruiter",
      is_completed: false,
    },
    {
      uuid: "10",
      task: "Follow up on your application via email weekly",
      is_completed: false,
    },
    {
      uuid: "11",
      task: "Continue identifying and saving similar job opportunities",
      is_completed: false,
    },
    {
      uuid: "12",
      task: "Set up weekly networking calls to explore similar companies/roles",
      is_completed: false,
    },
  ],
  INTERVIEWING: [
    {
      uuid: "13",
      task: "Prepare your blurb or 'tell me about yourself' response",
      is_completed: false,
    },
    {
      uuid: "14",
      task: "Practice answering behavioral interview questions",
      is_completed: false,
    },
    {
      uuid: "15",
      task: "Research the company and your interviewers",
      is_completed: false,
    },
    {
      uuid: "16",
      task: "Set up your virtual interview space and test your tech",
      is_completed: false,
    },
    {
      uuid: "17",
      task: "Send thank you emails within 24 hours",
      is_completed: false,
    },
  ],
  NEGOTIATING: [
    {
      uuid: "18",
      task: "Research your market value and know your numbers",
      is_completed: false,
    },
    {
      uuid: "19",
      task: "Prepare your negotiation scripts",
      is_completed: false,
    },
    {
      uuid: "20",
      task: "Evaluate your offer and decline or accept",
      is_completed: false,
    },
  ],
  ACCEPTED: [
    {
      uuid: "21",
      task: "Plan your resignation if applicable",
      is_completed: false,
    },
    {
      uuid: "22",
      task: "Take some time to relax and recharge",
      is_completed: false,
    },
    {
      uuid: "23",
      task: "Prepare for your first day of onboarding",
      is_completed: false,
    },
  ],
};

export const guidance = {
  BOOKMARKED: {
    uuid: "19aa4e22-26d5-431b-aab1-6965c7a3d8b3",
    status: "Bookmarked",
    tasks: [
      {
        uuid: "0c8c3c56-3fa3-4855-b39b-c8b8ccf917d9",
        title: "Review the Job Position details",
        isCompleted: false,
        subtasks: [
          "Look through the highlighted skills and keywords to see if the job matches your experience",
          "Research the company and its values to look for alignment with your career goals",
          "Research the company's Glassdoor reviews to see if it's a good fit for you",
          "Research the company's LinkedIn page to see if it's a good fit for you",
        ],
      },
    ],
  },
  APPLYING: {
    uuid: "e2b52e3f-24e3-4d06-95a3-02b131c5c5cc",
    status: "Applying",
    tasks: [
      {
        uuid: "58c63f35-33c1-4d45-a26d-924a0fcd5a0a",
        title: "Get Referral",
        isCompleted: false,
        subtasks: [
          "Check if you know anyone at the company on LinkedIn",
          "Ask a contact for an introduction to a person at the company",
          "Best practices for informational interviewing",
          "Request a referral",
        ],
      },
      {
        uuid: "a9b3a4e7-17a7-4dd5-9340-095b3a1e6215",
        title: "Customize Resume",
        isCompleted: false,
        subtasks: [
          "Review job post keywords to include in your application",
          "Include job post title in your resume",
          "Tailor your resume blurb or summary to the job post",
          "Tailor your achievements to the job post",
          "Include skills that are referenced in the job post",
          "Save your resume using 'first_last.file'",
        ],
      },
    ],
  },
  APPLIED: {
    uuid: "4a7fc13e-04c3-4a0e-a19c-d29d8b0d7a6e",
    status: "Applied",
    tasks: [
      {
        uuid: "a5ce72e2-3c83-4c2f-bc1a-88d12e6a6f01",
        title: "Follow up on Job Applications",
        isCompleted: false,
        subtasks: [
          "Follow up on your application after 1 week",
          "Follow up on your application after 2 weeks",
          "Follow up on your application after 3 weeks",
          "Archive job on job tracker if you haven't heard back after 3 weeks",
        ],
      },
    ],
  },
  INTERVIEWING: {
    uuid: "f23c6e55-87c6-4a9d-b0cb-758b1e6cbe95",
    status: "Interviewing",
    tasks: [
      {
        uuid: "aae2c90c-49a3-41f0-ae33-6f273a82649e",
        title: "Research & Prepare",
        isCompleted: false,
        subtasks: [
          "Research the Company via Google News",
          "Research your Interviewers via LinkedIn",
          "Review the Job Description",
        ],
      },
      {
        uuid: "e4a7420d-85fc-4e07-ae1b-dff1d8c547e3",
        title: "Practice Interviewing",
        isCompleted: false,
        subtasks: [
          "Practice a “tell me about yourself” response",
          "Understand your Work Style",
          "Review Behavioral Interview Questions",
          "Practice your CAR / STAR stories",
          "Prepare questions for your Interviewer",
        ],
      },
      {
        uuid: "cee49a3d-0a13-44b2-8fb1-f82d77a6acde",
        title: "Test your Tech",
        isCompleted: false,
        subtasks: [
          "Download and test out the video platform in advance",
          "Eliminate potential distractions and find a quiet place",
          "Check your internet connection",
          "Set up your background and camera angle",
        ],
      },
      {
        uuid: "bc63e5e2-74c2-4e0d-a6a1-c8e1e8b1e9e3",
        title: "Follow up",
        isCompleted: false,
        subtasks: [
          "Send a Thank You Email to anyone you met with",
          "Record your Interview & Follow Up dates",
        ],
      },
    ],
  },

  NEGOTIATING: {
    uuid: "7d23a6e4-4ab2-439e-b4ca-1b8c5c5c29a5",
    status: "Negotiating",
    tasks: [
      {
        uuid: "d5f4c89a-0ce2-4e1c-a9cb-164e7e1c77ed",
        title: "Research your Targets",
        isCompleted: false,
        subtasks: [
          "Calculate your Budget",
          "Determine your Market Value",
          "Get market data from people and other resources",
          "Determine your Target Salary Range",
        ],
      },
      {
        uuid: "c9e6e5e4-84d2-429a-ba1e-ae48a8e3ca4e",
        title: "Prepare for Negotiations",
        isCompleted: false,
        subtasks: [
          "Review your accomplishments and unique skills",
          "Focus in on what the employer needs",
          "Practice talking about your value",
          "Prepare your negotiation scripts",
        ],
      },
      {
        uuid: "fc3a92f1-91a4-4ed0-b6a2-2de1e7e4e3af",
        title: "Evaluate an Offer",
        isCompleted: false,
        subtasks: [
          "Take time to think over the full offer and total compensation before accepting a role.",
          "Consider making a counter offer",
          "Analyze your offer",
          "Accept or Decline the offer",
        ],
      },
    ],
  },
};
