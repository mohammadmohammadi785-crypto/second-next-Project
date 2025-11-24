import { notFound } from "next/navigation";
function randomNumber(num: number) {
  return Math.floor(Math.random() * num);
}
export default async function page({
  params,
}: {
  params: Promise<{ post: string; productid: string }>;
}) {
  const { productid } = await params;
  const getrandomNumber = randomNumber(2);
  if (getrandomNumber === 1) {
    throw new Error("Product page error");
  }
  if (+productid > 1000) {
    return notFound();
  }
  return (
    <div>
      <h1 className="text-5xl">this is the product Page {productid}</h1>
    </div>
  );
}
