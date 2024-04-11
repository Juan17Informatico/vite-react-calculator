export const BotonsCalc = ({ values }) => {
    return (
        <section>
            {values.map((value) => (
                <div>{value}</div>
            ))}
        </section>
    );
};
