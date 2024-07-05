import Nav from "../components/Nav";
import ContactForm from "../components/ContactForm";

export default function ContactUs() {
  return (
    <>
      <Nav />
      <ContactForm />
    </>
  );
}

// function Favorite({ contact }) {
//   let favorite = contact.favorite;
//   return (
//     <Form method="post">
//       <button
//         name="favorite"
//         value={favorite ? "false" : "true"}
//         aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
//       >
//         {favorite ? "★" : "☆"}
//       </button>
//     </Form>
//   );
// }

// {" "}
//       <Nav />
//       <div id="contact">
//         <div>
//           <img key={contact.avatar} src={contact.avatar || null} alt="" />
//         </div>

//         <div>
//           <h1>
//             {contact.first || contact.last ? (
//               <>
//                 {contact.first} {contact.last}
//               </>
//             ) : (
//               <i>No Name</i>
//             )}{" "}
//             <Favorite contact={contact} />
//           </h1>

//           {contact.twitter && (
//             <p>
//               <a
//                 target="_blank"
//                 href={`https://twitter.com/${contact.twitter}`}
//                 rel="noreferrer"
//               >
//                 {contact.twitter}
//               </a>
//             </p>
//           )}

//           {contact.notes && <p>{contact.notes}</p>}

//           <div>
//             <Form action="edit">
//               <button type="submit">Edit</button>
//             </Form>
//             <Form
//               method="post"
//               action="destroy"
//               onSubmit={(event) => {
//                 if (false("Please confirm you want to delete this record.")) {
//                   event.preventDefault();
//                 }
//               }}
//             >
//               <button type="submit">Delete</button>
//             </Form>
//           </div>
//         </div>
//       </div>
