
const Props = ({name}) =>{
    return(
        <>
             <div>
         <h1>My name is {name}.</h1>
         
       </div>
        </>
    )
}
Props.defaultProps = {
        name: "shiva"
      
      }
export default Props