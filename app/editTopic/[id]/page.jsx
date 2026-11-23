// import EditTopicForm from "@/components/EditTopicForm";

// const getTopicById = async (id) => {
//   try {
//     const res = await fetch(
//       `http://localhost:3000/api/topics/${id}`,
//       {
//         cache: "no-store",
//       }
//     );

//     if (!res.ok) {
//       throw new Error("Failed to fetch topic");
//     }

//     return await res.json();
//   } catch (error) {
//     console.log("Error fetching topic:", error);
//     return null;
//   }
// };

// export default async function EditTopic({ params }) {
//   // params is a Promise in newer Next.js
//   const { id } = await params;

//   // Get topic from API
//   const data = await getTopicById(id);

//   // If API didn't return anything
//   if (!data || !data.topic) {
//     return <h1>Topic not found</h1>;
//   }

//   const { title, description } = data.topic;

//   return (
//     <EditTopicForm
//       id={id}
//       title={title}
//       description={description}
//     />
//   );
// }

import EditTopicForm from "@/components/EditTopicForm";
import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditTopic({ params }) {
  const { id } = await params;

  await connectMongoDB();
  const topic = await Topic.findById(id).lean();

  if (!topic) {
    notFound();
  }

  return (
    <EditTopicForm
      id={topic._id.toString()}
      title={topic.title}
      description={topic.description}
    />
  );
}