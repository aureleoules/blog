import React from 'preact';

import './styles.scss';
import { Link } from 'preact-router/match';
import removeMd from 'remove-markdown';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
class Article extends React.Component {

    render() {
        return (
            <Link className="article-box-container" href={"/" + this.props.article.short_id}>
                <h1>{this.props.article.title}</h1>
                <p>{removeMd(this.props.article.content.substr(0, 100))}...</p>
                <span>{dayjs(this.props.article.created_at).fromNow()}</span>
            </Link>
        )
    }
}

export default Article;