import React from 'react';
import * as axios from 'axios';
import {Field, reduxForm} from 'redux-form'
import {Textarea} from "../common/FopmsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


class Users extends React.Component {
    componentDidMount() {
        axios.get("https://swapi.co/api/people/?format=json&page=2")
            .then(response => {
                this.props.setUsers(response.data.results);

            });
    }



    addNewMessage = (values) => {
        this.props.addMessage(values.newMessageElement)
    }


    render() {

        return <div>
            <MessageReduxForm onSubmit={this.addNewMessage}/>
            {

                this.props.users.map(u => <div key={u.created}>



                <span>

                    <span>
                        <div>{u.name}</div>
                        <div>{u.hair_color}</div>
                    </span>
                    <span>
                        <div>{u.height}</div>
                        <div>{u.mass}</div>
                    </span>
                    <div>

                           <button onClick={() => {
                               this.props.unfollow(u.id)
                           }}>Delete</button>


                    </div>
                </span>
                </div>)
            }
        </div>
    }
}
const maxLength20 = maxLengthCreator (20)
const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder='Add new actor...'
                        component={Textarea}
                        name="newMessageElement"
                        validate={[required, maxLength20]}>
                </Field>
            </div>
            <div>
                <button >Add actor</button>
            </div>
        </form>
    )
}
const MessageReduxForm = reduxForm({form: "messegeDialogsForm"})(AddMessageForm)


export default Users;












