import TopicsList from "@/components/TopicsList";
const dns =require( 'node:dns/promises');
// Change DNS
dns.setServers(["8.8.8.8", "1.1.1.1"]);
export default function Home() {
  return <TopicsList />;
}