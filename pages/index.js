// import MeetupList from "@/components/meetups/MeetupList";

import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";
import Head from "next/head";

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'A First Meetup',
//     image:
//       'https://img.freepik.com/premium-photo/husainabad-clock-tower_78361-2526.jpg?w=2000',
//     address: 'Some address 5, 12345 Some City',
//     description: 'This is a first meetup!',
//   },
//   {
//     id: 'm2',
//     title: 'A Second Meetup',
//     image:
//       'https://img.freepik.com/premium-photo/husainabad-clock-tower_78361-2526.jpg?w=2000',
//     address: 'Some address 10, 12345 Some City',
//     description: 'This is a second meetup!',
//   },
//   {
//     id: 'm3',
//     title: 'A Third Meetup',
//     image:
//       'https://img.freepik.com/premium-photo/husainabad-clock-tower_78361-2526.jpg?w=2000',
//     address: 'Some address 15, 123456 Some City',
//     description: 'This is a third meetup!',
//   },
// ];

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://nihar078:hQl21s8e5iZjJ7bP@cluster0.ghenp8l.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  // //or
  // const response = await fetch("/api/meetups")
  // const meetups = await response.json()     // these not work comes error

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
