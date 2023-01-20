interface IInput {
  type: string;
  name: string;
  placeholder: string;
  data: {
    value: any;
    onChange: (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
  };
}

export default function Input({ type, name, placeholder, data }: IInput) {
  return (
    <input
      className="w-full h-12 mb-4 outline-none pl-3 border border-black text-base"
      autoComplete="off"
      type={type}
      name={name}
      placeholder={placeholder}
      {...data}
    />
  );
}
