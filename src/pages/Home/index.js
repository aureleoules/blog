import React from 'preact';

import Logo from '../../assets/logo.png';
import './styles.scss';
import Article from '../../components/Article';

import BackpulseIcon from '../../assets/icons/backpulse.png';

const Backpulse = new (require("backpulse-wrapper"))("aureleoules");
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            fetched: false
        }
    }

    componentDidMount() {
        Backpulse.fetchArticles(articles => {
            this.setState({articles, fetched: true});
        });
    }

    render() {
        return (
            <div className="home">
                <div className="menu">
                    <a class="logo" href="https://www.aureleoules.com" target="_blank">
                        <img src={Logo}/>
                    </a>
                </div>
                <div className="bottom">
                    <div className="articles">
                        {this.state.articles.map((article, i) => (
                            <Article article={article} key={i}/>
                        ))}
                    </div>
                </div>

                {/* <div className="made-backpulse">
                    Made with <img src={BackpulseIcon}/>
                </div> */}
            </div>
        )
    }
}

export default Home;