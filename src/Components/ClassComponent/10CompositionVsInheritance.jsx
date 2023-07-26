import React, { Component } from 'react'

class UserNameForm extends Component {
    render() {
        return (
            <div>
                <input type="text" />
            </div>
        );
    }
}

// Inheritance

// class CreateUserName extends UserNameForm {
//     render() {
//         const parent = super.render();
//         return (
//             <div>
//                 {parent}
//                 <button>Create</button>
//             </div>
//         )
//     }
// }

// class UpdateUserName extends UserNameForm {
//     render() {
//         const parent = super.render();
//         return (
//             <div>
//                 {parent}
//                 <button>Create</button>
//             </div>
//         );
//     }
// }


// Composition

class CreateUserName extends React.Component {
    render() { 
        return (
            <div>
                <UserNameForm/>
                <button>Create</button>
            </div>
        );
    }
}
 
class UpdateUserName extends React.Component {
    render() { 
        return (
            <div>
                <UserNameForm/>
                <button>Update</button>
            </div>
        );
    }
}
 
export default class CompositionVsInheritance extends Component {
    render() {
        return (
            <div>
                <UpdateUserName />
                <CreateUserName />
            </div>
        )
    }
}
