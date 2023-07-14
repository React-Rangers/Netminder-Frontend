import { gql } from '@apollo/client'

export const USER_TASKS = gql`
  query Query {
    me {
      username
      tasks {
        _id
        dateCreated
        contactFirstName
        reminderDate
        contactLastName
        contactEmail
        contactPhone
        taskDescription
        type
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
