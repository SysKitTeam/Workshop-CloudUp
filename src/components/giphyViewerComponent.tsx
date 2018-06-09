import * as React from 'react';
import { url } from 'inspector';

interface IGiphyViewerProps {
    url: string;
    onSave();
}

export class GiphyViewerComponent extends React.Component<IGiphyViewerProps, {}> {

    constructor(props: IGiphyViewerProps) {
        super(props);
        this.state = {
            url: ''
        };
    }

    render() {
        return (
            <div>
                <img src={this.props.url} />
                <button onClick={this.props.onSave}>Save</button>
            </div>
        );
    }
}