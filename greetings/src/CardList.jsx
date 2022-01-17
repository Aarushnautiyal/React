import record from './data'
import Card from './Card'

const CardList = () => {
    return (
        <div className='carding'>
           { record.map((elem,index)=>{
                return <Card name={elem.name} id = {elem.id} email={elem.email}/>
            })}
            {/* <Card name={record[0].name}/> */}
        </div>
    )
}

export default CardList
