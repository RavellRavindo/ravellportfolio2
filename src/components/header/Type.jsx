import { useTypewriter, Cursor } from 'react-simple-typewriter';


const Type = () => {
  const [text] = useTypewriter({
    words: ["Nice to meet you!", "Scrolling down to see more!"],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 80
  })

  return (
    <div>
        <h1>
          <span>{text}</span>
          <Cursor cursorColor='grey' />
        </h1>
    </div>
  )
}

export default Type