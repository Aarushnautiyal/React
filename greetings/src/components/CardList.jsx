import Card from './Card'

const CardList = (props) => {
    return (
        <div className='carding'>
           { props.record.map((elem,index)=>{
                return <Card key={elem.id} name={elem.name} id = {elem.id} email={elem.email}/>
            })}
            {/* <Card name={record[0].name}/> */}
        </div>
    )
}

export default CardList
