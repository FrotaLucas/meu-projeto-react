function Seunome({setname}){
return (

  <div> 
    <p> Digite seu nome</p>
    <input type="text" placeholder="Qual seu nome" onChange={(e)=>{setname(e.target.value)}}> 
    </input>
  </div>
)

}

export default Seunome;