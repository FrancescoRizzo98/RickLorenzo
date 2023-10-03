import { Character } from '@/types/Character'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function CharacterDetailPage() {

    const [personaggio, setPersonaggio] = useState<Character>()
    const router = useRouter()
    const characterId = router.query.id;
    const[isLoading,setIsLoading] =useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        if (characterId !== undefined)
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
                .then(response => setPersonaggio(response.data))
                //guardare da preview o fare un console.log 
                .catch(error => console.log(error))
                .finally(()=> setIsLoading(false))
    }, [characterId])


    return <>
        {isLoading && 'file is loading'}
        <img src={personaggio?.image} alt={personaggio?.name} />
        <p>{personaggio?.name}</p>
        {personaggio?.created !== undefined && <p>{new Date(personaggio.created).toLocaleDateString()}</p>}
        <p>{personaggio?.origin.name}</p>
        <p>{personaggio?.gender}</p>
        <p>{personaggio?.species}</p>
        <p>{personaggio?.status}</p>
        <p>{personaggio?.type}</p>
        {personaggio?.episode.map (episode => <p>{episode}</p>)}
    </>
}