import { Participant } from "../participants/types/Participant"

// let dummyParticipants = [
//     {
//         "_id": "64596eb3585a1e554502f991",
//         "email": "1111868@eng.asu.edu.eg",
//         "__v": 0,
//         "acceptanceStatus": "accepted",
//         "collegeId": ""1900868"",
//         "createdAt": "2023-05-08T21:50:43.382Z",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "Hhh",
//         "firstPrefReason": "",
//         "firstPreference": "python",
//         "name": "Omar Karm",
//         "pastExperience": "",
//         "phone": "0"01065975656"",
//         "secondPrefReason": "",
//         "secondPreference": "nodejs",
//         "updatedAt": "2023-08-19T19:35:11.708Z",
//         "year": "Senior 1",
//         "InterviewerNote": {
//             "interviewNotes": {
//                 "Commitment": {
//                     "rating": 1,
//                     "note": "Showing bad commitment",
//                     "_id": "64ca1d599a63f1be0c1fd4bf"
//                 }
//             },
//             "interviewerId": {
//                 "_id": "649359e3ef4802d8cbccadc9",
//                 "username": "Ahmed Atwa",
//                 "phone": "0"01113629376"",
//                 "role": "admin"
//             },
//             "date": "2023-08-02T09:09:45.286Z",
//             "_id": "64ca1d599a63f1be0c1fd4be"
//         }
//     },
//     {
//         "_id": "645a3acc585a1e55457f9c46",
//         "phone": "0"01017596079"",
//         "__v": 0,
//         "acceptanceStatus": "scheduled",
//         "collegeId": ""1900841"",
//         "createdAt": "2023-05-09T12:21:32.910Z",
//         "email": "3lyre7an777@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "none",
//         "firstPrefReason": "اخويا اللي بيشرح",
//         "firstPreference": "python",
//         "name": "Ali Rehan",
//         "pastExperience": "none",
//         "secondPrefReason": "none",
//         "secondPreference": "frontend",
//         "updatedAt": "2023-08-02T09:14:37.225Z",
//         "year": "Freshman",
//         "InterviewerNote": {
//             "interviewNotes": {
//                 "Commitment": {
//                     "rating": 5,
//                     "note": "Very committed",
//                     "_id": "64ca1e719a63f1be0c1fd4cc"
//                 },
//                 "Teamwork": {
//                     "rating": 5,
//                     "note": "Great teamwork skills",
//                     "_id": "64ca1e719a63f1be0c1fd4cd"
//                 }
//             },
//             "interviewerId": {
//                 "_id": "649359e3ef4802d8cbccadc9",
//                 "username": "Ahmed Atwa",
//                 "phone": "0"01113629376"",
//                 "role": "admin"
//             },
//             "date": "2023-08-02T09:14:25.770Z",
//             "_id": "64ca1e719a63f1be0c1fd4cb"
//         }
//     },
//     {
//         "_id": "645a7717585a1e5545a52fb6",
//         "phone": "0"01120074461"",
//         "__v": 0,
//         "acceptanceStatus": "accepted",
//         "collegeId": ""1900642"",
//         "createdAt": "2023-05-09T16:38:47.116Z",
//         "email": "noraalsaqati@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "html course",
//         "firstPrefReason": "I need to learn how to design a web page to use to work from home",
//         "firstPreference": "frontend",
//         "name": "Noura Abd ElRahman Ahmad ElSaqati",
//         "pastExperience": "",
//         "secondPrefReason": "mobile applications are useful they make our lives easier. One day I was sad, the reason for this is my disability to program and make my own app. I aim to do this with my friends after attending these sessions.",
//         "secondPreference": "flutter",
//         "updatedAt": "2023-07-21T19:33:21.028Z",
//         "year": "Senior 1",
//         "InterviewerNote": {
//             "interviewNotes": {
//                 "Commitment": {
//                     "rating": 2,
//                     "_id": "64badd7227d62f2b1036da0d"
//                 },
//                 "Teamwork": {
//                     "rating": 4,
//                     "_id": "64badd7227d62f2b1036da0e"
//                 },
//                 "Time Management": {
//                     "rating": 3,
//                     "_id": "64badd7227d62f2b1036da0f"
//                 },
//                 "Communication Skills": {
//                     "rating": 4,
//                     "_id": "64badd7227d62f2b1036da10"
//                 },
//                 "Flexibility": {
//                     "rating": 3,
//                     "_id": "64badd7227d62f2b1036da11"
//                 },
//                 "Ethics": {
//                     "rating": 3,
//                     "_id": "64badd7227d62f2b1036da12"
//                 },
//                 "Leadership": {
//                     "rating": 3,
//                     "_id": "64badd7227d62f2b1036da13"
//                 },
//                 "Stress Management": {
//                     "rating": 3,
//                     "_id": "64badd7227d62f2b1036da14"
//                 },
//                 "Problem Solving": {
//                     "rating": 3,
//                     "_id": "64badd7227d62f2b1036da15"
//                 },
//                 "Eager To Learn": {
//                     "rating": 3,
//                     "_id": "64badd7227d62f2b1036da16"
//                 }
//             },
//             "interviewerId": {
//                 "_id": "64b2d7d809f35e331fa0a59b",
//                 "username": "Hager medhat - basic ",
//                 "phone": "0"01155309981"",
//                 "role": "hr"
//             },
//             "date": "2023-07-21T19:33:06.255Z",
//             "_id": "64badd7227d62f2b1036da0c"
//         }
//     },
//     {
//         "_id": "645a8012585a1e5545ab6219",
//         "phone": "0"01068098173"",
//         "__v": 0,
//         "acceptanceStatus": "rejected",
//         "collegeId": ""2100415"",
//         "createdAt": "2023-05-09T17:17:06.802Z",
//         "email": "mohamed1elahmar@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "Intro with HTML",
//         "firstPrefReason": "",
//         "firstPreference": "fullstack",
//         "name": "Mohamed Elahmar",
//         "pastExperience": "",
//         "secondPrefReason": "",
//         "secondPreference": "c-prog",
//         "updatedAt": "2023-07-11T16:03:20.114Z",
//         "year": "Sophomore"
//     },
//     {
//         "_id": "645a8432585a1e5545adb9cd",
//         "phone": "0"01152662670"",
//         "__v": 0,
//         "acceptanceStatus": "rejected",
//         "collegeId": ""1900493"",
//         "createdAt": "2023-05-09T17:34:42.120Z",
//         "email": "fatmasaad2442000@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "Perfect in logic design and some small knowledge about verilog",
//         "firstPrefReason": "Love track of digital and my project in senior 2 will be in digital isA",
//         "firstPreference": "digital",
//         "name": "Fatma Saad Abdallah",
//         "pastExperience": "Love to join semicolon",
//         "secondPrefReason": "Love the track of the embedded systems",
//         "secondPreference": "arm",
//         "updatedAt": "2023-07-11T17:07:42.049Z",
//         "year": "Senior 1"
//     },
//     {
//         "_id": "645a8e2f585a1e5545b35a69",
//         "phone": "0"01153921953"",
//         "__v": 0,
//         "acceptanceStatus": "accepted",
//         "collegeId": ""2001609"",
//         "createdAt": "2023-05-09T18:17:19.387Z",
//         "email": "asmaaanwar191@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "Good knowledge in basic logic gate. I worked on 2 progjects with logic gates.",
//         "firstPrefReason": "I need to know more about that topic, and I'm very interested in learning the ic digital design field",
//         "firstPreference": "digital",
//         "name": "Asmaa Anwar",
//         "pastExperience": "Self learning and I'm good at communicating with people",
//         "secondPrefReason": "I'm interested in learning the problem solving and programming language",
//         "secondPreference": "python",
//         "updatedAt": "2023-07-02T16:32:06.410Z",
//         "year": "Junior"
//     },
//     {
//         "_id": "645a97d3585a1e5545b9d7f8",
//         "phone": "0"01004973472"",
//         "__v": 0,
//         "acceptanceStatus": "pending",
//         "collegeId": ""2101092"",
//         "createdAt": "2023-05-09T18:58:27.598Z",
//         "email": "seif.elfouad@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "I have all the requirements to this workshop and i am interested to learn about the ARM architecture.",
//         "firstPrefReason": "I am looking forward to learning embedded systems and specially the ARM architecture because it is used commercially",
//         "firstPreference": "arm",
//         "name": "Seif Ashraf Ahmed Fouad",
//         "pastExperience": "I was an HR team member at the ASU Racing team",
//         "secondPrefReason": "Because i would l9ve to learn how the desktop apps i use everyday is programmed",
//         "secondPreference": "desktop",
//         "updatedAt": "2023-05-09T18:58:27.598Z",
//         "year": "Sophomore"
//     },
//     {
//         "_id": "645a9de9585a1e5545bd9b9e",
//         "phone": "0"01023486067"",
//         "__v": 0,
//         "acceptanceStatus": "rejected",
//         "collegeId": ""2100677"",
//         "createdAt": "2023-05-09T19:24:25.479Z",
//         "email": "iyadwael55@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "Logic design course",
//         "firstPrefReason": "Enthusiasm in Electronics and eager to start learning in that field.",
//         "firstPreference": "digital",
//         "name": "Iyad Wael Sayed",
//         "pastExperience": "Former PR and marketing specialist at MECA.  attended arduino workshop with connected family",
//         "secondPrefReason": "Loved working with arduino and wanted to take a next step in embedded systems.",
//         "secondPreference": "avr",
//         "updatedAt": "2023-07-11T17:07:43.310Z",
//         "year": "Sophomore"
//     },
//     {
//         "_id": "645a9e86585a1e5545bdf4d9",
//         "phone": "0"01018210959"",
//         "__v": 0,
//         "acceptanceStatus": "accepted",
//         "collegeId": ""2001775"",
//         "createdAt": "2023-05-09T19:27:02.254Z",
//         "email": "o.afifi80@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "I have made an alu project using verilog and implemented it with cadence",
//         "firstPrefReason": "I'm passionate about this field and wanna learn more about it",
//         "firstPreference": "digital",
//         "name": "Omar mohamed afifi",
//         "pastExperience": "",
//         "secondPrefReason": "",
//         "secondPreference": "avr",
//         "updatedAt": "2023-07-02T16:33:17.144Z",
//         "year": "Junior"
//     },
//     {
//         "_id": "645a9fc6585a1e5545bebde3",
//         "phone": "0"01018947983"",
//         "__v": 0,
//         "acceptanceStatus": "accepted",
//         "collegeId": ""2101114"",
//         "createdAt": "2023-05-09T19:32:22.208Z",
//         "email": "youssef.gamaleldein@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "- Strong foundations of digital logic design\n- Explained several topics in digital logic for my batch previous term on YouTube\n- basics of Verilog language\n- ASIC & FPGA design flow",
//         "firstPrefReason": "Because it's my passion and the field that i enjoy my time while learning it",
//         "firstPreference": "digital",
//         "name": "Youssef Gamal Eldein Zaki",
//         "pastExperience": "roboOlymoics participant in aviation",
//         "secondPrefReason": "I want to apply at the racing team next season for low voltage member position and this sessions will sure help me get enough knowledge to be a qualified candidate",
//         "secondPreference": "avr",
//         "updatedAt": "2023-07-02T16:31:48.523Z",
//         "year": "Sophomore"
//     },
//     {
//         "_id": "645aa00b585a1e5545bee4c4",
//         "phone": "0"01225730050"",
//         "__v": 0,
//         "acceptanceStatus": "pending",
//         "collegeId": ""2000037"",
//         "createdAt": "2023-05-09T19:33:31.607Z",
//         "email": "bakrahmed440@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "Considerable knowledge about c and interfacing with ARM",
//         "firstPrefReason": "Hope to be embedded software engineer",
//         "firstPreference": "arm",
//         "name": "Ahmed Mohammed Bakr Ahmed",
//         "pastExperience": "IDT - Member at mobile development team",
//         "secondPrefReason": "Considerable knowledge about embedded c",
//         "secondPreference": "avr",
//         "updatedAt": "2023-06-21T02:15:46.242Z",
//         "year": "Junior"
//     },
//     {
//         "_id": "645aa595585a1e5545c20373",
//         "phone": "0"01208878228"",
//         "__v": 0,
//         "acceptanceStatus": "rejected",
//         "collegeId": ""2001770"",
//         "createdAt": "2023-05-09T19:57:09.260Z",
//         "email": "aliibrahim000.2003@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "Digital design and digital circuits courses",
//         "firstPrefReason": "My main study track",
//         "firstPreference": "digital",
//         "name": "Ali Ibrahim said",
//         "pastExperience": "Aviation ETS member",
//         "secondPrefReason": "Interested in studying Embedded systems in general",
//         "secondPreference": "avr",
//         "updatedAt": "2023-07-11T17:07:44.455Z",
//         "year": "Junior"
//     },
//     {
//         "_id": "645aaa64585a1e5545c4bc4d",
//         "phone": "0"01152739487"",
//         "__v": 0,
//         "acceptanceStatus": "rejected",
//         "collegeId": ""2000082"",
//         "createdAt": "2023-05-09T20:17:40.437Z",
//         "email": "ahmedgamalgamal1@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "Dealing with verrilog in digital desing course  project to simulate  logic gates &makes testbench for it",
//         "firstPrefReason": "..",
//         "firstPreference": "digital",
//         "name": "Ahmed gamalhelmy",
//         "pastExperience": "..",
//         "secondPrefReason": "Not interested",
//         "secondPreference": "flutter",
//         "updatedAt": "2023-07-11T17:07:45.691Z",
//         "year": "Junior"
//     },
//     {
//         "_id": "645aacb1585a1e5545c6187d",
//         "phone": "0"01116309460"",
//         "__v": 0,
//         "acceptanceStatus": "accepted",
//         "collegeId": ""2000399"",
//         "createdAt": "2023-05-09T20:27:29.201Z",
//         "email": "aemad9883@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "logic design course\nComputer organization course\nBasic background of verlilog",
//         "firstPrefReason": "انا قسم اتصالات وناوي اتخصص ديجيتال ان شاءالله",
//         "firstPreference": "digital",
//         "name": "Abdelrhman Emad fathy",
//         "pastExperience": "Pr member in semicolon",
//         "secondPrefReason": "مجال الامبيدد جميل وقريب من دراستي",
//         "secondPreference": "avr",
//         "updatedAt": "2023-07-02T16:32:18.322Z",
//         "year": "Junior"
//     },
//     {
//         "_id": "645ab941585a1e5545ce7c72",
//         "phone": "0"01032370664"",
//         "__v": 0,
//         "acceptanceStatus": "pending",
//         "collegeId": ""2101371"",
//         "createdAt": "2023-05-09T21:21:05.169Z",
//         "email": "fares.sultan.9@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "C programming basics",
//         "firstPrefReason": "-",
//         "firstPreference": "python",
//         "name": "Fares khalaf salman Sultan",
//         "pastExperience": "",
//         "secondPrefReason": "-",
//         "secondPreference": "frontend",
//         "updatedAt": "2023-06-22T20:55:05.024Z",
//         "year": "Sophomore"
//     },
//     {
//         "_id": "645abbbe585a1e5545cfe3a1",
//         "phone": "0"01110581295"",
//         "__v": 0,
//         "acceptanceStatus": "pending",
//         "collegeId": ""1050606"",
//         "createdAt": "2023-05-09T21:31:42.789Z",
//         "email": "osalem192@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "I have no experience in arm interfacing but i have interfaced with AVR and i have written drivers for it for HAL and MCAL",
//         "firstPrefReason": "As i have finished AVR interfacing and C programming diploma, i want to take another step to learn more advanced microcontroller",
//         "firstPreference": "arm",
//         "name": "Omar Ahmed Salem",
//         "pastExperience": "Nothing",
//         "secondPrefReason": "i have interfaced with AVR and i have written drivers for it for HAL and MCAL",
//         "secondPreference": "avr",
//         "updatedAt": "2023-06-21T02:15:50.794Z",
//         "year": "Senior 2"
//     },
//     {
//         "_id": "645abcb2585a1e5545d0632b",
//         "phone": "0"01551441908"",
//         "__v": 0,
//         "acceptanceStatus": "rejected",
//         "collegeId": ""2000469"",
//         "createdAt": "2023-05-09T21:35:46.191Z",
//         "email": "aliomran918273@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "No previous full stack development experience, but I am eager to learn and contribute.",
//         "firstPrefReason": "I am interested in full stack development to create complete web applications, build problem-solving skills, and innovate with new technologies.",
//         "firstPreference": "fullstack",
//         "name": "Ali Mahmoud Abdelhalim Mohamed",
//         "pastExperience": "No previous student activity experience.",
//         "secondPrefReason": "I am fascinated by the visual aspects and user experience of websites, and I want to create engaging, interactive interfaces using modern front-end technologies.",
//         "secondPreference": "frontend",
//         "updatedAt": "2023-07-11T16:03:21.664Z",
//         "year": "Junior"
//     },
//     {
//         "_id": "645abdf7585a1e5545d10c45",
//         "phone": "0"01094537126"",
//         "__v": 0,
//         "acceptanceStatus": "rejected",
//         "collegeId": """",
//         "createdAt": "2023-05-09T21:41:11.621Z",
//         "email": "basselkhaledsayed87@gmail.com",
//         "emailedStatus": false,
//         "firstPrefKnowledge": "no previous experience",
//         "firstPrefReason": "",
//         "firstPreference": "fullstack",
//         "name": "Bassel Khaled",
//         "pastExperience": "",
//         "secondPrefReason": "",
//         "secondPreference": "c-prog",
//         "updatedAt": "2023-07-11T16:03:23.295Z",
//         "year": "Senior 1"
//     }
// ]

const dummyParticipants = [
    {
      "_id": "64e3b2aa8d133d1773d7550f",
      "phone": "01293144125",
      "acceptanceStatus": "emailed",
      "collegeId": "200783",
      "createdAt": "2023-08-21T18:53:30.559Z",
      "email": "westchen@comtours.com",
      "firstPrefKnowledge": "Aliqua deserunt sunt fugiat officia. Mollit officia adipisicing consectetur tempor deserunt non anim voluptate quis ad irure est. Incididunt aliquip nostrud voluptate nisi nulla. Sit quis sint eiusmod esse aliqua culpa ullamco aliqua nisi duis velit.\r\n",
      "firstPrefReason": "Eu consequat ex eu dolor qui amet ullamco. Aliqua consequat fugiat est consequat adipisicing tempor reprehenderit cupidatat deserunt. Consequat ea labore do nisi et elit est eiusmod qui cupidatat veniam.\r\n",
      "firstPreference": "fullstack",
      "name": "Conley Chapman",
      "pastExperience": "Anim qui dolore aute eu ea veniam nulla commodo consequat tempor est. In id excepteur Lorem est dolor adipisicing sint proident do id pariatur. Nisi fugiat aliquip ea quis.\r\n",
      "updatedAt": "2023-08-21T18:53:30.559Z",
      "year": "Senior 1",
      "InterviewerNote": {
          "interviewNotes": {
              "Commitment": {
                  "rating": 5,
                  "note": "Very committed",
                  "_id": "64ca1e719a63f1be0c1fd4cc"
              },
              "Teamwork": {
                  "rating": 5,
                  "note": "Great teamwork skills",
                  "_id": "64ca1e719a63f1be0c1fd4cd"
              }
          },
          "interviewerId": {
              "_id": "649359e3ef4802d8cbccadc9",
              "username": "Ahmed Atwa",
              "phone": "01113333376",
              "role": "admin"
          },
          "date": "2023-08-02T09:14:25.770Z",
          "_id": "64ca1e719a63f1be0c1fd4cb"
      }
    },
    {
      "_id": "64e3b2aa8b58e42ec90552bd",
      "phone": "01290045331",
      "acceptanceStatus": "rejected",
      "collegeId": "200557",
      "createdAt": "2023-08-21T18:53:30.559Z",
      "email": "conleychapman@comtours.com",
      "firstPrefKnowledge": "Deserunt adipisicing ipsum voluptate sit. Non velit adipisicing officia veniam tempor laborum et eu. Ea labore ex nisi elit eiusmod dolor Lorem tempor laboris irure do in.\r\n",
      "firstPrefReason": "Labore deserunt quis velit anim elit sit esse consequat occaecat eiusmod ea eu mollit. Aute nisi id exercitation est labore non enim anim. Duis laborum Lorem cillum culpa ex fugiat dolore Lorem reprehenderit tempor duis. Est nisi quis duis do.\r\n",
      "firstPreference": "fullstack",
      "name": "Iva Lee",
      "pastExperience": "Reprehenderit dolor excepteur aute exercitation fugiat anim. Sit eu nisi enim esse eu laborum do quis. Proident voluptate ex magna officia mollit cupidatat commodo dolore nulla. Voluptate sit aliquip aliquip et anim nisi esse aliqua.\r\n",
      "updatedAt": "2023-08-21T18:53:30.559Z",
      "year": "Senior 2",
      "InterviewerNote": {
          "interviewNotes": {
              "Commitment": {
                  "rating": 2,
                  "_id": "64badd7227d62f2b1036da0d"
              },
              "Teamwork": {
                  "rating": 4,
                  "_id": "64badd7227d62f2b1036da0e"
              },
              "Time Management": {
                  "rating": 3,
                  "_id": "64badd7227d62f2b1036da0f"
              },
              "Communication Skills": {
                  "rating": 4,
                  "_id": "64badd7227d62f2b1036da10"
              },
              "Flexibility": {
                  "rating": 3,
                  "_id": "64badd7227d62f2b1036da11"
              },
              "Ethics": {
                  "rating": 3,
                  "_id": "64badd7227d62f2b1036da12"
              },
              "Leadership": {
                  "rating": 3,
                  "_id": "64badd7227d62f2b1036da13"
              },
              "Stress Management": {
                  "rating": 3,
                  "_id": "64badd7227d62f2b1036da14"
              },
              "Problem Solving": {
                  "rating": 3,
                  "_id": "64badd7227d62f2b1036da15"
              },
              "Eager To Learn": {
                  "rating": 3,
                  "_id": "64badd7227d62f2b1036da16"
              }
          },
          "interviewerId": {
              "_id": "64b2d7d809f35e331fa0a59b",
              "username": "John Doe",
              "phone": "01122209981",
              "role": "hr"
          },
          "date": "2023-07-21T19:33:06.255Z",
          "_id": "64badd7227d62f2b1036da0c"
      }
    },
    {
      "_id": "64e3b2aa9380d6fd158714e6",
      "phone": "01286657229",
      "acceptanceStatus": "accepted",
      "collegeId": "200475",
      "createdAt": "2023-08-21T18:53:30.559Z",
      "email": "ivalee@comtours.com",
      "firstPrefKnowledge": "Lorem cupidatat do incididunt Lorem Lorem amet. Laborum culpa non anim tempor cillum laboris nostrud ut eiusmod consectetur sunt nostrud. Duis qui cupidatat fugiat nulla proident esse magna culpa qui fugiat proident tempor ad. Irure culpa est sit id excepteur amet magna eiusmod minim eu eiusmod nostrud. Eu quis enim culpa id. Id duis duis in sint aute adipisicing non tempor sit fugiat ullamco. Laboris eiusmod culpa enim voluptate anim ullamco.\r\n",
      "firstPrefReason": "Tempor elit magna exercitation nostrud amet laboris cillum. Aliqua culpa adipisicing pariatur proident ipsum nostrud in consectetur eiusmod enim sint. Incididunt culpa aute anim enim.\r\n",
      "firstPreference": "arm",
      "name": "Wright Crane",
      "pastExperience": "Fugiat in irure dolor irure deserunt labore nisi labore laboris enim anim anim mollit aliqua. Mollit reprehenderit elit sunt occaecat eu enim est. Reprehenderit aliquip laborum cillum culpa officia. Ea proident officia laborum nisi anim ut Lorem fugiat enim. Tempor laboris non ad nostrud eiusmod anim ullamco sint dolore. Nostrud nisi ipsum magna amet eiusmod magna.\r\n",
      "updatedAt": "2023-08-21T18:53:30.559Z",
      "year": "Senior 1"
    },
    {
      "_id": "64e3b2aa2a559c6ccc64801a",
      "phone": "01295746330",
      "acceptanceStatus": "rejected",
      "collegeId": "200421",
      "createdAt": "2023-08-21T18:53:30.559Z",
      "email": "wrightcrane@comtours.com",
      "firstPrefKnowledge": "Ullamco dolor laborum ex sint eiusmod cillum. Mollit est quis ut aliqua adipisicing nisi ex sint laboris id. Magna minim quis ex officia eiusmod proident do pariatur sint laboris tempor proident est laboris. Amet anim irure esse irure do deserunt labore ex commodo id. Commodo fugiat consectetur duis elit ullamco nostrud mollit irure ullamco ea tempor. In mollit deserunt elit ullamco elit est quis ullamco.\r\n",
      "firstPrefReason": "Incididunt consectetur deserunt Lorem ex sint. Voluptate nisi aliquip enim deserunt commodo consequat culpa excepteur commodo. Consequat id nostrud ut aliquip id cillum ut duis esse. Nostrud quis consequat duis ea culpa nostrud officia duis enim non amet est. Eiusmod nulla quis ipsum officia aliqua minim id. Mollit velit aliquip reprehenderit dolor labore dolor officia.\r\n",
      "firstPreference": "arm",
      "name": "Sheree Kaufman",
      "pastExperience": "Quis aute nisi Lorem adipisicing. Nulla ipsum ad eu eiusmod consectetur ad irure consequat non. Consequat velit id qui esse officia consequat deserunt do reprehenderit. Aliqua culpa culpa aliqua ipsum voluptate sit ipsum eiusmod. Ullamco officia sit nulla non.\r\n",
      "updatedAt": "2023-08-21T18:53:30.559Z",
      "year": "Freshmen"
    },
    {
      "_id": "64e3b2aa59518fbc8edfc22b",
      "phone": "01295643626",
      "acceptanceStatus": "filtered",
      "collegeId": "200367",
      "createdAt": "2023-08-21T18:53:30.559Z",
      "email": "shereekaufman@comtours.com",
      "firstPrefKnowledge": "Duis Lorem consequat aute deserunt exercitation ea sunt magna qui non magna magna eu. Ea eiusmod ea excepteur qui labore laboris in sit sit ad anim id. Dolor commodo non esse duis anim consectetur qui sint pariatur id tempor veniam eiusmod nulla. Enim ullamco ex aliqua ea tempor qui pariatur consectetur ullamco deserunt nisi excepteur. Est pariatur adipisicing velit sit. Id veniam reprehenderit adipisicing Lorem.\r\n",
      "firstPrefReason": "Non pariatur qui ullamco veniam sunt in voluptate pariatur tempor duis aute ipsum. Ut laboris enim esse enim pariatur veniam sit adipisicing commodo consectetur. Fugiat velit enim occaecat non non nostrud ipsum. Ipsum veniam laboris voluptate commodo ipsum amet in irure. Reprehenderit mollit culpa reprehenderit minim reprehenderit ut tempor ad consectetur sint velit excepteur. Adipisicing eiusmod tempor excepteur ullamco elit non reprehenderit sint dolor exercitation esse ad eu eiusmod. Dolor velit mollit occaecat qui nisi Lorem in ad velit amet.\r\n",
      "firstPreference": "desktop",
      "name": "Conrad Carr",
      "pastExperience": "Cupidatat ad et ullamco eiusmod. Magna id laborum occaecat cillum voluptate voluptate nisi cillum minim adipisicing eiusmod proident aliqua. Quis qui laborum voluptate esse est laborum consectetur anim sunt. Excepteur quis nulla commodo irure quis nulla velit veniam ipsum. Ut nulla ipsum qui mollit velit eiusmod eiusmod voluptate. Proident exercitation commodo velit consequat eiusmod consequat proident mollit minim pariatur do laborum deserunt. Aliquip voluptate adipisicing do sit.\r\n",
      "updatedAt": "2023-08-21T18:53:30.559Z",
      "year": "Senior 2"
    },
    {
      "_id": "64e3b2aaad2df24c9f78858c",
      "phone": "01281844723",
      "acceptanceStatus": "scheduled",
      "collegeId": "200666",
      "createdAt": "2023-08-21T18:53:30.559Z",
      "email": "conradcarr@comtours.com",
      "firstPrefKnowledge": "Consectetur aute sunt dolore in Lorem incididunt laboris nostrud aliquip est irure pariatur excepteur sunt. Id dolore ea cillum Lorem. Lorem ad excepteur ea exercitation labore deserunt minim anim consequat esse adipisicing excepteur.\r\n",
      "firstPrefReason": "Esse tempor occaecat dolor pariatur aute dolor ea consequat ut magna excepteur officia. Enim reprehenderit ipsum cupidatat dolor anim aute velit in laborum occaecat. Ea et adipisicing quis magna aliqua proident non consequat reprehenderit aute culpa officia mollit minim. Ullamco enim ipsum velit nostrud tempor aliquip do ut eiusmod. Dolore voluptate ullamco voluptate laborum irure quis incididunt id irure culpa in officia aliquip Lorem.\r\n",
      "firstPreference": "arm",
      "name": "Noble Britt",
      "pastExperience": "Est minim proident pariatur ullamco mollit duis ipsum elit ea sunt minim nisi in ullamco. Fugiat magna qui ad duis aliquip dolor elit aute pariatur. Anim exercitation cupidatat pariatur do culpa sit exercitation aute occaecat in deserunt aliquip magna irure. Sint est dolore eiusmod non pariatur non ut cillum aute. Pariatur minim laboris reprehenderit veniam. Et sint commodo occaecat cillum.\r\n",
      "updatedAt": "2023-08-21T18:53:30.559Z",
      "year": "Junior"
    },
    {
      "_id": "64e3b2aaf681edf9a13812c3",
      "phone": "01296246735",
      "acceptanceStatus": "emailed",
      "collegeId": "200467",
      "createdAt": "2023-08-21T18:53:30.559Z",
      "email": "noblebritt@comtours.com",
      "firstPrefKnowledge": "Amet aliquip voluptate incididunt aliqua. Sint cupidatat pariatur incididunt minim reprehenderit cupidatat incididunt sint eu ex in excepteur nulla. Fugiat duis enim quis irure incididunt minim commodo ex nostrud cillum consequat. Anim mollit anim adipisicing minim commodo. Deserunt non adipisicing amet occaecat adipisicing ut enim est fugiat. Minim et minim culpa ullamco do mollit sint. Esse dolor amet consequat Lorem.\r\n",
      "firstPrefReason": "Ea pariatur et proident sit commodo aliqua dolore id reprehenderit. Sit enim sint esse quis consectetur dolor Lorem ut non duis et voluptate. Minim elit cillum cillum ullamco magna.\r\n",
      "firstPreference": "arm",
      "name": "Erica Francis",
      "pastExperience": "Excepteur est officia ut sint qui deserunt id excepteur voluptate ea irure quis nostrud. Qui do enim aliquip adipisicing amet. Aute ea adipisicing et excepteur id aliquip anim aute mollit velit reprehenderit.\r\n",
      "updatedAt": "2023-08-21T18:53:30.559Z",
      "year": "Senior 2"
    },
    {
      "_id": "64e3b2aacec72f34b629f605",
      "phone": "01293747833",
      "acceptanceStatus": "filtered",
      "collegeId": "200469",
      "createdAt": "2023-08-21T18:53:30.559Z",
      "email": "ericafrancis@comtours.com",
      "firstPrefKnowledge": "Irure excepteur incididunt fugiat cillum Lorem officia deserunt occaecat. Duis consequat dolore Lorem pariatur qui veniam deserunt cupidatat quis magna sunt consequat incididunt tempor. Veniam dolor eu officia labore labore laborum anim nisi nulla reprehenderit culpa. Exercitation eiusmod eiusmod minim ex occaecat commodo.\r\n",
      "firstPrefReason": "Consequat Lorem ex commodo pariatur voluptate laborum reprehenderit voluptate amet commodo ipsum sunt fugiat nulla. Qui sint id nulla laborum sunt duis ullamco voluptate cillum culpa veniam exercitation. Deserunt labore duis fugiat officia ex adipisicing enim consectetur elit incididunt id laborum sunt. Amet nisi enim exercitation do dolore tempor aliquip nulla ullamco qui ut dolor. Laborum irure officia culpa esse officia esse enim irure.\r\n",
      "firstPreference": "desktop",
      "name": "Harding Tillman",
      "pastExperience": "Sunt ea dolor amet qui deserunt cillum est. Deserunt in commodo irure amet qui in. Qui sunt commodo consectetur proident incididunt sint occaecat.\r\n",
      "updatedAt": "2023-08-21T18:53:30.559Z",
      "year": "Sophomore"
    },
    {
      "_id": "64e3b2aab6fdcb7639bb2bfd",
      "phone": "01285256635",
      "acceptanceStatus": "rejected",
      "collegeId": "200026",
      "createdAt": "2023-08-21T18:53:30.559Z",
      "email": "hardingtillman@comtours.com",
      "firstPrefKnowledge": "Pariatur in ea deserunt officia cillum adipisicing minim qui laboris do dolor consectetur aute velit. Occaecat est id consequat aliquip duis Lorem do ut. Pariatur consectetur culpa veniam mollit. Magna esse occaecat eu proident pariatur commodo. Mollit labore sit aute Lorem incididunt reprehenderit dolore esse do consectetur dolor. Ea elit dolore exercitation eiusmod voluptate sit velit sunt. Aute magna officia consectetur deserunt magna esse nostrud ex commodo.\r\n",
      "firstPrefReason": "Ullamco ex minim culpa enim dolor magna in magna qui sunt. Elit exercitation anim irure velit sint pariatur et deserunt sunt. Culpa culpa dolor aute et sint commodo dolore.\r\n",
      "firstPreference": "fullstack",
      "name": "Connie Puckett",
      "pastExperience": "Sit dolore est commodo anim voluptate do ea elit. Proident exercitation qui irure et do eiusmod excepteur irure. Voluptate incididunt elit amet do proident aute commodo esse qui. Consectetur minim proident eiusmod dolor non aliqua eu irure ea enim cupidatat mollit eiusmod excepteur. Nisi reprehenderit quis amet minim sint veniam qui. Proident ullamco ullamco reprehenderit officia magna Lorem laboris ipsum nostrud. Ut velit velit laborum sunt.\r\n",
      "updatedAt": "2023-08-21T18:53:30.560Z",
      "year": "Junior"
    },
    {
      "_id": "64e3b2aa6372ea5b9c457e7d",
      "phone": "01289446322",
      "acceptanceStatus": "filtered",
      "collegeId": "200808",
      "createdAt": "2023-08-21T18:53:30.560Z",
      "email": "conniepuckett@comtours.com",
      "firstPrefKnowledge": "Dolore quis enim ad adipisicing elit ea aliquip fugiat sint sint nulla excepteur. Nostrud cupidatat ullamco ea do. Elit est cillum deserunt aliquip qui. Nulla officia nostrud in adipisicing nostrud exercitation ut sit. Aute eiusmod deserunt minim laboris sit pariatur tempor aute laboris irure.\r\n",
      "firstPrefReason": "Cupidatat sit ut laborum id cillum ex reprehenderit eu tempor et. Velit dolor voluptate esse elit aute officia commodo est cillum in. Amet sit esse consequat fugiat mollit cillum excepteur amet consequat aliquip ipsum qui.\r\n",
      "firstPreference": "python",
      "name": "Pruitt Garza",
      "pastExperience": "Laborum consequat in irure mollit velit aute do qui pariatur velit officia laborum. Nostrud veniam ipsum est nisi enim velit aute cupidatat veniam cillum deserunt. Irure irure eiusmod ut pariatur dolor enim irure do veniam nulla enim incididunt laboris. Sit tempor consequat sint tempor aute Lorem aute excepteur.\r\n",
      "updatedAt": "2023-08-21T18:53:30.560Z",
      "year": "Sophomore"
    },
    {
      "_id": "64e3b2aa476451ec49c64c31",
      "phone": "01288740736",
      "acceptanceStatus": "filtered",
      "collegeId": "200458",
      "createdAt": "2023-08-21T18:53:30.560Z",
      "email": "pruittgarza@comtours.com",
      "firstPrefKnowledge": "Veniam nostrud sunt id ullamco tempor anim pariatur aliquip aliquip fugiat eu id. Labore eu fugiat occaecat cillum enim. Enim sint Lorem id laborum magna ad deserunt. Esse id aliquip laborum ipsum eu. Nisi id do pariatur ex non aliquip ea consectetur deserunt proident commodo ea.\r\n",
      "firstPrefReason": "Nisi Lorem excepteur non ea fugiat cupidatat amet pariatur Lorem incididunt. Cillum qui ea quis excepteur consequat excepteur culpa. Consequat eu quis consectetur dolor nulla quis laboris incididunt adipisicing voluptate nulla laborum. Magna nulla et esse dolor. In in excepteur id sunt dolore velit dolore consequat sunt occaecat incididunt anim consectetur adipisicing. Veniam id amet do reprehenderit. Duis in mollit ipsum ipsum irure amet.\r\n",
      "firstPreference": "fullstack",
      "name": "Vega Hoffman",
      "pastExperience": "Aliquip fugiat commodo elit quis dolore deserunt in consectetur pariatur proident adipisicing non adipisicing enim. Laborum ut voluptate ea qui in consectetur nostrud ipsum dolor. Incididunt quis ex enim esse in ut amet non fugiat ipsum cupidatat exercitation veniam. Nisi in elit ea minim culpa tempor sunt irure dolore reprehenderit occaecat eiusmod ea cupidatat. Cupidatat aute non et occaecat ad proident qui sit. Duis et ullamco anim ipsum eu.\r\n",
      "updatedAt": "2023-08-21T18:53:30.561Z",
      "year": "Freshmen"
    },
    {
      "_id": "64e3b2aa4a968ba6e4fc757e",
      "phone": "01288242829",
      "acceptanceStatus": "emailed",
      "collegeId": "200232",
      "createdAt": "2023-08-21T18:53:30.561Z",
      "email": "vegahoffman@comtours.com",
      "firstPrefKnowledge": "Nisi voluptate velit sit sunt laborum. In magna nulla cillum enim culpa cillum eiusmod esse ut exercitation amet labore. Est non cupidatat duis magna officia adipisicing voluptate deserunt voluptate tempor elit est id aute. Velit anim mollit qui commodo eu id anim nisi veniam.\r\n",
      "firstPrefReason": "Do esse nisi culpa esse voluptate velit elit magna ad. Sit veniam elit culpa duis. Enim non eiusmod aute nulla. Consectetur sit in commodo aliqua amet ipsum duis amet Lorem consectetur ea do.\r\n",
      "firstPreference": "digital",
      "name": "Mccoy Meyers",
      "pastExperience": "Laborum anim aliquip do adipisicing exercitation elit velit esse. Lorem aute do cillum amet commodo laborum duis qui aliquip exercitation qui. Cillum quis tempor pariatur veniam tempor dolore nulla enim consequat id qui officia officia. Nostrud exercitation irure et dolore et aute laborum.\r\n",
      "updatedAt": "2023-08-21T18:53:30.561Z",
      "year": "Sophomore"
    },
    {
      "_id": "64e3b2aa3a14596c52cdf1eb",
      "phone": "01298351624",
      "acceptanceStatus": "emailed",
      "collegeId": "200297",
      "createdAt": "2023-08-21T18:53:30.561Z",
      "email": "mccoymeyers@comtours.com",
      "firstPrefKnowledge": "Labore Lorem sunt esse incididunt. Cillum dolor ex laboris laboris magna do voluptate elit sint in do anim. Pariatur non nisi dolore quis adipisicing ut enim.\r\n",
      "firstPrefReason": "Commodo aute qui nostrud magna reprehenderit est irure. Culpa magna id velit ea commodo id sint esse exercitation non et. Nisi nisi officia est quis irure ea non eu deserunt commodo proident exercitation veniam laboris. Nisi proident reprehenderit occaecat occaecat mollit culpa minim.\r\n",
      "firstPreference": "frontend",
      "name": "Craft Cabrera",
      "pastExperience": "Sint sit eu fugiat exercitation ex dolore enim. Aliquip consequat veniam sunt culpa dolor ad pariatur eu laborum aliqua amet. Aute excepteur ipsum dolore exercitation magna voluptate minim excepteur ipsum exercitation et. Voluptate quis fugiat quis magna quis laboris cupidatat officia occaecat occaecat exercitation consequat et non. Do ea cupidatat non ut enim consequat sint ut nisi. Commodo nisi elit sit aliquip in non et.\r\n",
      "updatedAt": "2023-08-21T18:53:30.561Z",
      "year": "Freshmen"
    },
    {
      "_id": "64e3b2aae2b24a8390caaea8",
      "phone": "01288454723",
      "acceptanceStatus": "rejected",
      "collegeId": "200497",
      "createdAt": "2023-08-21T18:53:30.561Z",
      "email": "craftcabrera@comtours.com",
      "firstPrefKnowledge": "Reprehenderit voluptate officia voluptate Lorem dolore id. Do reprehenderit elit eu aliqua. Do velit pariatur magna ullamco irure ad. Aliquip sunt tempor reprehenderit consectetur pariatur proident. Et laboris in deserunt occaecat ipsum elit consectetur ipsum non deserunt irure.\r\n",
      "firstPrefReason": "Veniam esse tempor mollit laborum deserunt. Ipsum eu do proident eiusmod culpa mollit aute. Fugiat ut eu velit excepteur officia nulla esse occaecat ex est aliqua proident sit cillum. Quis labore non id consequat ad anim. Sint nisi velit duis dolor elit. Consequat amet in eu ullamco veniam amet.\r\n",
      "firstPreference": "digital",
      "name": "Park Rivers",
      "pastExperience": "Sint mollit laborum reprehenderit dolore officia officia labore eu. Adipisicing sit do ea eiusmod. Elit in labore irure proident et ex proident non ex in qui. Cupidatat pariatur mollit enim esse ex non dolore deserunt fugiat nulla dolor voluptate consectetur. In amet dolor non ea ipsum officia sunt enim ad laborum fugiat laborum commodo.\r\n",
      "updatedAt": "2023-08-21T18:53:30.561Z",
      "year": "Senior 2"
    },
    {
      "_id": "64e3b2aaf71c7f61305b0a24",
      "phone": "01289753835",
      "acceptanceStatus": "scheduled",
      "collegeId": "200435",
      "createdAt": "2023-08-21T18:53:30.561Z",
      "email": "parkrivers@comtours.com",
      "firstPrefKnowledge": "Deserunt ullamco quis do occaecat enim ullamco deserunt. Ipsum non ea cupidatat in. Nulla Lorem dolore ut nostrud duis veniam amet fugiat reprehenderit aliquip deserunt voluptate. Aute sit deserunt ea mollit proident. Commodo commodo officia ex elit sunt reprehenderit magna.\r\n",
      "firstPrefReason": "Do sint dolore excepteur consequat aute tempor ullamco excepteur do eiusmod incididunt est id. Laboris amet ex id anim excepteur duis ad ad nisi pariatur dolore enim commodo. Duis sint qui dolor consectetur. Dolore dolore laboris duis deserunt pariatur eiusmod adipisicing consequat ea Lorem amet sint. Cupidatat voluptate labore labore irure quis adipisicing ex magna pariatur culpa id elit dolore aliqua.\r\n",
      "firstPreference": "python",
      "name": "Betsy Gallagher",
      "pastExperience": "In velit do mollit aliqua do amet. Aliquip nulla velit ea aute minim aute in mollit id. Velit magna aute irure in non. Laboris quis exercitation non aliquip et commodo ullamco.\r\n",
      "updatedAt": "2023-08-21T18:53:30.561Z",
      "year": "Junior"
    }
  ]

export default dummyParticipants as Participant[]