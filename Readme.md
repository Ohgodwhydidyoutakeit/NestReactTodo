# To Do List App - Fullstack Developer Test Task

This repository contains a simple "To Do List" application created as a test task for the Fullstack Developer position. The goal of this task is to build a functional application using the following technologies: TypeScript, React, Docker, and NestJS. The application should allow users to add, remove, and mark tasks as completed. Additionally, the application should include unit tests for key functionalities.

## Table of Contents

- [To Do List App - Fullstack Developer Test Task](#to-do-list-app---fullstack-developer-test-task)
  - [Table of Contents](#table-of-contents)
  - [Frontend](#frontend)
    - [User Interface](#user-interface)
    - [Functionality](#functionality)
    - [Unit Tests](#unit-tests)
  - [Backend](#backend)
    - [API Endpoints](#api-endpoints)
    - [Data Model](#data-model)
    - [Unit Tests Backend](#unit-tests-backend)
  - [Docker](#docker)
    - [Dockerfile](#dockerfile)
    - [docker-compose](#docker-compose)
  - [Instructions](#instructions)
  - [Evaluation Criteria](#evaluation-criteria)
  - [Notes](#notes)

## Frontend

### User Interface

The frontend of the application should feature:

- A list of tasks to be done.
- A text field for entering new tasks.
- A button to add a new task.
- For each task, a button to delete it and a checkbox to mark it as completed.

### Functionality

The frontend should provide the following functionalities:

- Adding a new task to the list.
- Removing a task from the list.
- Marking a task as completed (changing its appearance to crossed out).

### Unit Tests

Unit tests should be implemented for the following functionalities:

- Adding a new task.
- Removing a task.
- Marking a task as completed.

## Backend

### API Endpoints

The backend of the application should expose the following API endpoints:

- `POST /tasks` - Adding a new task.
- `DELETE /tasks/:id` - Removing a task.
- `PATCH /tasks/:id` - Updating a task (marking it as completed).

### Data Model

The data model for a task is as follows:

```json
{
  "id": number,
  "content": string,
  "done": boolean
}
```

### Unit Tests Backend

Unit tests should be implemented for the following API endpoints:

- Testing the endpoint for adding a task.
- Testing the endpoint for removing a task.
- Testing the endpoint for updating a task.

## Docker

### Dockerfile

Dockerfiles should be created for both the frontend and backend.

### docker-compose

The application should be launched using `docker-compose`, which will orchestrate the deployment of both the frontend and backend components.

## Instructions

1. Start by creating a new NestJS project for the backend and a new React project for the frontend.
2. Implement the functionalities mentioned above.
3. Write unit tests for the key functionalities.
4. Ensure that the application and tests work correctly both locally and within a Docker container.
5. Pay attention to code quality, project structure, and error handling.

## Evaluation Criteria

The assessment of the application will consider the following aspects:

- Correct functionality of the application.
- Quality and structure of the code.
- Proper use of TypeScript in both parts of the application.
- Correct use of Docker and `docker-compose`.
- Server error handling and responses.
- Code coverage by unit tests and the quality of the tests.

## Notes

- Focus on delivering a Minimum Viable Product (MVP). Advanced UI or additional features are not required.
- If you run out of time, prioritize the key functionalities.
- Best of luck with your implementation!
