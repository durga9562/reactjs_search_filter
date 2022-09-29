const Table = ({ data }) => {
  return (
    <table className="table1" border="1 solid" style={{float:"center"}}>
      <tbody style={{border:"1 solid 2px violet"}}>
        <tr>
          <th>ID</th>
          <th>Name</th>
        
          
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td style={{border:"1 solid 2px violet"}}>{item.id}</td>
            <td>{item.ename}</td>
           
            
          
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
