import { useRef } from 'react';

import classes from './NewMeetupForm.module.css';
import Card from '../UI/Card';

function NewMeetupForm(props){
    const titleRef = useRef();
    const imageRef = useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();

    function handleSubmission (event) {
        event.preventDefault();

        const enteredTitle = titleRef.current.value;
        const enteredimage = imageRef.current.value;
        const enteredAddress = addressRef.current.value;
        const enteredDescription = descriptionRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredimage,
            address: enteredAddress,
            description: enteredDescription,
        };
        props.onAddMeetup(meetupData);
    }

    return <Card>
        <form className={classes.form} onSubmit={handleSubmission}>
            <div className={classes.control}>
                <label htmlFor='title'> Meetup Title</label>
                <input type="text" required id="title" ref={titleRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'> Meetup Image</label>
                <input type="url" required id="image" ref={imageRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='address'> Address</label>
                <input type="text" required id="address" ref={addressRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea type="text" required id="description" ref={ descriptionRef } /> 
            </div>
            <div className={classes.action}>
                <button type='submit'> Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewMeetupForm;