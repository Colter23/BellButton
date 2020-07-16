import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

  const routes = [
    // {
    //   path: '',
    //   redirect: '/home'
    // },
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页'
      },
      component: Home
    },
    {
      path: '/audio',
      name: 'Audio',
      meta: {
        title: '音频'
      },
      component: () => import('../views/bellaudio/BellAudio.vue')
    },
    {
      path: '/album',
      name: 'Album',
      meta: {
        title: '相册'
      },
      component: () => import('../views/bellalbum/BellAlbum.vue')
    },
    {
      path: '/music',
      name: 'Music',
      meta: {
        title: '音乐'
      },
      component: () => import('../views/bellmusic/BellMusic.vue')
    },
    {
      path: '/video',
      name: 'Video',
      meta: {
        title: '视频'
      },
      component: () => import('../views/bellvideo/BellVideo.vue')
    },
    {
      path: '/about',
      name: 'About',
      meta: {
        title: '关于'
      },
      component: () => import('../views/about/About.vue')
    },
    {
      path: '/test',
      name: 'Test',
      meta: {
        title: '测试'
      },
      component: () => import('../views/test/Test.vue')
    }
  ]

const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes
})

export default router;
