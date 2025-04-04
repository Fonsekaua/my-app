import { Props } from "@/types/InputType";


export default function InputComponent ({name,type,onChange,placeholder,icon:Icon,value}:Props) {
  
    return (
        <>
        <label className="flex flex-col items-start w-2/4">
            {name}
            <div className="p-2 m-1  w-full rounded-l-lg flex items-center justify-between border-b-2 border-b-gray-800 ">
            <Icon className="mr-3" size={25} color="gray"/>
            <input
            name={name}
            onChange={onChange} 
            className="outline-none border-none text-white flex-1"  
            type={type} 
            placeholder={placeholder}
            value={value}
            />
            </div>
        </label>
        </>
    )
}