"use client"
type Props = {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}

const Button = ({onClick, disabled, children}: Props) => {
  return (
    <button className=" bg-sky-700 py-2 px-3 rounded-lg text-white hover:opacity-90" onClick={onClick} disabled={disabled} >
        {children}
    </button>
  )
}

export default Button