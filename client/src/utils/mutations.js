// import { gql } from '@apollo/client';
import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        saveBooks {
            bookId
            title
            description
            authors
            link
            image
        }

      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
        user {
          _id
          username
          email
          bookCount
          saveBooks {
              bookId
              title
              description
              authors
              link
              image
          }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: bookInput!) {
        saveBook(input: $input) {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                image
                description
                title
                link
            }
        }
    }
`;

// mutation to remove books
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                image
                description
                title
                link
            }
        }
    }
`;


// export const ADD_THOUGHT = gql`
//   mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {
//     addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//       }
//     }
//   }
// `;

// export const ADD_COMMENT = gql`
//   mutation addComment(
//     $thoughtId: ID!
//     $commentText: String!
//     $commentAuthor: String!
//   ) {
//     addComment(
//       thoughtId: $thoughtId
//       commentText: $commentText
//       commentAuthor: $commentAuthor
//     ) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;
