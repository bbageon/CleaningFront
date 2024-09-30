import { ReactComponent as Star } from '../../../assets/icons/star.svg'

const Rating = ({
    width=16,
    rating,
}) => {
    return (
        <>
            {
                Array.from({ length: rating }, (_, i) => (
                    <Star key={i} width={width} />
                ))
            }
        </>
    )
}

export default Rating;