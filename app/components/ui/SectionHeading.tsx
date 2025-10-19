// app/components/ui/SectionHeading.tsx
export default function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-3xl font-bold text-center mb-12">
      <span className="border-b-4 border-blue-500 pb-2">{title}</span>
    </h2>
  );
}
