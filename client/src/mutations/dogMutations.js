import {gql} from '@apollo/client'

const DELETE_DOG = gql`
mutation {
    deleteDog(id: $id){
        id
        breed
        name
        age
    }
}
`

export {DELETE_DOG}