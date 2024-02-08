import { ComponentChild, JSX } from "preact";

type Props = JSX.HTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: { value: string; label: string }[];
};

export function Select({ label, options, id, ...props }: Props) {
  return (
    <div>
      <label for={id} class="block mb-3 text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        {...props}
        id={id}
        class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
