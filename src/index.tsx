import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GiphyViewer } from './component';
import { StudentProps } from '../demo/student';
import { Lecture } from '../demo/lecture';

export interface AppState {
    gifSource: string;
    query: string;
}

class Index extends React.Component<{}, AppState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            gifSource: '',
            query: ''
        };
    }

    public componentDidMount() {
        this.searchGiphy();
    }

    private sanitizeInput(query: string): string {
        return encodeURIComponent(query);
    }

    private searchGiphy(query?: string) {
        let httpQuery = 'api_key=dc6zaTOxFJmzC';
        if (query) {
            httpQuery += '&tag=' + 'cat';
        }

        fetch(`http://api.giphy.com/v1/gifs/random?${httpQuery}`)
            .then(response => {
                return response.json();
            })
            .then(giphy => {
                this.setState({
                    gifSource: giphy.data.images.original.url
                });
            });
    }

    private onSubmit = (e: any) => {
        this.searchGiphy(this.state.query);
        e.preventDefault();
    }

    private onQueryChanged = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            query: event.currentTarget.value
        });
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
                <GiphyViewer
                    source={this.state.gifSource}
                />

                {'Just some randoooom giphy'}
                <form
                    onSubmit={this.onSubmit}
                >
                    <input
                        type="text"
                        value={this.state.query}
                        onChange={this.onQueryChanged}
                        placeholder="Enter Your Interest!"
                        style={{
                            margin: '10px'
                        }}
                    />
                </form>
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
