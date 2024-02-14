[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/DvX50mf9)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13375147&assignment_repo_type=AssignmentRepo)
# Challenge 1 - Airport Challenge

```
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

```

---

## Introduction

We have a request from a client to help them with some software to control the flow of planes at an airport.

> Before proceeding, ensure that you have a solid understanding of why the customer needs this software and the benefits that it will bring to them (See Task 1).

### Core Features

The Business Analyst team working with the client has identified the following features that should be implemented:

- A representation of the airport is needed in the software that defines the maximum capacity of the number of planes that can be at the airport at any one time
  - This capacity should have the ability to be overridden as appropriate
- Air Traffic Controllers need to be able to:
  - Instruct a plane to land at an airport if the airport is not full and the plane is not already at the airport
  - Instruct a plane to take off from an airport as long as it is currently at the airport

> **Note:** The use of a generative AI tool to complete tasks relating to the specific requirements above is NOT allowed.  All work here should be your own.

### Additional Features

In addition to these features, the client has asked for the following functionality to be implemented if time allows you to do so:

- Planes must not be able to land if the weather is stormy
- Planes must not be able to take off if the weather is stormy

> **Note:** The use of a generative AI tool to help complete tasks relating to these further requirements is allowed but should be clearly documented.

---

## Tasks

1. Explain the benefits of the software to the client - why they need it and how it will help them. You should include:
   - The problem that the software is solving
   - The benefits that the software will bring to the client
   - The risks associated with the software
2. From the requirements listed above, devise a set of user stories that describe the functionality that the client has requested
3. From these user stories, create a domain model to describe how the objects will use messages to communicate with one another
4. Using a test-driven approach, implement the code necessary to implement the functionality described in the user stories
5. Create a program that will run in the terminal (without any user input) that demonstrates the functionality of the code based on the user stories

After the submission deadline, you will be expected to perform a review of your own code.  Guidelines for this will be announced by your trainer.

---

### Tips

- Commit regularly to GitHub with clear commit messages - write a failing test, pass the test, commit, etc
- You should put your domain models and test plans in the markdown file in the `docs` folder, if you decide to use some form of Kanban board to track your progress, you should include a screenshot of this in the markdown file
- Your code files should be stored in the `src` folder
  - There is already a file `airport.js` to hold code relating to the airport
  - You should hold other discrete code files in this folder as appropriate
  - You should populate the `src/index.js` file that will run the program in the terminal using the command `npm start` - it should be obvious from the output what the program is doing and which requirement(s) it is fulfilling
- Your test files should be stored in the `spec` folder
  - There is already a file `airport.test.js` to hold tests relating to the airport (there is no need to provide tests for the `index.js` file)
  - You should hold other discrete test files in this folder as appropriate
  - You should populate the `specRunner.js` file to run all tests in the terminal using the command `npm test` - it should be obvious from the test output what the test is testing and which requirement(s) it is testing
- Add comments to your code to help explain the functionality of the code - even if you don't complete the code, this will help your trainer understand your thought process
- Use modern `import` and `export` syntax to import and export code between files rather than `require` and `module.exports` syntax

---

## Grading Criteria

### Digital Futures Software Engineering Progression Management Framework

In this Challenge, you will have the opportunity to demonstrate the following competencies from the Software Engineering Progression Management framework:

---

#### Writes software that meets a user’s functional and non-functional requirements

|               | Description                                                                                                                                                                                        | Where assessed?                 |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| ***Level 1*** | The engineer can code a solution that functionally and non-functionally meets requirements for a **small number** of **basic** requirements (e.g. requirements requiring a single function/block of code to fulfil) | Code submitted                  |
| ***Level 2*** | The engineer can code a solution that functionally and non-functionally meets requirements for a **small number** of **simple** requirements (e.g. requirements requiring multiple functions to fulfil)             | Code submitted                  |
| ***Level 2*** | The engineer can **review** their **own code** identifying opportunities to improve it                                                                                                             | Review of code after submission |

---

#### Can interpret business requirements into coding requirements
  
|               | Description                                                                                                                                                                                                  | Where assessed?                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| ***Level 1*** | The engineer can create **simple user stories** from user requirements (i.e. clearly defined story using “As a”, “Able to”, “So that” or “Given/When/Then” structure that could be solved using simple code) | Markdown file in `docs` folder  |
| ***Level 2*** | The engineer can create **domain models** for **simple user stories**                                                                                                                                        | Markdown file in `docs` folder  |
| ***Level 2*** | The engineer can create **domain models** for **simple user stories** using **simple, suitable prompts** and a **Generative AI tool** (such as Chat-GPT)                                                     | Markdown file in `docs` folder  |

---

#### Develop code through Test-Driven Development and/or Behaviour Driven Development

|               | Description                                                                                                                                                                                                 | Where assessed?                        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| ***Level 1*** | The engineer can write **tests** and/or **working code** that passes some **rudimentary** tests that they have written checking the code’s main functionality using a **simple** testing framework (e.g. asserting the main purpose of the code works, e.g a function returns the correct value) | Code submitted |
| ***Level 2*** | The engineer can write **tests** and/or **working code** that demonstrates that the **TDD process** has been followed through a commit history with clear commit messages                                   | Code submitted - GitHub commit history |

---

#### Writes clean code

|                | Description                                                                                                                                                                        | Where assessed? |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| ***Level 1***  | The engineer can write code that is **functionally correct** using **simple** coding structures (loops, conditionals, data structures, etc)                                        | Code submitted  |
| ***Level 2***  | The engineer can write code that is **functionally correct** using applying **some** principles of clean-coding (e.g. 5-line functions, no nested loops or conditional statements) | Code submitted  |

---

### Digital Futures Professional Skills Progression Management Framework

In this Challenge, you will have the opportunity to demonstrate the following competencies from the Professional Skills Progression Management framework:

---

#### Communications

|               | Description                                                                                            | Where assessed?                |
| ------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------ |
| ***Level 1*** | Can express themselves fluently in both verbal and written English                                     | Markdown file in `docs` folder |
| ***Level 1*** | Demonstrates attentive listening                                                                       | During assignment introduction |
| ***Level 2*** | Convey technical information to technical stakeholders in both verbal and written forms                | Markdown file in `docs` folder |
| ***Level 2*** | Creates content to a professional standard that is concise, well-structured, and grammatically correct | Markdown file in `docs` folder |

---

#### Professional Development (Assessed after submission via Self-Review)

|               | Description                                                                                                    | Where assessed?                  |
| ------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| ***Level 1*** | Demonstrates self-awareness by identifying areas of strength and self-improvement (via review)                 | Review comments after submission |
| ***Level 2*** | Applies self-reflective frameworks to highlight actions, decisions, and experiences to learn from (via review) | Review comments after submission |

---

#### Business Awareness

|               | Description                                                                                                                                  | Where assessed?                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| ***Level 1*** | Recognises importance of customer/stakeholder-centricity                                                                                     | Markdown file in `docs` folder                     |
| ***Level 2*** | Applies basic requirement elicitation techniques and can gather and document simple requirements that align towards the business’ objectives | Markdown file in `docs` folder                     |
| ***Level 3*** | Creates clear project documentation detailing project objectives, approach and results                                                       | Markdown file in `docs` folder and in code files   |
| ***Level 3*** | Applies prioritisation techniques to ensure resource efficiency and project alignment within timescales and business objectives              | Markdown file in `docs` folder (Trello screenshot) |

---

#### Adaptability

|               | Description                                                                                       | Where assessed?                                  |
| ------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| ***Level 2*** | Understands fundamental Agile terms, such as User Stories, Scrum, Kanban, and the Agile Manifesto | Project files and Markdown file in `docs` folder |
| ***Level 3*** | Demonstrates experimentation with different approaches, tools, or methods                         | Project files and Markdown file in `docs` folder |

---

## Submission

Your Challenge attempt should be submitted via commits to the forked project from GitHub Classroom.  Your trainer will have supplied you with the appropriate link to do access this, you need to take no further action on this platform.  To indicate that you have completed the Challenge, you should you the Assignment Submission link in the Challenge course for your Cohort on Noodle.  The Progression Management Frameworks will be assessed via a marking rubric in Noodle and you will be able to see how you performed in each competency.

You are not permitted to collaborate with anyone to complete this challenge.  You should complete the *Core Functionality* using traditional skills, knowledge and understanding of software engineering and all code submitted for this should be your own.  You may use a *Generative AI tool* to help you complete the *Additional Functionality* but this should be clearly documented.

---

## Feedback

After submission of your challenge attempt, your trainer will record and submit feedback in Noodle and/or via GitHub for comments in your code .  You will then be able to view this feedback via Noodle and your GitHub account.

Your trainer will also provide general feedback to the cohort via the Discord channel.

---
