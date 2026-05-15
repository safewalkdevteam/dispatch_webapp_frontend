const BoundariesSubApp = ({ groupedBoundaries, setGroupedBoundaries }) => {
    return (
        <section>
            <form>
                {
                    Object.keys(groupedBoundaries).map(key =>
                        <label
                            style={{
                                display: "block"
                            }}
                            onMouseEnter={(e) => {
                                setGroupedBoundaries({
                                    ...groupedBoundaries,
                                    [key]: {
                                        ...groupedBoundaries[key],
                                        hover: true
                                    }
                                });
                            }}
                            onMouseLeave={(e) => {
                                setGroupedBoundaries({
                                    ...groupedBoundaries,
                                    [key]: {
                                        ...groupedBoundaries[key],
                                        hover: false
                                    }
                                });
                            }}
                        >
                            <input onChange={(e) => {
                                const hidden = groupedBoundaries[key].hidden;
                                setGroupedBoundaries({
                                    ...groupedBoundaries,
                                    [key]: {
                                        ...groupedBoundaries[key],
                                        hidden: !hidden
                                    }
                                });
                            }} type="checkbox" defaultChecked={!groupedBoundaries[key].hidden}/>
                            { groupedBoundaries[key].name }
                        </label>
                    )
                }
            </form>
        </section>
    )
}

export default BoundariesSubApp;