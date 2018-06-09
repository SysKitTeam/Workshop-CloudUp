import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getRandomGiphy } from './util/giphy.service';
import { SearchComponent } from './components/searchComponent';
import { GiphyViewer } from './components/giphyViewer';

interface IIndexState {
    gifSource: string;
}

class Index extends React.Component<{}, IIndexState> {

    constructor() {
        super({});
        this.state = {
            gifSource: ''
        };
    }

    private searchGiphy = (query?: string) => {
        getRandomGiphy(query).then(gifSource => {
            this.setState({
                gifSource: gifSource
            });
        });
    }

    private _alertaj(value: string) {
        alert(value);
    }

    public render(): JSX.Element {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <SearchComponent onSearch={this.searchGiphy} />
                <GiphyViewer gifSource={this.state.gifSource} />
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
