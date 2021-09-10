import './styles.css'

const CharCard = ({character}) => {
    return(
    
        character.status === 'Alive' ?
        <div className='alive'>
            <h2>{character.name}</h2>
            <img src={character.image} alt={''}/>
        </div>
        :
        <div className='dead'>
            <h2>{character.name}</h2>
            <img src={character.image} alt={''}/>
        </div>
    )
}

export default CharCard