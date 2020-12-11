import { renderTreee } from '../rerender'

let state = {
  posts: [
    {key:0,id:0, likeCount:5, message:'Lorem ipsum, dolor sit amet consectetur'},
    {key:1,id:1, likeCount:52, message:'Illum ipsam, quidem deleniti, distinctio sint'},
    {key:2,id:2, likeCount:11, message:'Molestiae labore voluptates modi minus mollitia'},
    {key:3,id:3, likeCount:7, message:'fugit eligendi odit fugiat '},
    {key:4,id:4,likeCount:13, message:'quia quae numquam est perferendis'},
    {key:5,id:5, likeCount:6, message:'bаавы fsd'}
  ],

  contacts:[
    {key: 0,id:1, name:'Name1'},
    {key: 1,id:2, name:'Name2'},
    {key: 2,id:3, name:'Name3'},
    {key: 3,id:4, name:'Name4'},
    {key: 4,id:5, name:'Name5'},
    {key: 5,id:6, name:'Name6'},
    {key: 6,id:7, name:'Name7'},
    {key: 7,id:8, name:'Name8'},
    {key: 8,id:9, name:'Name9'},
    {key: 9,id:10, name:'Name10'},
    {key: 10,id:11, name:'Name11'},
    {key: 11,id:12, name:'Name12'},
    {key: 12,id:13, name:'Name13'},
    {key: 13,id:14, name:'Name14'},
    {key: 14,id:15, name:'Name15'},
    {key: 15,id:16, name:'Name16'},
    {key: 16,id:17, name:'Name17'},
    {key: 17,id:18, name:'Name18'},
    {key: 18,id:19, name:'Name19'},
    {key: 19,id:20, name:'Name20'},
  ],
  messages: [
    {key: 0,id:0, message:'Illum ipsam, quidem deleniti, distinctio sint'},
    {key: 1,id:1, message:'Illum ipsam, quidem deleniti, distinctio '},
    {key: 2,id:2, message:'Illum ipsam, quidem deleniti, sint'},
    {key: 3,id:3, message:'Illum ipsam, quidem distinctio sint'},
    {key: 4,id:4, message:'Illum ipsam, deleniti, distinctio sint'},
    {key: 5,id:5, message:'Illum quidem deleniti, distinctio sint'},
    {key: 6,id:6, message:'Illum ipsam, quidem deleniti, distinctio sint'},
    {key: 7,id:7, message:'Illum ipsam, quidem deleniti, distinctio '},
    {key: 8,id:8, message:'Illum ipsam, quidem deleniti, sint'},
    {key: 9,id:9, message:'Illum ipsam, quidem distinctio sint'},
    {key: 10,id:10, message:'Illum ipsam, deleniti, distinctio sint'},
    {key: 11,id:11, message:'Illum quidem deleniti, distinctio sint'},
    {key: 12,id:12, message:'Illum ipsam, deleniti, distinctio sint'},
    {key: 13,id:13, message:'Illum quidem deleniti, distinctio sint'},
    {key: 14,id:14, message:'Illum ipsam, deleniti, distinctio sint'},
    {key: 15,id:15, message:'Illum quidem deleniti, distinctio sint'},
    {key: 16,id:16, message:'Illum ipsam, deleniti, distinctio sint'},
    {key: 17,id:17, message:'Illum quidem deleniti, distinctio sint'},
    {key: 18,id:18, message:'Illum ipsam, deleniti, distinctio sint'},
    {key: 19,id:19, message:'Illum quidem deleniti, distinctio sint'},
  ], 
  friends: [
    {name: 'name1',id: 0,key: 0},
    {name: 'name2',id: 1,key: 1},
    {name: 'name3',id: 2,key: 2},
    {name: 'name4',id: 3,key: 3},
    {name: 'name5',id: 4,key: 4},
    {name: 'name6',id: 5,key: 5}
  ],
  avatars: [
    {id: 0,key: 0},
    {id: 1,key: 1},
    {id: 2,key: 2},
    {id: 3,key: 3},
    {id: 4,key: 4},
    {id: 5,key: 5}
  ],


}
export let addPost = (postMessage) => {
  
  let newPost = {
    id:20,
    message: postMessage,
    likesCount: 0
  }
  state.posts.push(newPost);
  renderTreee(state)
}
export default state
