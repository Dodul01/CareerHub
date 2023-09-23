const SectionHead = ({title = 'Section Title', desc='Section Description'}) => {
  return (
    <div>
      <h1 className="text-center text-5xl font-extrabold">{title}</h1>
      <p className="text-center font-medium text-xs mt-4 text-gray-500">{desc}</p>
    </div>
  )
}

export default SectionHead;