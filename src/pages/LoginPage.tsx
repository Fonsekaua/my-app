import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import { Props } from "@/types/LoginType";
import { useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa6";

export default function LoginPage() {
    useEffect(() => {
        document.title = "Página de Login";
      }, []);
    const [login, setLogin] = useState<Props>({
        name: "",
        email: "",
        password: ""
    })
    function state(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setLogin((prev) => ({ ...prev, [name]: value }))

    }
    return (
        <main className="flex justify-between items-center bg-gray-900 w-screen h-screen">
            <section className="flex flex-col gap-10  w-1/2 p-5">

                <h1 className="p-5 rounded-full bg-red-500 font-extrabold uppercase text-center">Olá caro meu caro Usuario !!</h1>
                <p className="p-5 bg-blue-500 rounded-2xl self-center w-3/4">Faça login em nosso sistema para poder vizualizar as vagas disponiveis, ou mesmo...</p>
                <ul className="flex flex-col">
                    <li className=" bg-purple-500 w-2/4 p-3 rounded-full text-center">
                        Adicionar Vagas
                    </li>
                    <li className="self-end  bg-green-500 w-2/4 p-3 rounded-full text-center">
                        Editar vagas
                    </li>
                    <li className=" bg-yellow-500 w-2/4 p-3 rounded-full text-center">
                        Estilizar seu ambiente
                    </li>
                    <li className="self-end  bg-orange-500 w-2/4 p-3 rounded-full text-center">
                        Futuramente muito mais !!
                    </li>
                </ul>
            </section>

            <form className="flex w-1/2 capitalize flex-col justify-around h-2/4 items-center text-white">
                <InputComponent
                    name="name"
                    type="text"
                    placeholder="Opa! como devemos te chamar?..."
                    icon={FaUser}
                    onChange={state}
                    value={login.name}
                />
                <InputComponent
                    name="email"
                    type="email"
                    placeholder="Digite seu email..."
                    icon={FaEnvelope}
                    onChange={state}
                    value={login.email}
                />
                <InputComponent
                    name="password"
                    type="password"
                    placeholder="Digite sua senha..."
                    icon={FaLock}
                    onChange={state}
                    value={login.password}
                />
                <ButtonComponent
                   name="Login"
                />    

            </form>
        </main>
    )
}