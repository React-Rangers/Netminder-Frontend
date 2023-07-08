import { gql } from "@apollo/client";

export const ADD_TASK = gql`
    mutation Mutation($taskDescription: String!, $contactFirstName: String!, $contactLastName: String!, $reminderDate: String!, $contactPhone: String, $contactEmail: String) {
        createTask(taskDescription: $taskDescription, contactFirstName: $contactFirstName, contactLastName: $contactLastName, reminderDate: $reminderDate, contactPhone: $contactPhone, contactEmail: $contactEmail) {
            _id
            taskDescription
        }
    }
`

export const ADD_PROFILE = gql`
    mutation Mutation($username: String!, $email: String!, $password: String!) {
        createProfile(username: $username, email: $email, password: $password) {
        username
        password
        email
        }
    }
`

export const LOGIN = gql`
    mutation Mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`