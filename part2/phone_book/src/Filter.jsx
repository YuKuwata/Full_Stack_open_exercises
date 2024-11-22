/* eslint-disable react/prop-types */
export default function Filter(props) {
    const { setFilter } = props;
    return (
        <div>
            filter shown with
            <input onChange={(event) => {
                setFilter(event.target.value)
            }} />
        </div>
    )
}
