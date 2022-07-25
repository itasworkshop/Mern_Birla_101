const Grade = () =>{
  const cmark = 60;
  const mmark = 50;
  const pmark = 80;
  const total = cmark+mmark+pmark;
  const avg = total/3;
  let grade =0;
  if(avg>90)
  {
grade ="A";
  }
  else if(avg>70)
  {
    grade ="B";
  }
  else if(avg>50)
  {
    grade ="C";
  }
  else
  {
    grade ="fail";
  }
  return (
    <>
      <div>
      <h1>Student Grade Calcultor</h1>
        <h1>{total}</h1>
        <h1>{avg}</h1>
        <h1>{grade}</h1>
      </div>
    </>
  )
}
export default Grade;