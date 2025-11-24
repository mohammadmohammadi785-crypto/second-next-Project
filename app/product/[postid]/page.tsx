import { notFound } from "next/navigation";
function randomNumber(num: number) {
  return Math.floor(Math.random() * num);
}
export default async function page({
  params,
}: {
  params: Promise<{ post: string; postid: string }>;
}) {
  const postid = (await params).postid;
  const getrandomNumber = randomNumber(2);
  if (getrandomNumber === 1) {
    throw new Error("Post page error");
  }
  if (+postid > 1000) {
    return notFound();
  }
  return (
    <div>
      <h1 className="text-5xl">this is the product Page {postid}</h1>
    </div>
  );
}
