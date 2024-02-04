import Image from "next/image"
import Link from "next/link"

function Logo() {
  return (
    <Link href={"/"}>
      <Image 
      src={"/image/logo/bird-log.svg"}
      alt="logo"
      width={80}
      height={80}
      property='true'
     
      />
    </Link>
  )
}

export default Logo;