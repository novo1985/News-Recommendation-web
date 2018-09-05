// var express = require('express');
// var router = express.Router();

// var rpc_client = require('../rpc_client/rpc_client');

// /* GET news summary list. */
// // router.get('/userId/:userId/pageNum/:pageNum', function(req, res, next) {
// //   console.log('Fetching news...');
// //   user_id = req.params['userId'];
// //   page_num = req.params['pageNum'];

// //   rpc_client.getNewsSummariesForUser(user_id, page_num, function(response) {
// //     res.json(response);
// //   });
// // });

// router.get('/', function(req, res, next) {
//   news = [
//     {
//       author: 'James Mackintosh',
//       title: 'Elon Musk\\u2019s Flawed Plan for Tesla Shareholders',
//       description:
//         'Elon Musk\\u2019s latest piece of showmanship\\u2014an offer to take electric-car maker Tesla private\\u2014amounts to a slap in the face for shareholders, writes James Mackintosh.',
//       url:
//         'https://www.wsj.com/articles/elon-musks-flawed-plan-for-tesla-shareholders-1533807186?mod=hp_lead_pos2',
//       urlToImage: 'https://images.wsj.net/im-21488/social',
//       publishedAt: '2018-08-09T09:33:00Z',
//       source: 'the-wall-street-journal',
//       digest: 'ec477c7af75ccd596a8898b8018e4669'
//     },
//     {
//       author: 'Joe Flint',
//       title: 'Tribune Terminates $3.9 Billion Merger With Rival Sinclair',
//       description:
//         'Tribune Media terminated its merger agreement with rival TV station-owner Sinclair Broadcast Group and sued the company, alleging it failed to make sufficient efforts to get their $3.9 billion deal approved by regulators.',
//       url:
//         'https://www.wsj.com/articles/tribune-media-terminates-merger-agreement-with-sinclair-broadcast-group-1533810907?mod=hp_lead_pos4',
//       urlToImage: 'https://images.wsj.net/im-21504/social',
//       publishedAt: '2018-08-09T10:35:00Z',
//       source: 'the-wall-street-journal',
//       digest: '91ed5884a5f043f441969deea36902fa'
//     },
//     {
//       author: 'James Mackintosh',
//       title: 'Elon Musk\\u2019s Flawed Plan for Tesla Shareholders',
//       description:
//         'Elon Musk\\u2019s latest piece of showmanship\\u2014an offer to take electric-car maker Tesla private\\u2014amounts to a slap in the face for shareholders, writes James Mackintosh.',
//       url:
//         'https://www.wsj.com/articles/elon-musks-flawed-plan-for-tesla-shareholders-1533807186?mod=hp_lead_pos2',
//       urlToImage: 'https://images.wsj.net/im-21488/social',
//       publishedAt: '2018-08-09T09:33:00Z',
//       source: 'the-wall-street-journal',
//       digest: 'ec477c7af75ccd596a8898b8018e4669'
//     },
//     {
//       author: 'Joe Flint',
//       title: 'Tribune Terminates $3.9 Billion Merger With Rival Sinclair',
//       description:
//         'Tribune Media terminated its merger agreement with rival TV station-owner Sinclair Broadcast Group and sued the company, alleging it failed to make sufficient efforts to get their $3.9 billion deal approved by regulators.',
//       url:
//         'https://www.wsj.com/articles/tribune-media-terminates-merger-agreement-with-sinclair-broadcast-group-1533810907?mod=hp_lead_pos4',
//       urlToImage: 'https://images.wsj.net/im-21504/social',
//       publishedAt: '2018-08-09T10:35:00Z',
//       source: 'the-wall-street-journal',
//       digest: '91ed5884a5f043f441969deea36902fa'
//     }
//   ];
//   res.json(news);
// });

// /* Log news click. */
// router.post('/userId/:userId/newsId/:newsId', function(req, res, next) {
//   console.log('Logging news click...');
//   user_id = req.params['userId'];
//   news_id = req.params['newsId'];

//   rpc_client.logNewsClickForUser(user_id, news_id);
//   res.status(200);
// });

// module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  news = [
    {
      author: 'James Mackintosh',
      title: 'Elon Musk\\u2019s Flawed Plan for Tesla Shareholders',
      description:
        'Elon Musk\\u2019s latest piece of showmanship\\u2014an offer to take electric-car maker Tesla private\\u2014amounts to a slap in the face for shareholders, writes James Mackintosh.',
      url:
        'https://www.wsj.com/articles/elon-musks-flawed-plan-for-tesla-shareholders-1533807186?mod=hp_lead_pos2',
      urlToImage: 'https://images.wsj.net/im-21488/social',
      publishedAt: '2018-08-09T09:33:00Z',
      source: 'the-wall-street-journal',
      digest: 'ec477c7af75ccd596a8898b8018e4669'
    },
    {
      author: 'Joe Flint',
      title: 'Tribune Terminates $3.9 Billion Merger With Rival Sinclair',
      description:
        'Tribune Media terminated its merger agreement with rival TV station-owner Sinclair Broadcast Group and sued the company, alleging it failed to make sufficient efforts to get their $3.9 billion deal approved by regulators.',
      url:
        'https://www.wsj.com/articles/tribune-media-terminates-merger-agreement-with-sinclair-broadcast-group-1533810907?mod=hp_lead_pos4',
      urlToImage: 'https://images.wsj.net/im-21504/social',
      publishedAt: '2018-08-09T10:35:00Z',
      source: 'the-wall-street-journal',
      digest: '91ed5884a5f043f441969deea36902fa'
    },
    {
      author: 'James Mackintosh',
      title: 'Elon Musk\\u2019s Flawed Plan for Tesla Shareholders',
      description:
        'Elon Musk\\u2019s latest piece of showmanship\\u2014an offer to take electric-car maker Tesla private\\u2014amounts to a slap in the face for shareholders, writes James Mackintosh.',
      url:
        'https://www.wsj.com/articles/elon-musks-flawed-plan-for-tesla-shareholders-1533807186?mod=hp_lead_pos2',
      urlToImage: 'https://images.wsj.net/im-21488/social',
      publishedAt: '2018-08-09T09:33:00Z',
      source: 'the-wall-street-journal',
      digest: 'ec477c7af75ccd596a8898b8018e4669'
    },
    {
      author: 'Joe Flint',
      title: 'Tribune Terminates $3.9 Billion Merger With Rival Sinclair',
      description:
        'Tribune Media terminated its merger agreement with rival TV station-owner Sinclair Broadcast Group and sued the company, alleging it failed to make sufficient efforts to get their $3.9 billion deal approved by regulators.',
      url:
        'https://www.wsj.com/articles/tribune-media-terminates-merger-agreement-with-sinclair-broadcast-group-1533810907?mod=hp_lead_pos4',
      urlToImage: 'https://images.wsj.net/im-21504/social',
      publishedAt: '2018-08-09T10:35:00Z',
      source: 'the-wall-street-journal',
      digest: '91ed5884a5f043f441969deea36902fa'
    },
    {
      author: 'James Mackintosh',
      title: 'Elon Musk\\u2019s Flawed Plan for Tesla Shareholders',
      description:
        'Elon Musk\\u2019s latest piece of showmanship\\u2014an offer to take electric-car maker Tesla private\\u2014amounts to a slap in the face for shareholders, writes James Mackintosh.',
      url:
        'https://www.wsj.com/articles/elon-musks-flawed-plan-for-tesla-shareholders-1533807186?mod=hp_lead_pos2',
      urlToImage: 'https://images.wsj.net/im-21488/social',
      publishedAt: '2018-08-09T09:33:00Z',
      source: 'the-wall-street-journal',
      digest: 'ec477c7af75ccd596a8898b8018e4669'
    },
    {
      author: 'Joe Flint',
      title: 'Tribune Terminates $3.9 Billion Merger With Rival Sinclair',
      description:
        'Tribune Media terminated its merger agreement with rival TV station-owner Sinclair Broadcast Group and sued the company, alleging it failed to make sufficient efforts to get their $3.9 billion deal approved by regulators.',
      url:
        'https://www.wsj.com/articles/tribune-media-terminates-merger-agreement-with-sinclair-broadcast-group-1533810907?mod=hp_lead_pos4',
      urlToImage: 'https://images.wsj.net/im-21504/social',
      publishedAt: '2018-08-09T10:35:00Z',
      source: 'the-wall-street-journal',
      digest: '91ed5884a5f043f441969deea36902fa'
    },
    {
      author: 'James Mackintosh',
      title: 'Elon Musk\\u2019s Flawed Plan for Tesla Shareholders',
      description:
        'Elon Musk\\u2019s latest piece of showmanship\\u2014an offer to take electric-car maker Tesla private\\u2014amounts to a slap in the face for shareholders, writes James Mackintosh.',
      url:
        'https://www.wsj.com/articles/elon-musks-flawed-plan-for-tesla-shareholders-1533807186?mod=hp_lead_pos2',
      urlToImage: 'https://images.wsj.net/im-21488/social',
      publishedAt: '2018-08-09T09:33:00Z',
      source: 'the-wall-street-journal',
      digest: 'ec477c7af75ccd596a8898b8018e4669'
    },
    {
      author: 'Joe Flint',
      title: 'Tribune Terminates $3.9 Billion Merger With Rival Sinclair',
      description:
        'Tribune Media terminated its merger agreement with rival TV station-owner Sinclair Broadcast Group and sued the company, alleging it failed to make sufficient efforts to get their $3.9 billion deal approved by regulators.',
      url:
        'https://www.wsj.com/articles/tribune-media-terminates-merger-agreement-with-sinclair-broadcast-group-1533810907?mod=hp_lead_pos4',
      urlToImage: 'https://images.wsj.net/im-21504/social',
      publishedAt: '2018-08-09T10:35:00Z',
      source: 'the-wall-street-journal',
      digest: '91ed5884a5f043f441969deea36902fa'
    },
    {
      author: 'James Mackintosh',
      title: 'Elon Musk\\u2019s Flawed Plan for Tesla Shareholders',
      description:
        'Elon Musk\\u2019s latest piece of showmanship\\u2014an offer to take electric-car maker Tesla private\\u2014amounts to a slap in the face for shareholders, writes James Mackintosh.',
      url:
        'https://www.wsj.com/articles/elon-musks-flawed-plan-for-tesla-shareholders-1533807186?mod=hp_lead_pos2',
      urlToImage: 'https://images.wsj.net/im-21488/social',
      publishedAt: '2018-08-09T09:33:00Z',
      source: 'the-wall-street-journal',
      digest: 'ec477c7af75ccd596a8898b8018e4669'
    },
    {
      author: 'Joe Flint',
      title: 'Tribune Terminates $3.9 Billion Merger With Rival Sinclair',
      description:
        'Tribune Media terminated its merger agreement with rival TV station-owner Sinclair Broadcast Group and sued the company, alleging it failed to make sufficient efforts to get their $3.9 billion deal approved by regulators.',
      url:
        'https://www.wsj.com/articles/tribune-media-terminates-merger-agreement-with-sinclair-broadcast-group-1533810907?mod=hp_lead_pos4',
      urlToImage: 'https://images.wsj.net/im-21504/social',
      publishedAt: '2018-08-09T10:35:00Z',
      source: 'the-wall-street-journal',
      digest: '91ed5884a5f043f441969deea36902fa'
    },
    {
      author: 'James Mackintosh',
      title: 'Elon Musk\\u2019s Flawed Plan for Tesla Shareholders',
      description:
        'Elon Musk\\u2019s latest piece of showmanship\\u2014an offer to take electric-car maker Tesla private\\u2014amounts to a slap in the face for shareholders, writes James Mackintosh.',
      url:
        'https://www.wsj.com/articles/elon-musks-flawed-plan-for-tesla-shareholders-1533807186?mod=hp_lead_pos2',
      urlToImage: 'https://images.wsj.net/im-21488/social',
      publishedAt: '2018-08-09T09:33:00Z',
      source: 'the-wall-street-journal',
      digest: 'ec477c7af75ccd596a8898b8018e4669'
    },
    {
      author: 'Joe Flint',
      title: 'Tribune Terminates $3.9 Billion Merger With Rival Sinclair',
      description:
        'Tribune Media terminated its merger agreement with rival TV station-owner Sinclair Broadcast Group and sued the company, alleging it failed to make sufficient efforts to get their $3.9 billion deal approved by regulators.',
      url:
        'https://www.wsj.com/articles/tribune-media-terminates-merger-agreement-with-sinclair-broadcast-group-1533810907?mod=hp_lead_pos4',
      urlToImage: 'https://images.wsj.net/im-21504/social',
      publishedAt: '2018-08-09T10:35:00Z',
      source: 'the-wall-street-journal',
      digest: '91ed5884a5f043f441969deea36902fa'
    }
  ];
  res.json(news);
});

module.exports = router;
