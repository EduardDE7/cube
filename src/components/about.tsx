import Image from 'next/image';

export const About = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-xl font-semibold">Our History</h2>
      <Image
        className="rounded-md"
        width={300}
        height={300}
        alt="about"
        src="/img/aboutpage.png"
      />
      <p className="text-gray-100 text-base">
        Our company, Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Doloremque ut corrupti enim voluptas qui! Eius reiciendis exercitationem
        enim voluptate animi? Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
};
