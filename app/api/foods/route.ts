async function GET(request: Request) {
  const res = await fetch(`${process.env.DATABASE_API_URL}`);
  const data = await res.json();
  return Response.json(data);
}
export { GET };
