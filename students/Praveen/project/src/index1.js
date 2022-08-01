

export const Marks = (props) => {
  const data = {
    name: props.name,
    sub1: props.sub1,
    sub2: props.sub2,
    sub3: props.sub3,
  };

  const student1 = [data];

  return (
    <div>
      <h3>Grades</h3>

      <div>
        {student1.map((item) => {
          return (
            <div>
              <h4>Name:-{item.name}</h4>
              <h4>s1marks:-{item.sub1}</h4>
              <h4>s2marks:-{item.sub2}</h4>
              <h4>s3marks:-{item.sub3}</h4>

              
            </div>
          );
        })}
      </div>
    </div>
  );
};