type HelloProps = {
    name: string
}

export const Hello = ({name} : HelloProps) => {
    return (
        <>
            Hello {name}
        </>
    );
}