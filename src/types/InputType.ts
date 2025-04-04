

export type Props = {
    name: string;
    type: string;
    placeholder: string; 
    icon: React.ElementType
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}