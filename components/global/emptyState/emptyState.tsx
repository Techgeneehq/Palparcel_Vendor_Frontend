const EmptyState = () => {
  return (
    <div className="h-[400px] w-full flex flex-col justify-center items-center text-center font-montserrat text-base font-normal text-[#cecece] bg-white rounded-3xl">
      <p className="w-full">No record</p>
      <p className="w-full">Do you have product? <span className="text-[#FE9900]">Add product</span></p>
    </div>
  )
}

export default EmptyState