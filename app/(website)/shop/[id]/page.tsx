const ProductCategory = ({ params }: { params: { id: string } }) => {
   return (
      <div>
         <h1>ProductCategory</h1>
         <p>{params.id}</p>
      </div>
   )
}
export default ProductCategory
