//our-domain.com/new-meetup
import NewMeetupForm from "@/components/meetups/NewMeetupForm"

const NewMeetupPage = ()=>{
    const addMeetupHandler = (enteredMeetupData) =>{
        console.log(enteredMeetupData)
    }

    return(
        <div>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>

        </div>
    )
}

export default NewMeetupPage