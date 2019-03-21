import React from 'preact';

import './styles.scss';
import { Link } from 'preact-router/match';

class Article extends React.Component {
    render() {
        return (
            <Link className="article-box-container" href={"/article/" + this.props.article.short_id}>
                {this.props.article.title}
            </Link>
        )
    }
}

export default Article;