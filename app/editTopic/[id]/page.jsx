import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/topics/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return await res.json();
  } catch (error) {
    console.log("Error fetching topic:", error);
    return null;
  }
};

export default async function EditTopic({ params }) {
  // params is a Promise in newer Next.js
  const { id } = await params;

  // Get topic from API
  const data = await getTopicById(id);

  // If API didn't return anything
  if (!data || !data.topic) {
    return <h1>Topic not found</h1>;
  }

  const { title, description } = data.topic;

  return (
    <EditTopicForm
      id={id}
      title={title}
      description={description}
    />
  );
}