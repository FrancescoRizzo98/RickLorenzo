import { Character } from '@/types/Character'

type Props = {
    character: Character
}

export default function CharacterCard(props: Props) {
    return <>
        <a href={`/characters/${props.character.id}`}>Visita dettaglio di: {props.character.name}</a>


{/* Alternativa ad IF con operatori ? : */}
<a href={props.character.name == "Morty Smith" ?`/characters/${props.character.id}}` :'www.google.com'}>
    {props.character.name == "Morty Smith" ?
    <p>Ciao {props.character.name}</p> :
    <p>Visita dettaglio di:{props.character.name}</p>
}
</a>

{props.character.name == "Morty Smith" ?
    <p>Ciao {props.character.name}</p> :
    <p>Visita dettaglio di:{props.character.name}</p>
}
    </>
}