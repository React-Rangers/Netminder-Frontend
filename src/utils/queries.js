import { gql } from '@apollo/client';

export const USER_TASKS = gql`
    query Query {
        me {
            tasks {
                _id
                task
                contactEmail
                contactFirstName
                contactLastName
                contactPhone
                dateCreated
                reminderDate
                taskDescription
            }
        }
    }
`