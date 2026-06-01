const BoundariesSubApp = ({ groupedBoundaries, setGroupedBoundaries }) => {
    return (
        <section
            className={"boundaries-subapp"}
        >
            <form>
                {
                    Object.keys(groupedBoundaries).map(key =>
                        <label
                            key={key}
                            style={{
                                display: "block",
                                borderColor: key,
                                color: key,
                                cursor: "pointer"
                            }}
                            onMouseEnter={(e) => {
                                setGroupedBoundaries(prev => {
                                    return {
                                        ...prev,
                                        [key]: {
                                            ...prev[key],
                                            hover: true
                                        }
                                    }
                                });
                            }}
                            onMouseLeave={(e) => {
                                setGroupedBoundaries(prev => {
                                    return {
                                        ...prev,
                                        [key]: {
                                            ...prev[key],
                                            hover: false
                                        }
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