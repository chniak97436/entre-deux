import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-screen  relative flex justify-center">     
      <Image
        src={"/banniere.jpg"}
        alt="l'entre-deux "
        width={1000}
        height={400}
        className="w-screen absolute object-cover"
        priority={true}
      />
    </div>
  );
}
