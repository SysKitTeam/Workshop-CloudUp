import * as React from 'react';

export interface HistoryProps {
    historyItems: HistoryItem[];
}

export interface HistoryItem {
    url: string;
    input?: string;
}

export class History extends React.PureComponent<HistoryProps, never> {
    public render(): JSX.Element {
        return (
            <>
                {this.props.historyItems && this.props.historyItems.map((x, i) => (
                    <div className="" key={i}>
                        <img src={x.url} />
                        <span>{x.input}</span>
                    </div>
                )
                )}
            </>
        );
    }
}