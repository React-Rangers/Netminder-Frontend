import { gql } from "@apollo/client";

export const ADD_TASK = gql`
    mutation Mutation($taskDescription: String!, $contactFirstName: String!, $contactLastName: String!, $reminderDate: String!, $contactPhone: String, $contactEmail: String) {
        createTask(taskDescription: $taskDescription, contactFirstName: $contactFirstName, contactLastName: $contactLastName, reminderDate: $reminderDate, contactPhone: $contactPhone, contactEmail: $contactEmail) {
            _id
            taskDescription
        }
    }
`