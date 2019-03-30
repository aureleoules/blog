import React from 'preact';


import Markdown from 'preact-markdown';

import highlight from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

import './styles.scss';

import Loader from '../../components/Loader';

import Logo from '../../assets/logo.png';

import {Link} from 'preact-router/match';

const Backpulse = new (require("backpulse-wrapper"))("aureleoules");
class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            article: {
                title: "",
                content: ""
            },
            fetched: false
        }
    }

    componentWillReceiveProps() {
        this.showColors();
    }

    componentDidMount() {
        // highlight.initHighlightingOnLoad();
        Backpulse.fetchArticle(this.props.article, article => {
            this.setState({article, fetched: true}, () => {
                this.showColors()
                this.fixLinks();
            });
        });
    }

    fixLinks = () => {
        var links = document.links;
        for (let i = 0; i < links.length; i++) {
            if (links[i].hostname != window.location.hostname) {
                links[i].target = '_blank';
            } 
        }
    }

    showColors = () => {
        const elements = document.querySelectorAll("pre code");
        for(let i = 0; i < elements.length; i++) {
            const element = elements[i];
            highlight.highlightBlock(element);
        }
    }

    render() {
        return (
            <div className="page article">
                <Link className="logo" href="/">
                    <img src={Logo}/>
                </Link>
                {!this.state.fetched && <Loader/>}
                {this.state.fetched && 
                    <div className="article-content">
                        <h1 className="title">{this.state.article.title}</h1>
                        <Markdown markdown={this.state.article.content}/>
                    </div>
                }
            </div>
        )
    }
}

export default Article;