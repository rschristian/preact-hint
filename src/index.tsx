import { Fragment, h, VNode } from 'preact';
import 'bulma/css/bulma.min.css';

import PreactHint from './Hint';
import './style.css';

import data from './data.json';

type Contribution = {
    date: string;
    count: number;
    intensity: number;
};

export default function App(): VNode {
    const graphData: { contributions: Contribution[][] } = data;
    const contributionColorArray = ['#ededed', '#62A197', '#428892', '#296887', '#274969'];

    function createRects(): VNode[] {
        return graphData.contributions
            .map((week) =>
                week.map((day, y) => (
                    <rect
                        key={day.date}
                        x="0"
                        y={(12 + 2) * y}
                        width={12}
                        height={12}
                        fill={contributionColorArray[day.intensity]}
                        data-preact-hint={[day.count, day.date]}
                    />
                )),
            )
            .map((week, x) => (
                <g key={x} transform={`translate(${(12 + 2) * x}, 0)`}>
                    {week}
                </g>
            ));
    }

    return (
        <Fragment>
            <section class="hero">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="is-size-2">Preact Hint</h1>
                    </div>
                </div>
            </section>
            <div class="container">
                <div class="tile box preview">
                    <PreactHint
                        template={(content: string): VNode => {
                            const stringPieces = content.split(',');
                            return (
                                <Fragment>
                                    <strong>{stringPieces[0]} Contributions</strong> on {stringPieces[1]}
                                </Fragment>
                            );
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox={`0 0 ${53 * (12 + 2) - 2} ${(12 + 2) * 7 - 2}`}
                        >
                            {createRects()}
                        </svg>
                    </PreactHint>
                </div>
            </div>
        </Fragment>
    );
}
