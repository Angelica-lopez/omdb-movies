import SadFace from "../../assets/images/sad-face.jpeg";

const Card = ({ image, title, year, type }) => {
  return (
    <div className='rounded-md p-6 bg-white flex flex-col gap-4  items-center max-w-[350px] justify-between'>
      <div className='flex flex-col gap-4'>
        <img
          className='rounded-md w-[250px] h-[280px] m-auto'
          src={image === "N/A" ? SadFace : image}
          alt='Movie poster'
        />
        <h1 className='text-[#6FBED6] font-semibold text-lg'>{title}</h1>
      </div>
      <div className=' w-full'>
        <div className='bg-white p-1 flex gap-2'>
          <span className='text-[#6FBED6] text-xs'>Release year:</span>
          <span className='text-black text-xs'>{year}</span>
        </div>
        <div className='bg-white p-1 flex gap-2'>
          <span className='text-[#6FBED6] text-xs'>Type:</span>
          <span className='text-black text-xs'>{type}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
