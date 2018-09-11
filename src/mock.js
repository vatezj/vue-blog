const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function () {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }

    return {
        articles: articles
    }
}

const postsLists = function () {
    let postsLists = {
        "code": "000",
        "post_preview_lists": []
    }
    for (let i = 0; i < 8; i++) {
        let newArticleObject = {
            post_info: Random.csentence(5, 30), //  Random.csentence( min, max )
            // thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            tags: [
                {
                    "tag_name": Random.cname()
                }], // Random.cname() 随机生成一个常见的中文姓名
            post_time: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        postsLists.post_preview_lists.push(newArticleObject)
    }
    return postsLists
}

const postTags = function () {
    let postTags = {
        "code": "000",
        "tags": [],
        "posts":{
            "tag":"centos",
            "post_preview_lists":[]
        }
    }
    for (let i = 0; i < 8; i++) {
        let newArticleObject = {
            tag_name: Random.cname(3, 10), //  Random.csentence( min, max )
        }
        postTags.tags.push(newArticleObject)
    }
    for (let i = 0; i < 10; i++) {
        let newArticleObject = {
            post_info: Random.csentence(5, 30), //  Random.csentence( min, max )
        }
        postTags.posts.post_preview_lists.push(newArticleObject)
    }
    return postTags
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData);
Mock.mock('/post/lists', 'get', postsLists);
Mock.mock('/tags/lists', 'get', postTags);