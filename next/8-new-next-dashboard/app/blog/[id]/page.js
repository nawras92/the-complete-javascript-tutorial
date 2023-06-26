export default function Page(context) {
  const { params } = context;

  return (
    <div>
      <h3>this is article id: {params?.id}</h3>
    </div>
  );
}
