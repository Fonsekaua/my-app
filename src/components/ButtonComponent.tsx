import { Props } from "@/types/ButtonType";

export default function ButtonComponent ({name}:Props) {
    return (
        <button className="p-2 rounded-xl  cursor-pointer w-3/6 bg-blue-900 font-bold uppercase tracking-wide">
            {name}
        </button>
    )
}