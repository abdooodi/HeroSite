type CharacterTraitProps = {
    trait: string
    value: string
};

export default function CharacterTrait(props: CharacterTraitProps) {
    const { trait, value } = props;


    return (
        <p className="text-foreground text-m">
        <span className="font-semibold">{trait}:</span> {value}
        </p>

    );
}