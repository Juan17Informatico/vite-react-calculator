import { useState } from "react";
import { BotonsCalc } from "./components/BotonsCalc";

const initialState = ["%", "CE", "C", "‹="];

export function App() {
    return (
        <>
            <main>
                <section className="content">
                    <div>{/* optional "historial" */}</div>
                    <div className="resultado">
                        <section className="result">0</section>
                    </div>
                    <div className="calculo">
                        {/* <BotonsCalc values={initialState} /> */}
                        <section>
                            <div>% </div>
                            <div>CE </div>
                            <div>C </div>
                            <div>‹= </div>
                        </section>
                        <section>
                            <div>7</div>
                            <div>8</div>
                            <div>9</div>
                            <div>X</div>
                        </section>
                        <section>
                            <div>4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>-</div>
                        </section>
                        <section>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>+</div>
                        </section>
                        <section>
                            <div>±</div>
                            <div>0</div>
                            <div>,</div>
                            <div>=</div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    );
}
