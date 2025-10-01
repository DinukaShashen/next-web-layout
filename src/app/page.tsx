import Button from "@/components/Button";

export default function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">
        Welcome to Hacktoberfest Next.js 🎉
      </h1>
      <p className="mt-4">This is the demo project</p>
      <p className="mt-2 text-gray-600">
        Explore the About, Contact, and Quotes pages using the navigation above.
      </p>
      <div className="mt-6">
        <Button label="Click Me" onClick={handleClick} />
        <Button
          label="Secondary Button"
          variant="secondary"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
