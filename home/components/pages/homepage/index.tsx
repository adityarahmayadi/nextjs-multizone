import { HomepageProps } from "./types";

const Homepage = ({ title }: HomepageProps) => {
  return(
    <div>
      <h1>Homepage</h1>
      <p>{title}</p>
    </div>
  )
}

export default Homepage