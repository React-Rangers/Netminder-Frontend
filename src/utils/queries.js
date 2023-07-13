import { gql } from '@apollo/client';

export const USER_TASKS = gql`
    query userTasks {
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
export const ME_QUERY = gql`
query Me {
  me {
    _id
    username
    email
    password
  }
}
`
