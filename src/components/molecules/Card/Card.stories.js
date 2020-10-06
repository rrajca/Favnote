import React from 'react';
import Card from 'components/molecules/Card/Card';

export default {
  title: 'Molecules/Card',
  component: Card,
};

export const note = () => {
  const { id, title, content, created } = {
    id: 1,
    title: 'Wake me up when Vue ends',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
  };

  return (
    <Card key={id} cardType="notes" title={title} created={created} content={content} id={id} />
  );
};

export const twitter = () => {
  const { id, title, content, created, twitterName } = {
    id: 1,
    title: 'Hello Roman',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    created: '1 day',
    twitterName: 'hello_roman',
  };

  return (
    <Card
      key={id}
      cardType="twitters"
      title={title}
      created={created}
      content={content}
      twitterName={twitterName}
      id={id}
    />
  );
};

export const article = () => {
  const { id, title, content, created, articleUrl } = {
    id: 1,
    title: 'React on my mind',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
    articleUrl: 'https://youtube.com/helloroman',
    created: '1 day',
  };

  return (
    <Card
      key={id}
      cardType="articles"
      title={title}
      created={created}
      content={content}
      articleUrl={articleUrl}
      id={id}
    />
  );
};
