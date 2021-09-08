export default function Container({children}){
    return (
        <div className="container mx-auto md:px-10">
            {children}
        </div>
    )
}