type TextProps = {
    title: string
}

const Title = ({title}:TextProps) => {
  return (
    
      <h2 className="my-6 text-5xl capitalize">{title}</h2>
   
  )
}
export default Title